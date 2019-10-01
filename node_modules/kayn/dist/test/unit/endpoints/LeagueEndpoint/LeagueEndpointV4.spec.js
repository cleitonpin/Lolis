'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _LeagueEndpointV = require('../../../../lib/Endpoints/LeagueEndpoint/LeagueEndpointV4');

var _LeagueEndpointV2 = _interopRequireDefault(_LeagueEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('LeagueEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.League = new _LeagueEndpointV2.default(defaultConfig);
    });

    describe('.by.uuid', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.League.by.uuid(_mocks2.default.league.uuid);
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'league',
                endpoint: `leagues/${_mocks2.default.league.uuid}`,
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});