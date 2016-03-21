/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-21
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class Checkbox extends React.Component {

  static propTypes = {
    style: React.PropTypes.object,
    value: React.PropTypes.boolean,
    label: React.PropTypes.string,
    onCheck: React.PropTypes.func,
  };

  handleCheck = () => {
    this.props.onCheck && this.props.onCheck(!this.props.value);
  };

  render() {
    let props = this.props;
    let checked = props.value ? 'checked' : '';
    return (
      <label className="checkbox" style={props.style}>
        <input type="checkbox" checked={checked} className="custom-checkbox" onClick={this.handleCheck} />
            <span className="icons">
              <span className="icon-unchecked"></span>
              <span className="icon-checked"></span>
            </span>
        {props.label}
      </label>
    );
  }
}
