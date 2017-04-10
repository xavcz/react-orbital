import React, { PropTypes, Children, cloneElement } from 'react';
import styled, { keyframes } from 'styled-components';

const Planetoid = (
  {
    positionAngle = 0,
    positionRadius = 0,
    radius,
    children,
    orbitAnimationDuration = null,
  }
) => {
  // reference values
  const angleRadian = positionAngle * Math.PI / 180;
  const reference = [{ axis: 'x', fn: 'cos' }, { axis: 'y', fn: 'sin' }];

  // from the reference and the props, create a circle center svg object
  const [cx, cy] = reference.map(({ axis, fn }) => 50 - positionRadius * Math[fn](angleRadian));

  const [cxSymmetric, cySymmetric] = reference.map(
    ({ axis, fn }) => 50 - positionRadius * Math[fn](angleRadian + Math.PI)
  );

  const symmetricTranslation = keyframes`
    0%,100% {
      transform: translate(${cx}px, ${cy}px);
    }
    50% {
      transform: translate(${cxSymmetric}px, ${cySymmetric}px);
    }
  `;

  const reliefTranslation = keyframes`
    0% { z-index:3; }
    49% { z-index:3; }
    50% { z-index:1; }
    99% { z-index:1; }
    100% { z-index:3; }
  `;

  const PlanetoidCircle = styled.circle`
    r: ${radius};
    ${!positionRadius && `
      cx: ${cx};
      cy: ${cy};
    `}
    ${orbitAnimationDuration && `animation: ${symmetricTranslation} ${orbitAnimationDuration}s ease-in-out infinite;`}
  `;

  const AbsoluteWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    ${orbitAnimationDuration && `animation: ${reliefTranslation} ${orbitAnimationDuration}s ease-in-out infinite;`}
  `;

  const SvgContent = styled.svg`
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.fill};
    stroke: ${props => props.theme.stroke};
    strokeWidth: ${props => props.theme.borderWidth};
  `;

  return (
    <AbsoluteWrapper>
      <SvgContent xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <PlanetoidCircle />
        {children && Children.map(children, child => cloneElement(child, { cx, cy, r: radius }))}
      </SvgContent>
    </AbsoluteWrapper>
  );
};

Planetoid.propTypes = {
  radius: PropTypes.number.isRequired,
  positionAngle: PropTypes.number,
  positionRadius: PropTypes.number,
  animateInOrbit: PropTypes.bool,
  children: PropTypes.node,
};

export default Planetoid;
