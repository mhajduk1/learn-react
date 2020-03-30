import React from 'react';
import PropTypes from 'prop-types';



const Icon = PropTypes => (<i className={`fas fa-${PropTypes.name}`} />);

Icon.propTypes = {
  name: PropTypes.node,
};

export default Icon;
