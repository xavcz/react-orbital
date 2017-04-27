import React from 'react';
import ReactDOM from 'react-dom';
import './theme/global-styles';
import ThemeDecorator from './theme/ThemeDecorator';
import StripedPlanetWithMoons from './examples/StripedPlanetWithMoons';

ReactDOM.render(
  <ThemeDecorator>
    <StripedPlanetWithMoons containerSize={20} />
  </ThemeDecorator>,
  document.getElementById('root')
);
