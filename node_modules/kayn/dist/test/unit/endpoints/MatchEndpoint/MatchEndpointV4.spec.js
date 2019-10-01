'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _MatchEndpointV = require('../../../../lib/Endpoints/MatchEndpoint/MatchEndpointV4');

var _MatchEndpointV2 = _interopRequireDefault(_MatchEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('MatchEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.Match = new _MatchEndpointV2.default(defaultConfig);
    });

    describe('.get', function () {
        it('should have the correct payload #1', function () {
            const { id } = _mocks2.default.match;
            const { payload } = this.Match.get(id);
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: `matches/${id}`,
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.timeline', function () {
        it('should have the correct payload #1', function () {
            const { id } = _mocks2.default.match;
            const { payload } = this.Match.timeline(id);
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: `timelines/by-match/${id}`,
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('Tournament', function () {
        describe('.listMatchIDs', function () {
            it('should have the correct payload #1', function () {
                const { payload } = this.Match.Tournament.listMatchIDs('12345');
                (0, _chai.expect)(payload).to.deep.equal({
                    method: 'GET',
                    serviceName: 'match',
                    endpoint: 'matches/by-tournament-code/12345/ids',
                    query: [],
                    region: '',
                    isTournament: false,
                    version: 4,
                    apiURLPrefix: 'https://%s.api.riotgames.com'
                });
            });
        });

        describe('.get', function () {
            it('should have the correct payload #1', function () {
                const { payload } = this.Match.Tournament.get(12345, '12345');
                (0, _chai.expect)(payload).to.deep.equal({
                    method: 'GET',
                    serviceName: 'match',
                    endpoint: 'matches/12345/by-tournament-code/12345',
                    query: [],
                    region: '',
                    isTournament: false,
                    version: 4,
                    apiURLPrefix: 'https://%s.api.riotgames.com'
                });
            });
        });
    });
});