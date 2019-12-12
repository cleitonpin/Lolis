'use strict';

var _chai = require('chai');

var _TestUtils = require('../../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

var _matchlist_simple = require('../../fixtures/rest/match/matchlist_simple.json');

var _matchlist_simple2 = _interopRequireDefault(_matchlist_simple);

var _matchlist_modified_indices = require('../../fixtures/rest/match/matchlist_modified_indices.json');

var _matchlist_modified_indices2 = _interopRequireDefault(_matchlist_modified_indices);

var _matchlist_modified_times = require('../../fixtures/rest/match/matchlist_modified_times.json');

var _matchlist_modified_times2 = _interopRequireDefault(_matchlist_modified_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { kayn } = _TestUtils2.default.kaynInstance;

describe.skip('Matchlist (integration)', function () {
    it('should work for simple ranked request', _asyncToGenerator(function* () {
        const queue = 420;
        const ml = yield kayn.Matchlist.by.accountID(47776491);
        (0, _chai.expect)(ml.matches.length).to.equal(100);
        (0, _chai.expect)(ml.matches.length).to.equal(_matchlist_simple2.default.matches.length);
        (0, _chai.expect)(ml.startIndex).to.equal(0);
        (0, _chai.expect)(ml.endIndex).to.equal(100);
        (0, _chai.expect)(ml.totalGames).to.be.at.least(_matchlist_simple2.default.totalGames);
    }));

    it('should work with different beginIndex and endIndex', _asyncToGenerator(function* () {
        const queue = 420;
        const indexConfig = {
            beginIndex: 25,
            endIndex: 75
            // low `beginIndex` values seem to bug the totalGames.
            // we will ignore testing `totalGames` here.
        };const ml = yield kayn.Matchlist.by.accountID(47776491).query(indexConfig);
        (0, _chai.expect)(ml.matches.length).to.equal(_matchlist_modified_indices2.default.matches.length);
        (0, _chai.expect)(ml.startIndex).to.equal(indexConfig.beginIndex);
        (0, _chai.expect)(ml.endIndex).to.equal(indexConfig.endIndex);
        (0, _chai.expect)(ml.startIndex).to.equal(_matchlist_modified_indices2.default.startIndex);
        (0, _chai.expect)(ml.endIndex).to.equal(_matchlist_modified_indices2.default.endIndex);
    }));

    it('should work with different beginTime and endTime', _asyncToGenerator(function* () {
        const queue = 420;
        const timeConfig = {
            beginTime: 1514734330000,
            endTime: 1514993592000
        };
        const ml = yield kayn.Matchlist.by.accountID(233871907).query(timeConfig);

        (0, _chai.expect)(ml).to.deep.equal(_matchlist_modified_times2.default);

        for (let i = 0; i < ml.matches.length; ++i) {
            (0, _chai.expect)(ml.matches[i].timestamp).to.be.at.least(timeConfig.beginTime);
            (0, _chai.expect)(ml.matches[i].timestamp).to.be.at.most(timeConfig.endTime);
        }
    }));

    it('should throw 400 if beginTime and endTime are separated by more than a week', _asyncToGenerator(function* () {
        try {
            const queue = 420;
            const verySeparatedTimeConfig = {
                beginTime: 1512315130000,
                endTime: 1514993592000
            };
            const ml = yield kayn.Matchlist.by.accountID(233871907).query(verySeparatedTimeConfig);
        } catch ({ statusCode }) {
            (0, _chai.expect)(statusCode).to.equal(400);
        }
    }));
});