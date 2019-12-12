'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Endpoint = require('../../Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LeagueSuperclass extends _Endpoint2.default {
    constructor() {
        super();

        this.serviceName = 'league';
    }
}

exports.default = LeagueSuperclass;