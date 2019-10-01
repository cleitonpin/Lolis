"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const match = yield kayn.Match.get(2877485196);
        const bans = match.teams.map(function (m) {
            return m.bans;
        }).reduce(function (t, c) {
            return t.concat(c);
        }, []);
        const ids = bans.map(function (b) {
            return b.championId;
        });
        const ddragonChampions = yield kayn.DDragon.Champion.listDataByIdWithParentAsId();
        const champions = ids.map(function (id) {
            return ddragonChampions.data[id];
        });
        console.log(champions);
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;