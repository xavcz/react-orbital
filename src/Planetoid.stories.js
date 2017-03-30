import { storiesOf } from '@kadira/storybook';
import React from 'react';
import IconWrapper from './IconWrapper';
import Planetoid from './Planetoid';
import Line from './Line';

storiesOf('Planetoid', module)
  .add('default', () => <IconWrapper><Planetoid /></IconWrapper>)
  .add('with moons', () => 
    <IconWrapper>
      <Planetoid top={75} left={15} diameter={8} />
      <Planetoid top={10} left={95} diameter={12} />
      <Planetoid />
    </IconWrapper>
  )
  .add('with moons and lines', () => 
    <IconWrapper>
      <Planetoid top={75} left={15} diameter={8} />
      <Planetoid top={10} left={95} diameter={12} />
      <Planetoid>
        <Line top={15} left={0} length={60} />
        <Line top={30} left={0} length={20} />
        <Line top={30} left={25} length={12} />
        <Line top={38} left={60} length={40} />
        <Line top={48} left={80} length={20} />
        <Line top={57} left={0} length={30} />
        <Line top={57} left={35} length={12} />
        <Line top={68} left={0} length={70} />
        <Line top={80} left={50} length={12} />
        <Line top={80} left={70} length={30} />
      </Planetoid>
    </IconWrapper>
  );
