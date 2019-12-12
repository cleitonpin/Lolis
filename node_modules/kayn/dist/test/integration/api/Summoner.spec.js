'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _summoner = require('../../fixtures/rest/summoner/summoner.json');

var _summoner2 = _interopRequireDefault(_summoner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { kayn } = _TestUtils2.default.kaynInstance;

describe('Summoner (integration)', function () {
    it('should work', _asyncToGenerator(function* () {
        const s = yield kayn.Summoner.by.name('Contractz');
        (0, _chai.expect)(s.id).to.equal(_summoner2.default.id);
        (0, _chai.expect)(s.accountId).to.equal(_summoner2.default.accountId);
        (0, _chai.expect)(s.summonerLevel).to.be.at.least(_summoner2.default.summonerLevel);
    }));
});