'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SpectatorSuperclass = require('./SpectatorSuperclass');

var _SpectatorSuperclass2 = _interopRequireDefault(_SpectatorSuperclass);

var _Request = require('../../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CurrentGameEndpointV4 extends _SpectatorSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.by = {
            summonerID: this.summonerID.bind(this)
        };

        this.limiter = limiter;
    }

    /**
     * Get current game information for the given summoner ID.
     *
     * Implements GET `/lol/spectator/v4/active-games/by-summoner/{encryptedSummonerId}`.
     *
     * @param {string} summonerID - The ID of a summoner.
     */
    summonerID(summonerID) {
        return new _Request2.default(this.config, this.serviceName, `active-games/by-summoner/${summonerID}`, _methodNames2.default.SPECTATOR.GET_CURRENT_GAME_INFO_BY_SUMMONER_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = CurrentGameEndpointV4;