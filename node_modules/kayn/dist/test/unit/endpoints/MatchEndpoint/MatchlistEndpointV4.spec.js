'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _MatchlistEndpointV = require('../../../../lib/Endpoints/MatchEndpoint/MatchlistEndpointV4');

var _MatchlistEndpointV2 = _interopRequireDefault(_MatchlistEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('MatchlistEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.Matchlist = new _MatchlistEndpointV2.default(defaultConfig);
    });

    describe('.by.accountID', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Matchlist.by.accountID('abcdefg');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: 'matchlists/by-account/abcdefg',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });

    describe('.Recent.by.accountID', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Matchlist.Recent.by.accountID('abcdefg');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: 'matchlists/by-account/abcdefg',
                query: [{ beginIndex: 0, endIndex: 20 }],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});