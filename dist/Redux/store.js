"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _Reducer = _interopRequireDefault(require("./Reducer"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _redux.legacy_createStore)(_Reducer.default, (0, _redux.applyMiddleware)(_reduxThunk.default));
var _default = store;
exports.default = _default;