import React from 'react';
import { storiesOf } from '@kadira/storybook';
import StripedPlanetWithMoons from './StripedPlanetWithMoons';

storiesOf('Striped planet with moons', module)
  .add('container size: 10vw', () => <StripedPlanetWithMoons />)
  .add('container size: 20vw', () => <StripedPlanetWithMoons containerSize={20} />)
  .add('container size: 30vw', () => <StripedPlanetWithMoons containerSize={30} />)
  .add('container size: 40vw', () => <StripedPlanetWithMoons containerSize={40} />)
  .add('container size: 50vw', () => <StripedPlanetWithMoons containerSize={50} />);
