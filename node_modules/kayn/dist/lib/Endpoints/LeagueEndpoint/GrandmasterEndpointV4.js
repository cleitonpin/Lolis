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

class GrandmasterEndpointV4 extends _LeagueSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.list = this.list.bind(this);

        this.limiter = limiter;
    }

    /**
     * Get the challenger league for given queue.
     *
     * Implements GET `/lol/league/v4/grandmasterleagues/by-queue/{queue}`.
     *
     * @param {string} queueName - The type of queue (e.g. 'RANKED_SOLO_5x5').
     */
    list(queueName) {
        return new _Request2.default(this.config, this.serviceName, `grandmasterleagues/by-queue/${queueName}`, _methodNames2.default.LEAGUE.GET_GRANDMASTER_LEAGUE_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = GrandmasterEndpointV4;