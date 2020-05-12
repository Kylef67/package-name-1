'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _crypto = _interopRequireDefault(require('crypto'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var myRandom = function myRandom() {
  return _crypto['default'].randomBytes(16).toString('hex');
};

var _default = myRandom;
exports['default'] = _default;
