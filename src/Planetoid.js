import { PropTypes } from 'react';
import styled from 'styled-components';
import { colors, bordered } from './_styles';

const Planetoid = styled.div`
  ${bordered}
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  background: ${colors.dark};
  top: ${props => props.top || 20}%;
  left: ${props => props.left || 20}%;
  width: ${props => props.diameter || 62}%;
  height: ${props => props.diameter || 62}%;
`;

Planetoid.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  diameter: PropTypes.number,
};

export default Planetoid;
