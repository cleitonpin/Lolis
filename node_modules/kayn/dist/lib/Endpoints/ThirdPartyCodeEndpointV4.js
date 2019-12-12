'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PlatformSuperclass = require('./PlatformSuperclass');

var _PlatformSuperclass2 = _interopRequireDefault(_PlatformSuperclass);

var _Request = require('../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ThirdPartyCodeEndpointV4 extends _PlatformSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.by = {
            summonerID: this.summonerID.bind(this)
        };

        this.limiter = limiter;
    }

    /**
     * Get third party code for a given summoner ID.
     *
     * Implements GET `/lol/platform/v4/third-party-code/by-summoner/{encryptedSummonerId}`.
     *
     * @param {string} summonerID - The id of the summoner.
     */
    summonerID(summonerID) {
        return new _Request2.default(this.config, this.serviceName, `third-party-code/by-summoner/${summonerID}`, _methodNames2.default.THIRD_PARTY_CODE.GET_BY_SUMMONER_ID_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = ThirdPartyCodeEndpointV4;