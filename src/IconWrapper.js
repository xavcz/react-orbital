import { PropTypes } from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: ${props => props.size || 100}px;
  height: ${props => props.size || 100}px;
  position: relative;
  &:before, &:after{
    content: '';
    display: block;
    position: absolute;
  }
`;

IconWrapper.propTypes = {
  size: PropTypes.number,
};

export default IconWrapper;
