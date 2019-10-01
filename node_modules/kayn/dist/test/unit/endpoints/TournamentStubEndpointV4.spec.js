'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _TournamentStubEndpointV = require('../../../lib/Endpoints/TournamentStubEndpointV4');

var _TournamentStubEndpointV2 = _interopRequireDefault(_TournamentStubEndpointV);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('TournamentStubEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.TournamentStub = new _TournamentStubEndpointV2.default(defaultConfig);
    });

    describe('.create', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.TournamentStub.create('578', {
                hello: 'world'
            });
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'POST',
                serviceName: 'tournament-stub',
                endpoint: 'codes',
                query: [{ tournamentId: '578' }],
                region: '',
                isTournament: true,
                body: { hello: 'world' },
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.register', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.TournamentStub.register(379);
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'POST',
                serviceName: 'tournament-stub',
                endpoint: 'tournaments',
                query: [],
                region: '',
                isTournament: true,
                body: { providerId: 379 },
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });

        it('should have the correct payload #2', function () {
            const { payload } = this.TournamentStub.register(379, 'My First Tournament (Stub)');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'POST',
                serviceName: 'tournament-stub',
                endpoint: 'tournaments',
                query: [],
                region: '',
                isTournament: true,
                body: {
                    providerId: 379,
                    name: 'My First Tournament (Stub)'
                },
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.registerProviderData', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.TournamentStub.registerProviderData(REGIONS.NORTH_AMERICA, 'https://github.com/kayn');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'POST',
                serviceName: 'tournament-stub',
                endpoint: 'providers',
                query: [],
                region: '',
                isTournament: true,
                body: {
                    region: REGIONS.NORTH_AMERICA.toUpperCase(),
                    url: 'https://github.com/kayn'
                },
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.lobbyEvents', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.TournamentStub.lobbyEvents('379');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'tournament-stub',
                endpoint: 'lobby-events/by-code/379',
                query: [],
                region: '',
                isTournament: true,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});