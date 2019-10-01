'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _DDragonVersionEndpoint = require('../../../../lib/Endpoints/DDragonEndpoints/DDragonVersionEndpoint');

var _DDragonVersionEndpoint2 = _interopRequireDefault(_DDragonVersionEndpoint);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

describe('DDragonVersionEndpoint', function () {
    this.timeout(0);

    beforeEach(function () {
        this.DDragonVersionEndpoint = new _DDragonVersionEndpoint2.default(defaultConfig);
    });

    describe('.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.DDragonVersionEndpoint.list();
            (0, _chai.expect)(payload).to.deep.equal({
                endpoint: 'versions.json',
                version: '', // irrelevant
                locale: '', // irrelevant
                region: '', // irrelevant
                type: 'api'
            });
        });
    });
});