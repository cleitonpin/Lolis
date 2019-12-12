'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _StatusEndpoint = require('../../../lib/Endpoints/StatusEndpoint');

var _StatusEndpoint2 = _interopRequireDefault(_StatusEndpoint);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('StatusEndpoint', function () {
    this.timeout(0);

    beforeEach(function () {
        this.Status = new _StatusEndpoint2.default(defaultConfig);
    });

    describe('.get', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Status.get();
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'status',
                endpoint: 'shard-data',
                query: [],
                region: '',
                isTournament: false,
                version: 3,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});