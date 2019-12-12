"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Calls the featured games endpoint and then
// calls the current game endpoint on the first game's, first participant's id.

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const { gameList } = yield kayn.FeaturedGames.list();
        if (gameList.length > 0) {
            const { summonerName: firstPlayer } = gameList[0].participants[0];
            const { id } = yield kayn.Summoner.by.name(firstPlayer);
            const currentGameInfo = yield kayn.CurrentGame.by.summonerID(id);
            console.log(currentGameInfo);
        }
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;