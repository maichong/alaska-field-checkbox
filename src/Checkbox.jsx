/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-21
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

const { bool, object, func, string } = React.PropTypes;

export default class Checkbox extends React.Component {

  static propTypes = {
    style: object,
    radio: bool,
    value: bool,
    label: string,
    onCheck: func,
  };

  handleCheck = () => {
    this.props.onCheck && this.props.onCheck(!this.props.value);
  };

  render() {
    let props = this.props;
    let checked = props.value ? 'checked' : false;
    let type = props.radio ? 'radio' : 'checkbox';
    return (
      <label className={type} style={props.style}>
        <input type={type} disabled={props.disabled} checked={checked} className={'custom-'+type}
               onChange={this.handleCheck}/>
            <span className="icons">
              <span className="icon-unchecked"></span>
              <span className="icon-checked"></span>
            </span>
        {props.label}
      </label>
    );
  }
}
