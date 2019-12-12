'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _LeagueEntriesEndpointV = require('../../../../lib/Endpoints/LeagueEndpoint/LeagueEntriesEndpointV4');

var _LeagueEntriesEndpointV2 = _interopRequireDefault(_LeagueEntriesEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('LeagueEntriesEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.LeagueEntries = new _LeagueEntriesEndpointV2.default(defaultConfig);
    });

    describe('.by.summonerID', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.LeagueEntries.by.summonerID('abcdefgh');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'league',
                endpoint: 'entries/by-summoner/abcdefgh',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });

        it('should have the correct method name', function () {
            const { methodName } = this.LeagueEntries.by.summonerID('abcdefgh').region('na');
            (0, _chai.expect)(methodName).to.equal('LEAGUE.GET_LEAGUE_ENTRIES_BY_SUMMONER_ID_V4');
        });
    });

    describe('.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.LeagueEntries.list('RANKED_SOLO_5x5', 'DIAMOND', 'I').region('kr');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'league',
                endpoint: 'entries/RANKED_SOLO_5x5/DIAMOND/I',
                query: [],
                region: 'kr',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });

        it('should have the correct method name', function () {
            const { methodName } = this.LeagueEntries.list('RANKED_SOLO_5x5', 'DIAMOND', 'I').region('na');
            (0, _chai.expect)(methodName).to.equal('LEAGUE.GET_LEAGUE_ENTRIES_BY_QUEUE_TIER_DIVISION_V4');
        });
    });
});