'use strict';

var PropTypes = require('prop-types');

module.exports = function componentOf(types) {
  var t = PropTypes.shape({type: PropTypes.oneOf(types)});
  return PropTypes.oneOfType([t, PropTypes.arrayOf(t)]);
};
