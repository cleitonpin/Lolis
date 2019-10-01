'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _ThirdPartyCodeEndpointV = require('../../../lib/Endpoints/ThirdPartyCodeEndpointV4');

var _ThirdPartyCodeEndpointV2 = _interopRequireDefault(_ThirdPartyCodeEndpointV);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('ThirdPartyCodeEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.ThirdPartyCode = new _ThirdPartyCodeEndpointV2.default(defaultConfig);
    });

    describe('.by.summonerID', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.ThirdPartyCode.by.summonerID('abcdefg');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'platform',
                endpoint: 'third-party-code/by-summoner/abcdefg',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});