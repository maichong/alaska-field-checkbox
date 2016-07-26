/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

'use strict';

const alaska = require('alaska');

class CheckboxField extends alaska.Field {
  createFilter(filter) {
    let value = filter;
    if (typeof filter == 'object') {
      if (filter.$ne === true) {
        //已经处理过的filter
        return { $ne: true }
      }
      value = filter.value;
    }
    return (!value || value == 'false') ? { $ne: true } : true;
  }
}

CheckboxField.views = {
  cell: {
    name: 'CheckboxFieldCell',
    path: __dirname + '/lib/cell.js'
  },
  view: {
    name: 'CheckboxFieldView',
    path: __dirname + '/lib/view.js'
  },
  filter: {
    name: 'CheckboxFieldFilter',
    path: __dirname + '/lib/filter.js'
  }
};

CheckboxField.plain = Boolean;

CheckboxField.viewOptions = ['labelPosition'];

module.exports = CheckboxField;
