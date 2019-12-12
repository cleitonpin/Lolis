'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _DDragonRealmEndpoint = require('../../../../lib/Endpoints/DDragonEndpoints/DDragonRealmEndpoint');

var _DDragonRealmEndpoint2 = _interopRequireDefault(_DDragonRealmEndpoint);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

describe('DDragonRealmEndpoint', function () {
    this.timeout(0);

    beforeEach(function () {
        this.DDragonRealmEndpoint = new _DDragonRealmEndpoint2.default(defaultConfig);
    });

    describe('.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.DDragonRealmEndpoint.list('euw');
            (0, _chai.expect)(payload).to.deep.equal({
                endpoint: 'euw.json',
                version: '', // irrelevant
                locale: '', // irrelevant
                region: '', // irrelevant
                type: 'realms'
            });
        });

        it('should have the correct default region #1', function () {
            const { payload } = this.DDragonRealmEndpoint.list();
            (0, _chai.expect)(payload).to.deep.equal({
                endpoint: 'na.json',
                version: '', // irrelevant
                locale: '', // irrelevant
                region: '', // irrelevant
                type: 'realms'
            });
        });
    });
});