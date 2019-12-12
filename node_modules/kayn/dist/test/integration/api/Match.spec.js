'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _match = require('../../fixtures/rest/match/match.json');

var _match2 = _interopRequireDefault(_match);

var _match_korea = require('../../fixtures/rest/match/match_korea.json');

var _match_korea2 = _interopRequireDefault(_match_korea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { kayn } = _TestUtils2.default.kaynInstance;

describe.skip('Match (integration)', function () {
    this.timeout(10000);

    it('should work', _asyncToGenerator(function* () {
        const m = yield kayn.Match.get(2685891793);
        (0, _chai.expect)(m).to.deep.equal(_match2.default);
    }));

    it('should work #2', _asyncToGenerator(function* () {
        const m = yield kayn.Match.get(3066040334).region('kr');
        (0, _chai.expect)(m).to.deep.equal(_match_korea2.default);
        (0, _chai.expect)(m.platformId).to.equal('KR');
    }));
});