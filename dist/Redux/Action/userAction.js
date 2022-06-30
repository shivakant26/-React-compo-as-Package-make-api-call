"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var _actionType = require("../actionType");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getData = () => {
  return dispatch => {
    return _axios.default.get("https://jsonplaceholder.typicode.com/users").then(data => {
      dispatch({
        type: _actionType.ADD_DATA,
        payload: data
      });
    });
  };
};

exports.getData = getData;