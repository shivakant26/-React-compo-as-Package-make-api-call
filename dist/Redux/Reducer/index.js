"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _userReducer = _interopRequireDefault(require("./userReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootReducer = (0, _redux.combineReducers)({
  userReducer: _userReducer.default
});
var _default = rootReducer;
exports.default = _default;