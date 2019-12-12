'use strict';

var _ = require('./');

var _getLast10RankedMatchesEfficiently = require('./examples/async.await/v4/get-last-10-ranked-matches-efficiently');

var _getLast10RankedMatchesEfficiently2 = _interopRequireDefault(_getLast10RankedMatchesEfficiently);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
const redisCache = new RedisCache({
    host: 'localhost',
    port: 5000,
    keyPrefix: 'kayn',
});
*/

const myCache = new _.LRUCache({ max: 5 });

const kayn = (0, _.Kayn)()({
    region: 'na',
    debugOptions: {
        isEnabled: true,
        showKey: false
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000
    },
    cacheOptions: {
        cache: new _.BasicJSCache()
    }
});

const main = (() => {
    var _ref = _asyncToGenerator(function* () {
        console.log((yield kayn.Summoner.by.name('Contractz')));
        yield kayn.League.Entries.list('RANKED_SOLO_5x5', 'DIAMOND', 'I');
    });

    return function main() {
        return _ref.apply(this, arguments);
    };
})();

main();