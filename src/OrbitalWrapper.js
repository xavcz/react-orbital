import React, { PropTypes, Children, cloneElement } from 'react';
import { colors, borderWidth } from './_styles';

// prefer constant container size for now
// note: https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba#0614
const containerSize = 100;

const OrbitalWrapper = ({ children }) => (
  <svg
    width={`${containerSize}px`}
    height={`${containerSize}px`}
    fill={colors.dark}
    stroke={colors.gold}
    strokeWidth={borderWidth}
  >
    <g>
      {Children.map(children, child => cloneElement(child, { containerSize }))}
    </g>
  </svg>
);

OrbitalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrbitalWrapper;
