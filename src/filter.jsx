/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-25
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class CheckboxFieldFilter extends React.Component {

  static propTypes = {
    value: React.PropTypes.any,
    field: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onClose: React.PropTypes.func,
  };

  static contextTypes = {
    t: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value !== false && props.value !== 'false'
    };
  }

  componentDidMount() {
    this.props.onChange(this.state.value);
  }

  handleClick1 = () => {
    this.setState({ value: false });
    this.props.onChange(false);
  };

  handleClick2 = () => {
    this.setState({ value: true });
    this.props.onChange(true);
  };

  render() {
    const t = this.context.t;
    const { field, onClose } = this.props;
    const { value } = this.state;
    const buttonClassName = 'btn btn-default';
    const buttonClassNameActive = buttonClassName + ' active';
    return (
      <div className="row field-filter field-filter-text">
        <label className="col-xs-2 control-label text-right">{field.label}</label>
        <div className="col-xs-10">
          <div className="btn-group">
            <a
              className={!value ? buttonClassNameActive : buttonClassName}
              onClick={this.handleClick1}>{t('no')}
            </a>
            <a
              className={value ? buttonClassNameActive : buttonClassName}
              onClick={this.handleClick2}>{t('yes')}
            </a>
          </div>
        </div>
        <a className="btn field-filter-close" onClick={onClose}><i className="fa fa-close"/></a>
      </div>
    );
  }
}
