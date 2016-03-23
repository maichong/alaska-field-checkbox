'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Maichong Software Ltd. 2016 http://maichong.it
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016-03-07
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Liang <liang@maichong.it>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CheckboxFieldView = function (_React$Component) {
  _inherits(CheckboxFieldView, _React$Component);

  function CheckboxFieldView() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxFieldView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CheckboxFieldView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleCheck = function (checked) {
      _this.props.onChange && _this.props.onChange(checked);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckboxFieldView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(props) {
      return props.value !== this.props.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var field = _props.field;
      var value = _props.value;
      var errorText = _props.errorText;

      var help = field.help;
      var className = 'form-group';
      if (errorText) {
        className += ' has-error';
        help = errorText;
      }
      var helpElement = help ? _react2.default.createElement(
        'p',
        { className: 'help-block' },
        help
      ) : null;
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-offset-2 col-sm-10' },
          _react2.default.createElement(_Checkbox2.default, {
            label: field.label,
            value: value,
            onCheck: this.handleCheck
          }),
          helpElement
        )
      );
    }
  }]);

  return CheckboxFieldView;
}(_react2.default.Component);

CheckboxFieldView.propTypes = {
  children: _react2.default.PropTypes.node
};
exports.default = CheckboxFieldView;