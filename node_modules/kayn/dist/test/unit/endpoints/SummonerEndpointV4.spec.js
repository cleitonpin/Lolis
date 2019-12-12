'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _SummonerEndpointV = require('../../../lib/Endpoints/SummonerEndpointV4');

var _SummonerEndpointV2 = _interopRequireDefault(_SummonerEndpointV);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('SummonerEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.Summoner = new _SummonerEndpointV2.default(defaultConfig);
    });

    describe('.by.name', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Summoner.by.name(_mocks2.default.summoner.Contractz.name);
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'summoner',
                endpoint: `summoners/by-name/${_mocks2.default.summoner.Contractz.name}`,
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });

        it('should encode the summoner name', function () {
            const { payload } = this.Summoner.by.name(_mocks2.default.summoner.ShouldEncode);
            const { endpoint } = payload;
            (0, _chai.expect)(endpoint).to.equal('summoners/by-name/%5Bobject%20Object%5D');
        });
    });
});