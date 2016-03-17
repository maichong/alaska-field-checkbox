/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

'use strict';

const alaska = require('alaska');

exports.views = {
  cell: {
    name: 'CheckboxFieldCell',
    field: __dirname + '/lib/cell.js'
  },
  view: {
    name: 'CheckboxFieldView',
    field: __dirname + '/lib/view.js'
  }
};

exports.plain = Boolean;

/**
 * alaska-admin-view 前端控件初始化参数
 * @param field
 * @param Model
 */
exports.viewOptions = function (field, Model) {
  let options = alaska.Field.viewOptions.apply(this, arguments);
  options.labelPosition = field.labelPosition;
  return options;
};
