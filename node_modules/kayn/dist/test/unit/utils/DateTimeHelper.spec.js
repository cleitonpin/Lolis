'use strict';

var _chai = require('chai');

var _DateTimeHelper = require('../../../lib/Utils/DateTimeHelper');

var _DateTimeHelper2 = _interopRequireDefault(_DateTimeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { checkIfDateParam, getEpoch } = _DateTimeHelper2.default;

describe('DateTimeHelper', function () {
    describe('checkIfDateParam', function () {
        it('should work for beginTime', function () {
            (0, _chai.expect)(checkIfDateParam('beginTime')).to.be.true;
        });

        it('should work for endTime', function () {
            (0, _chai.expect)(checkIfDateParam('endTime')).to.be.true;
        });

        it('should return false for incorrect tag', function () {
            (0, _chai.expect)(checkIfDateParam('abcdefghijklmnopqrstuvwxyz')).to.be.false;
        });
    });

    describe('getEpoch', function () {
        it('should return epoch ms from date', function () {
            (0, _chai.expect)(getEpoch(new Date(1136073000))).to.equal(1136073000);
        });

        it('should return epoch ms from date string', function () {
            (0, _chai.expect)(getEpoch('Tue Jan 13 1970 19:34:33 GMT-0800 (PST)')).to.equal(1136073000);
        });

        it('should return identical number from number', function () {
            (0, _chai.expect)(getEpoch(1136073000)).to.equal(1136073000);
        });

        it('should return 0 if else', function () {
            (0, _chai.expect)(getEpoch(true)).to.equal(0);
        });
    });
});