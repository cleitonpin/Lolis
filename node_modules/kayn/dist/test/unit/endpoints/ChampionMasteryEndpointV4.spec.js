'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _ChampionMasteryEndpointV = require('../../../lib/Endpoints/ChampionMasteryEndpointV4');

var _ChampionMasteryEndpointV2 = _interopRequireDefault(_ChampionMasteryEndpointV);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('ChampionMasteryEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.ChampionMastery = new _ChampionMasteryEndpointV2.default(defaultConfig);
    });

    describe('.get', function () {
        it('should have the correct payload #1', function () {
            const championID = 67;
            const { payload } = this.ChampionMastery.get('abcdefg')(championID);
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'champion-mastery',
                endpoint: `champion-masteries/by-summoner/abcdefg/by-champion/${championID}`,
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.ChampionMastery.list('abcdefg');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'champion-mastery',
                endpoint: 'champion-masteries/by-summoner/abcdefg',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.totalScore', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.ChampionMastery.totalScore('abcdefg');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'champion-mastery',
                endpoint: 'scores/by-summoner/abcdefg',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});