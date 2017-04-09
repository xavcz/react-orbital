import React, { PropTypes, Children, cloneElement } from 'react';
import styled, { keyframes } from 'styled-components';

const Planetoid = (
  { containerSize, positionAngle = 0, positionRadius = 0, radius, children, animateInOrbit }
) => {
  // reference values
  const angleRadian = positionAngle * Math.PI / 180;
  const reference = [{ axis: 'x', fn: 'cos' }, { axis: 'y', fn: 'sin' }];

  // from the reference and the props, create a circle center svg object
  const [cx, cy] = reference.map(
    ({ axis, fn }) => containerSize / 2 - positionRadius * Math[fn](angleRadian)
  );

  const PlanetoidCircle = styled.circle`
    r: ${radius};
    ${!positionRadius && `
      cx: ${cx};
      cy: ${cy};
    `}
  `;

  const Translator = ({ duration, children }) => {
    const [cxSymmetric, cySymmetric] = reference.map(
      ({ axis, fn }) => containerSize / 2 - positionRadius * Math[fn](angleRadian + Math.PI)
    );

    const translation = keyframes`
      0%,100% {
        z-index: 1;
        transform: translate(${cx}px, ${cy}px);
      }
      50% {
        z-index: 3;
        transform: translate(${cxSymmetric}px, ${cySymmetric}px);
      }
    `;

    const TranslatedGroup = styled.g`
      animation: ${translation} ${duration}s ease-in-out infinite;
    `;

    return <TranslatedGroup>{children}</TranslatedGroup>;
  };

  return children
    ? <g>
        <PlanetoidCircle />
        {Children.map(children, child => cloneElement(child, { cx, cy, r: radius }))}
      </g>
    : animateInOrbit
        ? <Translator duration={4}><PlanetoidCircle /></Translator>
        : <PlanetoidCircle />;
};

Planetoid.propTypes = {
  radius: PropTypes.number.isRequired,
  containerSize: PropTypes.number,
  positionAngle: PropTypes.number,
  positionRadius: PropTypes.number,
  animateInOrbit: PropTypes.bool,
  children: PropTypes.node,
};

export default Planetoid;
