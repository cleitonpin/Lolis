'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Out of a player's ranked matchlist, grabs every match where they played a certain champion.

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const summoner = yield kayn.Summoner.by.name('Contractz');
        // No constants in library as of now. Will be added soon.
        const config = {
            query: 420,
            champion: 67,
            season: 7

            // Note that the grabbing of a matchlist is currently limited by pagination.
            // This API request only returns the first list. An enhanced version of this method
            // will probably be included in the enhancer (which will be part of this library) called Rhaast.
        };const matchlistDTO = yield kayn.Matchlist.by.accountID(summoner.accountId).region('na').query(config);

        console.log(matchlistDTO.totalGames, matchlistDTO.matches.length);
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;