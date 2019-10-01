'use strict';

var _chai = require('chai');

var _URLHelper = require('../../../lib/Utils/URLHelper');

var _URLHelper2 = _interopRequireDefault(_URLHelper);

var _mocks = require('../../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('URLHelper', function () {
    describe('stringifyOptions', function () {
        it('should be empty string with no options', function () {
            const { none: opts } = _mocks2.default.options;
            const actual = _URLHelper2.default.stringifyOptions(opts);
            (0, _chai.expect)(actual).to.equal('');
        });
        it('should be correct with single option', function () {
            const { single: opts } = _mocks2.default.options;
            const actual = _URLHelper2.default.stringifyOptions(opts);
            (0, _chai.expect)(actual).to.equal('name=Contractz');
        });
        it('should be correct with multiple options', function () {
            const { multiple: opts } = _mocks2.default.options;
            const actual = _URLHelper2.default.stringifyOptions(opts);
            (0, _chai.expect)(actual).to.equal('name=poz&rank=challenger');
        });
    });

    describe('getQueryParamString', function () {
        it('should get the correct query param string', function () {
            const { multiple: opts } = _mocks2.default.options;
            const arrayOfOpts = Object.keys(opts).map(k => ({
                [k]: opts[k]
            }));
            const actual = _URLHelper2.default.getQueryParamString(arrayOfOpts);
            (0, _chai.expect)(actual).to.equal('?name=poz&rank=challenger');
        });

        it('should get the encoded string', function () {
            const { multipleEncoded: opts } = _mocks2.default.options;
            const arrayOfOpts = Object.keys(opts).map(k => ({
                [k]: opts[k]
            }));
            const actual = _URLHelper2.default.getQueryParamString(arrayOfOpts);
            (0, _chai.expect)(actual).to.equal('?name=T%C3%A9st&rank=%C3%B3h%20no');
        });
    });

    describe('createRequestURL', function () {
        it('should create a request URL', function () {
            const actual = _URLHelper2.default.createRequestURL('na1', 'tournament', 'endpoint', '4', 'https://%s.api.riotgames.com');
            (0, _chai.expect)(actual).to.equal('https://na1.api.riotgames.com/lol/tournament/v4/endpoint');
        });

        it('should create a request URL with a custom API URL prefix', function () {
            const actual = _URLHelper2.default.createRequestURL('na1', 'tournament', 'endpoint', '4', 'http://%s.localhost');
            (0, _chai.expect)(actual).to.equal('http://na1.localhost/lol/tournament/v4/endpoint');
        });

        it('should create a request URL with a custom API URL prefix with no platform ID', function () {
            const actual = _URLHelper2.default.createRequestURL('na1', 'tournament', 'endpoint', '4', 'http://localhost');
            (0, _chai.expect)(actual).to.equal('http://localhost/lol/tournament/v4/endpoint');
        });
    });
});