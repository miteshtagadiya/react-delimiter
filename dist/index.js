'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var delimiter = exports.delimiter = function delimiter(a, string) {
  return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' ' + string + ' ');
};