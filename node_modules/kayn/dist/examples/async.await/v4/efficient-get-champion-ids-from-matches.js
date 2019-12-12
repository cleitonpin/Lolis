'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const getChampionIdFromMatch = (match, accountId) => {
    for (let i in match.participantIdentities) {
        if (match.participantIdentities[i].player.currentAccountId === accountId) {
            return match.participants[parseInt(i)].championId;
        }
    }
};

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const { accountId } = yield kayn.Summoner.by.name('Contractz');
        const rankGameIds = (yield kayn.Matchlist.by.accountID(accountId).query({ queue: 420 })).matches.map(function (el) {
            return el.gameId;
        });
        const championIds = yield Promise.all(rankGameIds.map((() => {
            var _ref2 = _asyncToGenerator(function* (gameId) {
                const matchDetail = yield kayn.Match.get(gameId).region('na');
                return getChampionIdFromMatch(matchDetail, accountId);
            });

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        })()));
        console.log(championIds, championIds.length);
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;