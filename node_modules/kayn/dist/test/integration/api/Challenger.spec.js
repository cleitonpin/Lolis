'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _challenger_league = require('../../fixtures/rest/league/challenger_league.json');

var _challenger_league2 = _interopRequireDefault(_challenger_league);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { kayn } = _TestUtils2.default.kaynInstance;

describe.skip('Challenger (integration)', function () {
    it('should work', _asyncToGenerator(function* () {
        const queue = 'RANKED_SOLO_5x5';
        const l = yield kayn.Challenger.list(queue);
        (0, _chai.expect)(l.name).to.equal(_challenger_league2.default.name);
        (0, _chai.expect)(l.tier).to.equal(_challenger_league2.default.tier);
        (0, _chai.expect)(l.queue).to.equal(_challenger_league2.default.queue);
        (0, _chai.expect)(l.queue).to.equal(queue);
        (0, _chai.expect)(_challenger_league2.default.queue).to.equal(queue);
        (0, _chai.expect)(l.leagueId).to.equal(_challenger_league2.default.leagueId);
        (0, _chai.expect)(l.entries.length).to.equal(200);
        (0, _chai.expect)(l.entries.length).to.equal(_challenger_league2.default.entries.length);
    }));

    it('should return 400 (BAD REQUEST) on bad queue', _asyncToGenerator(function* () {
        try {
            const queue = 'chain';
            const l = yield kayn.Challenger.list(queue);
        } catch ({ statusCode }) {
            (0, _chai.expect)(statusCode).to.equal(400);
        }
    }));
});