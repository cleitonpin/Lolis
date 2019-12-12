'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Check if code is same as what I specify in file!
const verify = theirCode => theirCode === 'chau';

const main = (() => {
    var _ref = _asyncToGenerator(function* (kayn) {
        const { id: myID } = yield kayn.Summoner.by.name('9 5 mcdonalds');
        const code = yield kayn.ThirdPartyCode.by.summonerID(myID);
        console.log(verify(code));
    });

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
})();

module.exports = main;