import { storiesOf } from '@kadira/storybook';
import React from 'react';
import IconWrapperCss from './IconWrapperCss';
import PlanetoidCss from './PlanetoidCss';
import LineCss from './LineCss';

import PlanetoidSvg from './PlanetoidSvg';

storiesOf('Planetoid', module)
  .add('in css', () => (
    <IconWrapperCss>
      <PlanetoidCss diameter={8} animation="moonTop" />
      <PlanetoidCss diameter={12} animation="moonBottom" />
      <PlanetoidCss diameter={62}>
        <LineCss top={15} left={0} length={60} />
        <LineCss top={30} left={0} length={20} />
        <LineCss top={30} left={25} length={12} />
        <LineCss top={38} left={60} length={40} />
        <LineCss top={48} left={80} length={20} />
        <LineCss top={57} left={0} length={30} />
        <LineCss top={57} left={35} length={12} />
        <LineCss top={68} left={0} length={70} />
        <LineCss top={80} left={50} length={12} />
        <LineCss top={80} left={70} length={30} />
      </PlanetoidCss>
    </IconWrapperCss>
  ))
  .add('in svg', () => <PlanetoidSvg radius={42} />);
