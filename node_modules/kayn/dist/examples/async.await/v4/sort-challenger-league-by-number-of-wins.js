'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Prints out the highest number of wins in RANKED_SOLO_5x5 challenger league.

const sortByIncWins = (a, b) => b.wins - a.wins;

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const challengerLeague = yield kayn.Challenger.list('RANKED_SOLO_5x5');
        const players = challengerLeague.entries.sort(sortByIncWins);
        console.log(players);
        console.log(players[0].wins);
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;