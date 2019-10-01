'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LeagueSuperclass = require('./LeagueSuperclass');

var _LeagueSuperclass2 = _interopRequireDefault(_LeagueSuperclass);

var _Request = require('../../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LeagueEntriesEndpointV4 extends _LeagueSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.by = {
            summonerID: this.summonerID.bind(this)
        };

        this.list = this.list.bind(this);

        this.limiter = limiter;
    }

    /**
     * Get league entries in all queues for a given summoner ID.
     *
     * Implements GET `/lol/league/v4/entries/by-summoner/{encryptedSummonerId}`.
     *
     * @param {string} encryptedSummonerId - The encrypted id of the summoner.
     */
    summonerID(summonerID) {
        return new _Request2.default(this.config, this.serviceName, `entries/by-summoner/${summonerID}`, _methodNames2.default.LEAGUE.GET_LEAGUE_ENTRIES_BY_SUMMONER_ID_V4, 'GET', this.limiter, null, false, 4);
    }

    /**
     * Get all the league entries.
     *
     * Implements GET `/lol/league/v4/entries/{queue}/{tier}/{division}`.
     *
     * @param {string} queue - The queue to search for. e.g. RANKED_SOLO_5x5
     * @param {string} tier - The tier to search for. e.g. DIAMOND
     * @param {string} division - The division to search for. e.g. I
     */
    list(queue, tier, division) {
        return new _Request2.default(this.config, this.serviceName, `entries/${queue}/${tier}/${division}`, _methodNames2.default.LEAGUE.GET_LEAGUE_ENTRIES_BY_QUEUE_TIER_DIVISION_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = LeagueEntriesEndpointV4;