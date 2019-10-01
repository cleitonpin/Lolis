'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _findInFiles = require('find-in-files');

var _findInFiles2 = _interopRequireDefault(_findInFiles);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _svgToPng = require('svg-to-png');

var _svgToPng2 = _interopRequireDefault(_svgToPng);

var _swagger_url = require('./swagger_url');

var _swagger_url2 = _interopRequireDefault(_swagger_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const notDone = [];

const ENDPOINTS_DIR_PATH = _path2.default.join(__dirname, '..', 'lib', 'Endpoints');
const PICTURES_PATH = _path2.default.join(__dirname, '..', '_pictures');
const API_COV_SVG_BTN_PATH = _path2.default.join(PICTURES_PATH, 'api_cov.svg');

const getBadgePath = percentage => `https://img.shields.io/badge/API_Coverage-${encodeURI(percentage)}-9C27B0.svg`;
const roundToHundredths = percentage => Math.round(100 * percentage) / 100;
const flatten = array => array.reduce((total, curr) => total.concat(curr), []);
const processSvg = (() => {
    var _ref = _asyncToGenerator(function* () {
        yield _svgToPng2.default.convert(API_COV_SVG_BTN_PATH, PICTURES_PATH);
        _fs2.default.unlink(API_COV_SVG_BTN_PATH, function (err) {
            if (err) throw err;
            console.log('done');
            console.log(notDone);
        });
    });

    return function processSvg() {
        return _ref.apply(this, arguments);
    };
})();

const incrementIfExists = (total, curr) => curr ? total + 1 : total;

(0, _request2.default)(_swagger_url2.default, (() => {
    var _ref2 = _asyncToGenerator(function* (err, res) {
        if (res) {
            const { paths } = JSON.parse(res.body);
            const pathsKeys = Object.keys(paths);

            const resultsPromises = Promise.all(pathsKeys.map((() => {
                var _ref3 = _asyncToGenerator(function* (pathKey) {
                    const methodTypes = Object.keys(paths[pathKey]).filter(function (t) {
                        return t === 'get';
                    });
                    const tmp = yield Promise.all(methodTypes.map((() => {
                        var _ref4 = _asyncToGenerator(function* (k) {
                            const targetEndpoint = `${k.toUpperCase()} \`${pathKey}\``;
                            const f = yield _findInFiles2.default.find(targetEndpoint, ENDPOINTS_DIR_PATH, '.js');
                            if (Object.keys(f).length === 0) notDone.push(targetEndpoint);
                            return Object.keys(f).length > 0;
                        });

                        return function (_x4) {
                            return _ref4.apply(this, arguments);
                        };
                    })()));
                    return tmp;
                });

                return function (_x3) {
                    return _ref3.apply(this, arguments);
                };
            })()));

            const results = flatten((yield resultsPromises));

            const total = results.reduce(incrementIfExists, 0);
            const percentage = roundToHundredths(total / results.length);
            const readablePercentage = `${percentage * 100}%`;
            const badgePath = getBadgePath(readablePercentage);

            _request2.default.get(badgePath).pipe(_fs2.default.createWriteStream(API_COV_SVG_BTN_PATH)).on('close', processSvg);
        }
    });

    return function (_x, _x2) {
        return _ref2.apply(this, arguments);
    };
})());