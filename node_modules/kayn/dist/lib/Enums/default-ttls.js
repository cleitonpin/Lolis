'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeTTLsFromGroupedTTLs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _methodNames = require('./method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultTTLPerGroup = {
    CHAMPION_MASTERY: 60 * 60, // 1 hr
    CHAMPION: 60 * 60 * 24 * 7, // 7 days
    DDRAGON: 60 * 60 * 24 * 30, // 30 days
    LEAGUE: 60 * 60 * 12, // 12 hrs
    LOL_STATUS: 0,
    MATCH: 60 * 60 * 24 * 7, // 7 days,
    SPECTATOR: 0,
    SUMMONER: 60 * 60 * 24 * 7, // 7 days
    THIRD_PARTY_CODE: 0,
    TOURNAMENT_STUB: 0,
    TOURNAMENT: 0
};

const makeTTLsFromGroupedTTLs = exports.makeTTLsFromGroupedTTLs = obj => {
    const ttls = [];
    Object.keys(obj).map(key => {
        Object.keys(_methodNames2.default[key]).map(innerKey => {
            ttls.push({
                [_methodNames2.default[key][innerKey]]: obj[key]
            });
        });
    });
    return ttls.reduce((total, curr) => _extends({}, total, curr), {});
};

const defaults = makeTTLsFromGroupedTTLs(defaultTTLPerGroup);

exports.default = defaults;