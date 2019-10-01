'use strict';

var _chai = require('chai');

var _BasicJSCache = require('../../../lib/Caches/BasicJSCache');

var _BasicJSCache2 = _interopRequireDefault(_BasicJSCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BasicJSCache', function () {
    it('should initialize', function () {
        (0, _chai.expect)(new _BasicJSCache2.default().cache).to.not.be.null;
    });

    it('set & get should work', function () {
        const cache = new _BasicJSCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 3000;
        const data = { cached: 'value' };
        cache.set({
            key,
            ttl
        }, data);
        cache.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.be.null;
            (0, _chai.expect)(cached).to.not.be.null;
            (0, _chai.expect)(cached).to.deep.equal(data);
        });
    });

    it('get should fail if data does not exist', function () {
        const cache = new _BasicJSCache2.default();
        const key = 'hey-guys';
        cache.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.not.be.null;
            (0, _chai.expect)(cached).to.be.null;
        });
    });

    it('set & get should fail after expired timer', function (done) {
        const cache = new _BasicJSCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 100;
        const data = { cached: 'value' };
        cache.set({
            key,
            ttl
        }, data);

        setTimeout(() => {
            cache.get({ key }, (err, cached) => {
                (0, _chai.expect)(err).to.not.be.null;
                (0, _chai.expect)(cached).to.be.null;
                done();
            });
        }, 1000);
    });

    it('flushCache() should reset cache', function () {
        const cache = new _BasicJSCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 3000;
        const data = { cached: 'value' };
        cache.set({ key, ttl }, data);
        cache.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.be.null;
            (0, _chai.expect)(cached).to.not.be.null;
            cache.flushCache();
            (0, _chai.expect)(cache.cache).to.deep.equal({});
            (0, _chai.expect)(Object.keys(cache.cache).length).to.equal(0);
        });
    });
});