'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Endpoint = require('../Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

var _Request = require('../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChampionMasteryEndpointV4 extends _Endpoint2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
        this.totalScore = this.totalScore.bind(this);

        this.serviceName = 'champion-mastery';

        this.limiter = limiter;
    }

    /**
     * Get a champion mastery by player ID and champion ID. Returns a function that takes in a champion ID.
     *
     * Implements GET `/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}/by-champion/{championId}`.
     *
     * @param {string} summonerID - The ID of the summoner.
     * @returns {ChampionMastery.get.inner} - The curried function.
     */
    get(summonerID) {
        const self = this;
        /**
         * @name ChampionMastery.get.inner
         */
        return function (championID) {
            return new _Request2.default(self.config, self.serviceName, `champion-masteries/by-summoner/${summonerID}/by-champion/${championID}`, _methodNames2.default.CHAMPION_MASTERY.GET_CHAMPION_MASTERY_V4, 'GET', self.limiter, null, false, 4);
        };
    }

    /**
     * Get all champion mastery entries sorted by number of champion points descending.
     *
     * Implements GET `/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}`.
     *
     * @param {string} summonerID - The ID of the summoner.
     */
    list(summonerID) {
        return new _Request2.default(this.config, this.serviceName, `champion-masteries/by-summoner/${summonerID}`, _methodNames2.default.CHAMPION_MASTERY.GET_ALL_CHAMPION_MASTERIES_V4, 'GET', this.limiter, null, false, 4);
    }

    /**
     * Get all champion mastery entries sorted by number of champion points descending.
     *
     * Implements GET `/lol/champion-mastery/v4/scores/by-summoner/{encryptedSummonerId}`.
     *
     * @param {number} summonerID - The ID of the summoner.
     */
    totalScore(summonerID) {
        return new _Request2.default(this.config, this.serviceName, `scores/by-summoner/${summonerID}`, _methodNames2.default.CHAMPION_MASTERY.GET_CHAMPION_MASTERY_SCORE_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = ChampionMasteryEndpointV4;