'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _CurrentGameEndpointV = require('../../../../lib/Endpoints/SpectatorEndpoint/CurrentGameEndpointV4');

var _CurrentGameEndpointV2 = _interopRequireDefault(_CurrentGameEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('CurrentGameEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.CurrentGame = new _CurrentGameEndpointV2.default(defaultConfig);
    });

    describe('.by.summonerID', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.CurrentGame.by.summonerID('abcdefg');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'spectator',
                endpoint: 'active-games/by-summoner/abcdefg',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});