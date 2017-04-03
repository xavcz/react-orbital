import { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, bordered, animationTime } from '../_styles';

const animations = {
  moonTop: keyframes`
    0% {top: 75%;left: 15%;z-index:0;}
    49% {top: 40%;left: 95%;z-index:0;}
    50% {top: 40%;left: 95%;z-index:1;}
    99% {top: 75%;left: 15%;z-index:1;}
    100% {top: 75%;left: 15%;z-index:0;}
  `,
  moonBottom: keyframes`
    0% {top: 10%;left: 95%;z-index:1;}
    49% {top: 60%;left: 5%;z-index:1;}
    50% {top: 60%;left: 5%;z-index:0;}
    99% {top: 10%;left: 95%;z-index:0;}
    100% {top: 10%;left: 95%;z-index:1;}
  `,
};

const PlanetoidCss = styled.div`
  ${bordered}
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  background: ${colors.dark};
  ${props => `top: ${props.top || 16}%`};
  ${props => `left: ${props.left || 16}%`};
  width: ${props => props.diameter || 62}%;
  height: ${props => props.diameter || 62}%;
  ${props => props.animation && `animation: ${animations[props.animation]} ${animationTime} ease infinite`}
`;

PlanetoidCss.propTypes = {
  diameter: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  animation: PropTypes.oneOf(['moonTop', 'moonBottom']),
};

export default PlanetoidCss;
