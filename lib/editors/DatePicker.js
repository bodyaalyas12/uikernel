"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../common/utils");

/**
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DatePickerEditor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DatePickerEditor, _React$Component);

  function DatePickerEditor() {
    (0, _classCallCheck2.default)(this, DatePickerEditor);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DatePickerEditor).apply(this, arguments));
  }

  (0, _createClass2.default)(DatePickerEditor, [{
    key: "onChange",
    value: function onChange(date) {
      if (date) {
        date = date.format(this.props.format);
      }

      this.props.onChange(date);
    }
  }, {
    key: "render",
    value: function render() {
      var otherProps = (0, _utils.omit)(this.props, ['textFormat', 'value', 'onChange', 'min', 'max']);
      return _react.default.createElement(_reactDatepicker.default, (0, _extends2.default)({}, otherProps, {
        dateFormat: this.props.textFormat,
        selected: this.props.value && (0, _moment.default)(this.props.value),
        onChange: this.onChange.bind(this),
        minDate: this.props.min && (0, _moment.default)(this.props.min),
        maxDate: this.props.max && (0, _moment.default)(this.props.max),
        todayButton: 'Today'
      }));
    }
  }]);
  return DatePickerEditor;
}(_react.default.Component);

(0, _defineProperty2.default)(DatePickerEditor, "propTypes", {
  format: _propTypes.default.string,
  textFormat: _propTypes.default.string,
  min: _propTypes.default.any,
  max: _propTypes.default.any,
  value: _propTypes.default.any,
  show: _propTypes.default.bool,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(DatePickerEditor, "defaultProps", {
  textFormat: 'YYYY-MM-DD'
});
var _default = DatePickerEditor;
exports.default = _default;
module.exports = exports.default;