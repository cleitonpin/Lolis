'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DateTimeHelper = require('./DateTimeHelper');

var _DateTimeHelper2 = _interopRequireDefault(_DateTimeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createRequestURL = (platformID, serviceName, endpoint, version, apiURLPrefix) => {
    const prefix = apiURLPrefix.replace(/%s/, platformID);
    return `${prefix}/lol/${serviceName}/v${version}/${endpoint}`;
};

const getURLWithKey = (platformID, serviceName, endpoint, key, version, apiURLPrefix) => {
    const requestURL = createRequestURL(platformID, serviceName, endpoint, version, apiURLPrefix);
    return requestURL + getAPIKey(requestURL, key);
};

const getAPIKey = (url, key) => `${url.lastIndexOf('?') === -1 ? '?' : '&'}api_key=${key ? key : ''}`;

const appendKey = (str, key, value) => str + (str ? '&' : '') + `${key}=${value}`;

const arrayToOptions = array => array.reduce((final, curr) => _extends({}, final, curr), {});

const stringifyOptions = options => {
    let stringifiedOpts = '';

    for (const key of Object.keys(options)) {
        if (Array.isArray(options[key])) {
            for (const value of options[key]) {
                stringifiedOpts = appendKey(stringifiedOpts, key, value);
            }
        } else {
            if (_DateTimeHelper2.default.checkIfDateParam(key)) {
                options[key] = _DateTimeHelper2.default.getEpoch(options[key]);
            }
            stringifiedOpts = appendKey(stringifiedOpts, key, options[key]);
        }
    }

    return stringifiedOpts;
};

const getQueryParamString = arrayOfOpts => {
    const str = stringifyOptions(arrayToOptions(arrayOfOpts));
    return str ? `?${encodeURI(str)}` : '';
};

const getURLWithQuery = (region, serviceName, endpoint, queryArray, isTournament, version, apiURLPrefix) => createRequestURL(isTournament ? 'americas' : region, serviceName, endpoint, version, apiURLPrefix) + getQueryParamString(queryArray);

exports.default = {
    createRequestURL,
    getAPIKey,
    getQueryParamString,
    getURLWithKey,
    getURLWithQuery,
    stringifyOptions
};