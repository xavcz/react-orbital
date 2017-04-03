import React, { PropTypes } from 'react';

const Planetoid = ({ containerSize, cx, cy, radius: r }) => {
  // svg circle attributes
  const planetoidDefinition = {
    r,
    // if no coordinates for the planetoid center, fallback to 
    // the center of the container
    cx: cx ||containerSize / 2,
    cy: cy || containerSize / 2,
  };
  
  return <circle {...planetoidDefinition} />;
};

Planetoid.propTypes = {
  radius: PropTypes.number.isRequired,
  containerSize: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

export default Planetoid;
