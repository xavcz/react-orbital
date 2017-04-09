import React, { PropTypes, Children, cloneElement } from 'react';
import { colors, borderWidth } from './_styles';

const containerSize = 100;

const OrbitalWrapper = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={containerSize}
    height={containerSize}
    fill={colors.dark}
    stroke={colors.gold}
    strokeWidth={borderWidth}
    // debug
    style={{ border: '2px red solid' }}
  >
    {Children.map(children, child => cloneElement(child, { containerSize }))}
  </svg>
);

OrbitalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrbitalWrapper;
