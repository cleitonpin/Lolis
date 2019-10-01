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

class StatusEndpoint extends _Endpoint2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.get = this.get.bind(this);

        this.serviceName = 'status';

        this.limiter = limiter;
    }

    /**
     * Get League of Legends status for the given shard.
     *
     * Implements GET `/lol/status/v3/shard-data`.
     */
    get() {
        return new _Request2.default(this.config, this.serviceName, 'shard-data', _methodNames2.default.LOL_STATUS.GET_SHARD_DATA, 'GET', this.limiter);
    }
}

exports.default = StatusEndpoint;