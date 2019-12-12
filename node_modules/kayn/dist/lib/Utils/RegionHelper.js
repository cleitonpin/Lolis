'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regions = require('../Enums/regions');

var _regions2 = _interopRequireDefault(_regions);

var _platformIds = require('../Enums/platform-ids');

var _platformIds2 = _interopRequireDefault(_platformIds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const regionKeys = Object.keys(_regions2.default);
const asPlatformID = regionAbbr => _platformIds2.default[regionKeys.find(eq(regionAbbr))];
const isValidRegion = val => regionKeys.some(eq(val));

const RegionHelper = {
    asPlatformID,
    isValidRegion
};

const eq = v => k => _regions2.default[k] === v;

exports.default = RegionHelper;