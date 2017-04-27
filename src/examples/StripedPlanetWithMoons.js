import React from 'react';
import { OrbitalWrapper, Planetoid, PlanetoidStripe } from '../atoms';

const StripedPlanetWithMoons = ({ containerSize }) => (
  <OrbitalWrapper containerSize={containerSize}>
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
    <Planetoid radius={6} positionAngle={45} positionRadius={45} orbitAnimationDuration={4} />
  </OrbitalWrapper>
);

export default StripedPlanetWithMoons;
