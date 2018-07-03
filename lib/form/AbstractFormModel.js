'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ValidationErrors = require('../common/validation/ValidationErrors');

var _ValidationErrors2 = _interopRequireDefault(_ValidationErrors);

var _Events = require('../common/Events');

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var AbstractFormModel = function (_EventsModel) {
  (0, _inherits3.default)(AbstractFormModel, _EventsModel);

  /**
   * Abstract form model
   *
   * @constructor
   */
  function AbstractFormModel() {
    (0, _classCallCheck3.default)(this, AbstractFormModel);
    return (0, _possibleConstructorReturn3.default)(this, (AbstractFormModel.__proto__ || (0, _getPrototypeOf2.default)(AbstractFormModel)).call(this));
  }

  /**
   * Get data
   *
   * @param {Array} fields     Required fields
   * @returns {Object}  Promise
   * @abstract
   */


  (0, _createClass3.default)(AbstractFormModel, [{
    key: 'getData',
    value: function getData() /*fields*/{
      return _promise2.default.resolve({});
    }

    /**
     * Process form data
     *
     * @param   {Object}      changes     Form data
     * @returns {Object}  Promise
     * @abstract
     */

  }, {
    key: 'submit',
    value: function submit() /*changes*/{
      return _promise2.default.resolve();
    }

    /**
     * Record validity check
     *
     * @param {Object}      record  Record object
     * @returns {Object}  Promise
     * @abstract
     */

  }, {
    key: 'isValidRecord',
    value: function isValidRecord() /*record*/{
      return _promise2.default.resolve(new _ValidationErrors2.default());
    }

    /**
     * Get all dependent fields, that are required for validation
     *
     * @param   {Array}  fields  Fields list
     * @returns {Array}  Dependencies
     * @abstract
     */

  }, {
    key: 'getValidationDependency',
    value: function getValidationDependency() /*fields*/{
      return [];
    }
  }]);
  return AbstractFormModel;
}(_Events2.default);

exports.default = AbstractFormModel;
module.exports = exports['default'];