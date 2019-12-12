'use strict';

var _chai = require('chai');

var _TestUtils = require('../../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _DDragonChampionEndpoint = require('../../../../lib/Endpoints/DDragonEndpoints/DDragonChampionEndpoint');

var _DDragonChampionEndpoint2 = _interopRequireDefault(_DDragonChampionEndpoint);

var _mocks = require('../../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

describe('DDragonChampionEndpoint', function () {
    this.timeout(0);

    beforeEach(function () {
        this.DDragonChampionEndpoint = new _DDragonChampionEndpoint2.default(defaultConfig);
    });

    describe('.get', function () {
        it('should have the correct version and locale #1', function () {
            const { payload } = this.DDragonChampionEndpoint.get('Aatrox').version('8.15.1').locale('en_SG');
            (0, _chai.expect)(payload).to.deep.equal({
                endpoint: 'champion/Aatrox.json',
                version: '8.15.1',
                locale: 'en_SG',
                region: '',
                type: 'cdn_data'
            });
        });
    });

    describe('.list', function () {
        it('should have the correct version and locale #1', function () {
            const { payload } = this.DDragonChampionEndpoint.list().version('8.15.1').locale('en_SG');
            (0, _chai.expect)(payload).to.deep.equal({
                endpoint: 'champion.json',
                version: '8.15.1',
                locale: 'en_SG',
                region: '',
                type: 'cdn_data'
            });
        });
    });
});