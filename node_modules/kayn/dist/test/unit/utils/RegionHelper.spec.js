'use strict';

var _chai = require('chai');

var _RegionHelper = require('../../../lib/Utils/RegionHelper');

var _RegionHelper2 = _interopRequireDefault(_RegionHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { asPlatformID, isValidRegion } = _RegionHelper2.default;

describe('RegionHelper', function () {
    describe('asPlatformID', function () {
        it('should return respective platform ID', function () {
            (0, _chai.expect)(asPlatformID('na')).to.equal('na1');
            (0, _chai.expect)(asPlatformID('euw')).to.equal('euw1');
            (0, _chai.expect)(asPlatformID('lan')).to.equal('la1');
        });
    });

    describe('isValidRegion', function () {
        it('should return true', function () {
            (0, _chai.expect)(isValidRegion('na')).to.true;
        });

        it('should return false', function () {
            (0, _chai.expect)(isValidRegion('euwsucks')).to.be.false;
            (0, _chai.expect)(isValidRegion('na1')).to.be.false;
        });
    });
});