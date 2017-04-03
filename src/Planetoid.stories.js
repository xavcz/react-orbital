import { storiesOf } from '@kadira/storybook';
import React from 'react';

import OrbitalWrapper from './OrbitalWrapper';
import Planetoid from './Planetoid';

storiesOf('Orbital', module)
  .add('big central planetoid', () => (
    <OrbitalWrapper containerSize={100}>
      <Planetoid radius={42} />
      {/* <Planetoid radius={42}>
        <Line angle={50} length={40} />
        <Line angle={40} length={14} />
        <Line angle={40} length={10} offset={14 + 5} />
      </Planetoid> */}
    </OrbitalWrapper>
  ))
  .add('planetoid with moons', () => (
    <OrbitalWrapper containerSize={100}>
      <Planetoid radius={31} />
      <Planetoid radius={6} cx={10} cy={15} />
      <Planetoid radius={4} cx={75} cy={85} />
      {/* <Planetoid radius={42}>
        <Line angle={50} length={40} />
        <Line angle={40} length={14} />
        <Line angle={40} length={10} offset={14 + 5} />
      </Planetoid> */}
    </OrbitalWrapper>
  ));
