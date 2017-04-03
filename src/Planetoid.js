import React, { PropTypes, Children, cloneElement }  from 'react';

const Planetoid = ({ containerSize, cx, cy, radius: r, children }) => {
  // svg circle attributes
  const planetoidDefinition = {
    r,
    // if no coordinates for the planetoid center, fallback to 
    // the center of the container
    cx: cx ||containerSize / 2,
    cy: cy || containerSize / 2,
  };
  
  return children 
    ? <g>
        <circle {...planetoidDefinition} />
        {Children.map(children, child => cloneElement(child, planetoidDefinition))}
      </g> 
    : <circle {...planetoidDefinition} />;
};

Planetoid.propTypes = {
  radius: PropTypes.number.isRequired,
  containerSize: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  children: PropTypes.node,
};

export default Planetoid;
