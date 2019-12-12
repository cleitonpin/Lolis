'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _MasterEndpointV = require('../../../../lib/Endpoints/LeagueEndpoint/MasterEndpointV4');

var _MasterEndpointV2 = _interopRequireDefault(_MasterEndpointV);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('MasterEndpointV4', function () {
    this.timeout(0);

    beforeEach(function () {
        this.Master = new _MasterEndpointV2.default(defaultConfig);
    });

    describe('.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Master.list('RANKED_SOLO_5x5');
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'league',
                endpoint: 'masterleagues/by-queue/RANKED_SOLO_5x5',
                query: [],
                region: '',
                isTournament: false,
                version: 4,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});