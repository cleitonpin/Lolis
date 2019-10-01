'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KAYN_CONFIG_STRUCT = exports.DEFAULT_KAYN_CONFIG = undefined;

var _superstruct = require('superstruct');

var _methodNames = require('./Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_KAYN_CONFIG = exports.DEFAULT_KAYN_CONFIG = {
    region: 'na',
    locale: 'en_US',
    apiURLPrefix: 'https://%s.api.riotgames.com',
    debugOptions: {
        isEnabled: true,
        showKey: false,
        loggers: {}
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {}
        },
        ttls: {} /* The final ttls object after processing the above config. It overwrites the rest of ttls for backwards-compatibility's sake. */
    }
};

const ttlsValidator = {};
Object.keys(_methodNames2.default).forEach(s => {
    Object.keys(_methodNames2.default[s]).forEach(t => ttlsValidator[_methodNames2.default[s][t]] = 'number?');
});

const byGroupValidator = {};
Object.keys(_methodNames2.default).forEach(groupName => {
    byGroupValidator[groupName] = 'number?';
});

const KAYN_CONFIG_STRUCT = exports.KAYN_CONFIG_STRUCT = (0, _superstruct.struct)({
    region: 'string',
    locale: 'string',
    apiURLPrefix: 'string',
    debugOptions: {
        isEnabled: 'boolean',
        showKey: 'boolean',
        loggers: 'any'
    },
    requestOptions: {
        shouldRetry: 'boolean',
        numberOfRetriesBeforeAbort: 'number',
        delayBeforeRetry: 'number',
        burst: 'boolean',
        shouldExitOn403: 'boolean'
    },
    cacheOptions: {
        cache: 'any',
        ttls: ttlsValidator,
        timeToLives: {
            useDefault: 'boolean',
            byGroup: byGroupValidator,
            byMethod: ttlsValidator
        }
    },
    key: 'string'
});