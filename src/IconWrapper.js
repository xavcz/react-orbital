import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bordered } from './_styles';

const IconWrapper = styled.div`
  ${bordered}
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
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
