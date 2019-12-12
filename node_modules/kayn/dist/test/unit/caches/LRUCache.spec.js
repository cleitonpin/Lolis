'use strict';

var _chai = require('chai');

var _LRUCache = require('../../../lib/Caches/LRUCache');

var _LRUCache2 = _interopRequireDefault(_LRUCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LRUCache', function () {
    it('should initialize with default options', function () {
        const cache = new _LRUCache2.default();
        (0, _chai.expect)(cache.cache).to.not.be.null;
        (0, _chai.expect)(cache.cache.max).to.equal(500);
    });

    it('should initialize with configured options', function () {
        const options = {
            max: 1
        };
        const cache = new _LRUCache2.default(options);
        (0, _chai.expect)(cache.cache.max).to.equal(1);
    });

    it('set & get should work', function () {
        const cache = new _LRUCache2.default();
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
        const cache = new _LRUCache2.default();
        const key = 'hey-guys';
        cache.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.not.be.null;
            (0, _chai.expect)(cached).to.be.null;
        });
    });

    it('set & get should fail after expired timer', function (done) {
        const cache = new _LRUCache2.default();
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
        const cache = new _LRUCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 3000;
        const data = { cached: 'value' };
        cache.set({ key, ttl }, data);
        cache.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.be.null;
            (0, _chai.expect)(cached).to.not.be.null;
            cache.flushCache();
            cache.get({ key }, (err2, cached2) => {
                (0, _chai.expect)(err2).to.not.be.null;
                (0, _chai.expect)(cached2).to.be.null;
            });
        });
    });
});