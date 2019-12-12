'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Grabs the champion mastery DTOs out of a set of champion ids from a specific player.

// Let's pretend that these IDs are the IDs of all the supports in the game.
const championIDs = [40, 67, 3, 4, 5, 6];

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const { id } = yield kayn.Summoner.by.name('Contractz');
        const getChampionMasteryFromCtz = kayn.ChampionMastery.get(id);
        const requests = championIDs.map(getChampionMasteryFromCtz);
        const result = yield Promise.all(requests);
        const scores = result.map(function (cm) {
            return cm.championPoints;
        });
        console.log(scores);
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;