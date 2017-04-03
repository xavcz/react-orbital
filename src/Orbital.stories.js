import { storiesOf } from '@kadira/storybook';
import React from 'react';

import OrbitalWrapper from './OrbitalWrapper';
import Planetoid from './Planetoid';
import PlanetoidStripe from './PlanetoidStripe';

storiesOf('Orbital', module)
  .add('big central planetoid', () => (
    <OrbitalWrapper containerSize={100}>
      <Planetoid radius={42} />
    </OrbitalWrapper>
  ))
  .add('planetoid with moons', () => (
    <OrbitalWrapper containerSize={100}>
      <Planetoid radius={31} />
      <Planetoid radius={6} cx={10} cy={15} />
      <Planetoid radius={4} cx={75} cy={85} />
    </OrbitalWrapper>
  ))
  .add('striped planetoid with moons', () => (
    <OrbitalWrapper containerSize={100}>
      <Planetoid radius={31}>
        <PlanetoidStripe angle={45} length={20} />
        <PlanetoidStripe angle={30} length={10} />
        <PlanetoidStripe angle={30} length={5} offset={15} />
        <PlanetoidStripe angle={170} length={25} />
        <PlanetoidStripe angle={180} length={15} />
        <PlanetoidStripe angle={-15} length={20} />
        <PlanetoidStripe angle={-15} length={5} offset={25} />
        <PlanetoidStripe angle={-25} length={35} />
        <PlanetoidStripe angle={220} length={20} />
        <PlanetoidStripe angle={220} length={7} offset={25} />
      </Planetoid>
      <Planetoid radius={6} cx={10} cy={15} />
      <Planetoid radius={4} cx={75} cy={85} />
    </OrbitalWrapper>
  ));
