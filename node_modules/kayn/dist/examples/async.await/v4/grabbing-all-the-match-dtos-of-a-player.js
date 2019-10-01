'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Simple way to grab all the matches of a player.

// Destructures matchlist object to matches.
const matchlistToMatches = ({ matches }) => matches;
// Destructures match object.
const matchToGameId = ({ gameId }) => gameId;

// getFN is required because of this file structure where `kayn` isn't included.
// Here we cannot do the calls in batch because totalGames is inaccurate.
// So the strategy instead is to make calls while incrementing beginIndex/endIndex
// until you get a response where the length of the matches is 0.
const getAllMatchIDs = (() => {
    var _ref = _asyncToGenerator(function* (matchlistDTO, accountID, getFn) {
        const { totalGames } = matchlistDTO;
        console.log(`Total number of games to process: ${totalGames}`);

        let rest = [];
        if (totalGames > 100) {
            for (let beginIndex = 100; beginIndex < totalGames; beginIndex += 100) {
                const endIndex = beginIndex + 100;
                const indexQuery = { beginIndex, endIndex };
                const matchlist = yield getFn(accountID, indexQuery);
                if (matchlist.matches.length === 0) break; // this is key
                rest = rest.concat(matchlist);
            }
        }

        return [matchlistDTO].concat(rest).map(matchlistToMatches).map(matchToGameId);
    });

    return function getAllMatchIDs(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})();

// THIS DOES NOT WORK because totalGames is inaccurate for people with
// large amounts of games.
const getAllMatchIDsInBatch = (() => {
    var _ref2 = _asyncToGenerator(function* (matchlistDTO, accountID, getFn) {
        const { totalGames } = matchlistDTO;
        console.log(`Total number of games to process: ${totalGames}`);

        // Batch up calls together.
        const apiCalls = [];
        if (totalGames > 100) {
            for (let beginIndex = 100; beginIndex < totalGames; beginIndex += 100) {
                const endIndex = beginIndex + 100;
                const indexQuery = { beginIndex, endIndex };
                apiCalls.push(getFn(accountID, indexQuery));
            }
        }

        return [matchlistDTO].concat((yield Promise.all(apiCalls))).map(matchlistToMatches).reduce(function (total, curr) {
            return total.concat(curr);
        }, []).map(matchToGameId);
    });

    return function getAllMatchIDsInBatch(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
})();

const main = (() => {
    var _ref3 = _asyncToGenerator(function* (kayn) {
        const getRankedMatchesForSummoner = (() => {
            var _ref4 = _asyncToGenerator(function* (accountID, indexQuery) {
                return kayn.Matchlist.by.accountID(accountID).region('na').query({ queue: 420, season: 11 }).query(indexQuery || {});
            });

            return function getRankedMatchesForSummoner(_x8, _x9) {
                return _ref4.apply(this, arguments);
            };
        })();

        const { accountId: accountID } = yield kayn.Summoner.by.name('9 5 mcdonalds');

        // First DTO to get the total number of games.
        const firstMatchlistDTO = yield getRankedMatchesForSummoner(accountID);
        const matchIDs = yield getAllMatchIDs(firstMatchlistDTO, accountID, getRankedMatchesForSummoner);

        // Now we have all the match ids!
        // Can batch process them now.
        const matches = yield Promise.all(matchIDs.map(kayn.Match.get));
        console.log(matches);
        console.log(`${matches.length} matches processed.`);
    });

    return function main(_x7) {
        return _ref3.apply(this, arguments);
    };
})();

module.exports = main;