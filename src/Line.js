import { PropTypes } from 'react';
import styled from 'styled-components';
import { colors, bordered } from './_styles';

const Line = styled.div`
  ${bordered};
  border-color: ${colors.gold} transparent transparent transparent;
  height: 0.1vw;
  position: absolute;
  overflow: hidden;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: ${props => props.length}%;
`;

Line.propTypes = {
  length: PropTypes.number.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default Line;
