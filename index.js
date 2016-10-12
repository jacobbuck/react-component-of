import { PropTypes } from 'react';

export default function componentOf(types = []) {
  const t = PropTypes.shape({type: PropTypes.oneOf(types)});
  return PropTypes.oneOfType([t, PropTypes.arrayOf(t)]);
};
