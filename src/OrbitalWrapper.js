import React, { PropTypes, Children, cloneElement } from 'react';
import styled from 'styled-components';

const OrbitalWrapper = styled.div`
  width: ${props => props.containerSize}px;
  height: ${props => props.containerSize}px;
`;

export default ({ containerSize, children }) => (
  <OrbitalWrapper>
    {Children.map(children, child => cloneElement(child, { containerSize }))}
  </OrbitalWrapper>
);
