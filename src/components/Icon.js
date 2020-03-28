import React from 'react';
import PropTypes from 'prop-types';

Icon.PropTypes = {
  name: PropTypes.node,
};

const Icon = PropTypes => (<i className={`fas fa-${PropTypes.name}`} />);


export default Icon;
