'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URLHelper = require('../Utils/URLHelper');

var _URLHelper2 = _interopRequireDefault(_URLHelper);

var _RegionHelper = require('../Utils/RegionHelper');

var _RegionHelper2 = _interopRequireDefault(_RegionHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function Request(config, serviceName, endpoint, methodName, httpMethodType, limiter, body, // POST/PUT
isTournament = false, version = 3, apiURLPrefix = config.apiURLPrefix) {
    this.payload = {
        method: httpMethodType || 'GET',
        serviceName,
        endpoint,
        query: [],
        region: '',
        body,
        isTournament,
        version,
        apiURLPrefix
    };
    if (this.payload.method === 'GET') delete this.payload.body;
    this.config = config;
    this.retriesLeft = this.config.requestOptions.numberOfRetriesBeforeAbort;
    this.methodName = methodName;
    this.limiter = limiter;
}

Request.prototype.region = function (region) {
    if (this.payload.region) throw new Error('Do not call Request.region twice.');
    if (!_RegionHelper2.default.isValidRegion(region)) throw new Error('Bad region value in Request.region.');
    if (region) this.payload.region = region;
    return this;
};

Request.prototype.regionNoThrow = function (region) {
    try {
        return this.region(region);
    } catch (invalidRegionException) {
        this.payload.region = ''; // reset region to avoid `Do not call Request.region twice error`
        return this.region(this.config.region);
    }
};

Request.prototype.query = function (obj) {
    if (typeof obj !== 'object') throw new Error('Request.query takes in an object.');
    if (obj) this.payload.query.push(obj);
    return this;
};

Request.prototype.then = function then(resolve, reject) {
    const self = this;
    return new Promise((innerResolve, innerReject) => self.callback((err, res) => err ? innerReject(err) : innerResolve(res))).then(resolve, reject);
};

Request.prototype.catch = callback => undefined.then(null, callback);

Request.prototype.callback = function (cb) {
    if (!this.payload.region) this.payload.region = this.config.region;

    const {
        endpoint,
        query,
        region,
        serviceName,
        body,
        isTournament,
        version,
        apiURLPrefix
    } = this.payload;
    const url = _URLHelper2.default.getURLWithQuery(_RegionHelper2.default.asPlatformID(region), serviceName, endpoint, query, isTournament, version, apiURLPrefix);
    const { key: token } = this.config;

    this.execute(url, body, token, this.retriesLeft, cb);
};

Request.prototype.execute = (() => {
    var _ref = _asyncToGenerator(function* (url, body, token, retriesLeft, cb) {
        var _this = this;

        const { cacheOptions, debugOptions, requestOptions } = this.config;
        const fn = (() => {
            var _ref2 = _asyncToGenerator(function* (err, data) {
                const debugURL = `${url}${debugOptions.showKey ? _URLHelper2.default.getAPIKey(url, token) : ''}`;
                try {
                    if (data) {
                        if (debugOptions.isEnabled) {
                            debugOptions.loggers.cache.get(debugURL);
                        }
                        ok(data)(cb);
                    } else {
                        if (debugOptions.isEnabled) {
                            const { method } = _this.payload;
                            let debugString = `[${method}] => ${debugURL}`;
                            if (method !== 'GET') debugString += ' with body: %O';
                            if (body) debugOptions.loggers.request.outgoing(debugString, body);else debugOptions.loggers.request.outgoing(debugString);
                        }
                        const res = yield _this.limiter.executing({
                            url,
                            method: _this.payload.method,
                            body,
                            token
                        });

                        if (debugOptions.isEnabled) {
                            debugOptions.loggers.request.incoming.success(debugURL);
                        }

                        try {
                            const blob = JSON.parse(res);
                            if (cacheOptions.cache && cacheOptions.ttls[_this.methodName] > 0) {
                                cacheOptions.cache.set({
                                    key: url,
                                    ttl: cacheOptions.ttls[_this.methodName]
                                }, blob);
                                if (debugOptions.isEnabled) {
                                    debugOptions.loggers.cache.set(`${url}`);
                                }
                            }
                            ok(blob)(cb);
                        } catch (ex) {
                            console.log(ex);
                        }
                    }
                } catch (_ref3) {
                    let { statusCode } = _ref3,
                        rest = _objectWithoutProperties(_ref3, ['statusCode']);

                    // ...rest is usually populated when there is a bigger error such
                    // as socket hang ups.
                    // It also occurs with 404's.
                    if (debugOptions.isEnabled) {
                        debugOptions.loggers.request.incoming.failure(`[${statusCode}] ${debugURL}`);
                    }
                    if (statusCode === 403) {
                        const errorMessage = '[kayn] Your key is either invalid or you are magically blacklisted. You should not be getting blacklisted with this rate limiter, so something is wrong with this library, the rate limiter, your network, and/or the LoL API! Perhaps the rate limiter is getting out of sync because you are making a ton (emphasis on a ton) of requests in parallel. Try to split your requests into chunks!';
                        if (requestOptions.shouldExitOn403) {
                            console.log(errorMessage + ' Exiting program...');
                            process.exit(1);
                        }
                        console.log(errorMessage);
                    }
                    if (requestOptions.shouldRetry && shouldRetry(statusCode)) {
                        if (retriesLeft > 0) {
                            return setTimeout(function () {
                                return _this.execute(url, body, token, retriesLeft - 1, cb);
                            }, requestOptions.delayBeforeRetry);
                        }
                    }
                    error({
                        statusCode, // null/undefined if not a simple request error
                        url: debugURL,
                        error: rest // the rest of the error object
                    })(cb);
                }
            });

            return function fn(_x6, _x7) {
                return _ref2.apply(this, arguments);
            };
        })();
        if (cacheOptions.cache) {
            cacheOptions.cache.get({ key: url }, fn);
        } else {
            fn();
        }
    });

    return function (_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
    };
})();

const shouldRetry = statusCode => statusCode === 500 || statusCode === 503;

const ok = blob => cb => cb(null, blob);
const error = blob => cb => cb(blob, null);

exports.default = Request;