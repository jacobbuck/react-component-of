var PropTypes = require('react').PropTypes

module.exports = function componentOf(types) {
  var t = PropTypes.shape({type: PropTypes.oneOf(types)});
  return PropTypes.oneOfType([t, PropTypes.arrayOf(t)]);
};
