'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const providerID = yield kayn.TournamentStub.registerProviderData('na', 'https://localhost/cb');
        const tournamentID = yield kayn.TournamentStub.register(providerID, 'kappa');
        const codes = yield kayn.TournamentStub.create(tournamentID, {
            mapType: 'SUMMONERS_RIFT',
            metadata: 'Kappa',
            pickType: 'TOURNAMENT_DRAFT',
            spectatorType: 'NONE',
            teamSize: 5
        }).query({ count: 5 });

        console.log(codes);
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;