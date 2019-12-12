'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 841.586 ms on `spread` on 500 reqs/s
// 945.530 ms on `burst` on 500 reqs/s
const efficiently = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        console.time('efficiently');
        const { accountId } = yield kayn.Summoner.by.name('Jeongsik Oh');
        const { matches } = yield kayn.Matchlist.by.accountID(accountId).query({ queue: 420 });
        const gameIds = matches.slice(0, 10).map(function ({ gameId }) {
            return gameId;
        });
        const requests = gameIds.map(kayn.Match.get);
        const results = yield Promise.all(requests);
        console.log(results[0], results.length);
        console.timeEnd('efficiently');
    });

    return function efficiently(_x) {
        return _ref.apply(this, arguments);
    };
})();

// 1694.430 ms on `spread` and 500 reqs/s
// 1649.070 ms on `burst` on 500 reqs/s
const slowly = (() => {
    var _ref2 = _asyncToGenerator(function* (kayn) {
        console.time('slowly');
        const { accountId } = yield kayn.Summoner.by.name('Jeongsik Oh');
        const { matches } = yield kayn.Matchlist.by.accountID(accountId).query({ queue: 420 });
        const gameIds = matches.slice(0, 10).map(function ({ gameId }) {
            return gameId;
        });
        const results = [];
        for (let i = 0; i < gameIds.length; ++i) {
            results.push((yield kayn.Match.get(gameIds[i])));
        }
        console.log(results[0], results.length);
        console.timeEnd('slowly');
    });

    return function slowly(_x2) {
        return _ref2.apply(this, arguments);
    };
})();

const main = (() => {
    var _ref3 = _asyncToGenerator(function* (kayn) {
        yield efficiently(kayn);
        yield slowly(kayn);
    });

    return function main(_x3) {
        return _ref3.apply(this, arguments);
    };
})();

module.exports = main;