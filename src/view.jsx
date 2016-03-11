/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import ContextPure from 'material-ui/lib/mixins/context-pure';
import Checkbox from 'material-ui/lib/checkbox';
import { shallowEqual } from 'alaska-admin-view';

export default class CheckboxFieldView extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object,
    views: React.PropTypes.object,
    settings: React.PropTypes.object,
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
    views: React.PropTypes.object,
    settings: React.PropTypes.object,
  };

  static mixins = [
    ContextPure
  ];

  constructor(props, context) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      muiTheme: context.muiTheme ? context.muiTheme : getMuiTheme(),
      views: context.views,
      settings: context.settings,
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      views: this.context.views,
      settings: this.context.settings,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    let newState = {};
    if (nextContext.muiTheme) {
      newState.muiTheme = nextContext.muiTheme;
    }
    if (nextContext.views) {
      newState.views = nextContext.views;
    }
    this.setState(newState);
  }

  handleCheck(event, checked) {
    this.props.onChange && this.props.onChange(checked);
  }

  shouldComponentUpdate(props) {
    return !shallowEqual(props, this.props, 'data', 'onChange', 'model');
  }

  render() {
    let {
      model,
      data,
      field,
      value,
      onChange,
      ...others
      } = this.props;
    let state = this.state;
    let styles = {
      root: {
        padding: '5px 0'
      }
    };
    let { muiTheme } = this.state;
    let noteElement = field.note ?
      <div style={muiTheme.fieldNoteInline}>{field.note}</div> : null;
    return (
      <div style={styles.root}>
        <Checkbox
          label={field.label}
          checked={value}
          onCheck={this.handleCheck}
          {...others}
        />
        {noteElement}
      </div>
    );
  }
}
