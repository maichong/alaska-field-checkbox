/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class CheckboxFieldCell extends React.Component {
  render() {
    if (this.props.value) {
      return <i className="fa fa-check text-success"></i>;
    }
    return <i className="fa fa-times" style={{color:'#aaa'}}></i>;
  }
}
