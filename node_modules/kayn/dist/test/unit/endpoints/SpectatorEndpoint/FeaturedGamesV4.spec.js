'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _FeaturedGamesEndpointV = require('../../../../lib/Endpoints/SpectatorEndpoint/FeaturedGamesEndpointV4');

var _FeaturedGamesEndpointV2 = _interopRequireDefault(_FeaturedGamesEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('FeaturedGamesEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.FeaturedGames = new _FeaturedGamesEndpointV2.default(defaultConfig);
    });

    describe('.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.FeaturedGames.list();
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'spectator',
                endpoint: 'featured-games',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});