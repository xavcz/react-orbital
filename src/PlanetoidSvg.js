import React, { PropTypes } from 'react';
// import styled from 'styled-components';

const planetoidStripeGenerator = (cx, cy, r, angleDeg, length) => {
  // convert angle in radian
  const angle = angleDeg * Math.PI / 180;

  // shall the stripe goes from left to right or right to left
  // depending on the angle in degree
  const direction = angleDeg >= 80 || angleDeg <= -80 ? -1 : 1;

  // base coordinate for the line
  const x = cx - r * Math.cos(angle);
  const y = cy - r * Math.sin(angle);

  return {
    x1: x,
    y1: y,
    x2: x + direction * length,
    y2: y,
  };
};

const PlanetoidSvg = ({ radius }) => {
  const containerSize = radius * 7 / 2;
  const planetoidCenter = containerSize / 2;

  return (
    <svg width={containerSize} height={containerSize}>
      <circle
        cx={planetoidCenter}
        cy={planetoidCenter}
        r={radius}
        stroke="#a78247"
        strokeWidth="0.1vw"
        fill="#303030"
      />
      <g stroke="#a78247" strokeWidth="0.1vw">
        <line {...planetoidStripeGenerator(planetoidCenter, planetoidCenter, radius, 25, 40)} />
        <line {...planetoidStripeGenerator(planetoidCenter, planetoidCenter, radius, 180, 20)} />
      </g>
    </svg>
  );
};

PlanetoidSvg.propTypes = {
  radius: PropTypes.number.isRequired,
};

export default PlanetoidSvg;
