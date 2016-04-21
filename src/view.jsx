/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

import Checkbox from './Checkbox';

export default class CheckboxFieldView extends React.Component {

  static propTypes = {
    model: React.PropTypes.object,
    field: React.PropTypes.object,
    data: React.PropTypes.object,
    errorText: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  };

  handleCheck = (checked) => {
    this.props.onChange && this.props.onChange(checked);
  };

  shouldComponentUpdate(props) {
    return props.value !== this.props.value;
  }

  render() {
    let {
      field,
      value,
      errorText,
      disabled
      } = this.props;
    let help = field.help;
    let className = 'form-group';
    if (errorText) {
      className += ' has-error';
      help = errorText;
    }
    let helpElement = help ? <p className="help-block">{help}</p> : null;
    if (field.static) {
      disabled = true;
    }

    let input = (<Checkbox
      label={field.label}
      value={value}
      onCheck={this.handleCheck}
      disabled={disabled}
    />);

    if (field.fullWidth) {
      return (
        <div className={className}>
          {input}
          {helpElement}
        </div>
      );
    }

    return (
      <div className={className}>
        <div className="col-sm-offset-2 col-sm-10">
          {input}
          {helpElement}
        </div>
      </div>
    );
  }
}
