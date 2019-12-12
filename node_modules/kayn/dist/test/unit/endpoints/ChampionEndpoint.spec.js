'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _ChampionRotationEndpoint = require('../../../lib/Endpoints/ChampionRotationEndpoint');

var _ChampionRotationEndpoint2 = _interopRequireDefault(_ChampionRotationEndpoint);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { kaynInstance, defaultConfig } = _TestUtils2.default;

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance;


describe('ChampionEndpoint', function () {
    this.timeout(0);

    beforeEach(function () {
        this.Champion = {};
        this.Champion.Rotation = new _ChampionRotationEndpoint2.default(defaultConfig);
    });

    describe('.Rotation.list', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Champion.Rotation.list();
            (0, _chai.expect)(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'platform',
                endpoint: `champion-rotations`,
                query: [],
                region: '',
                isTournament: false,
                version: 3,
                apiURLPrefix: 'https://%s.api.riotgames.com'
            });
        });
    });
});