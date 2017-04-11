import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ThemeSwitch = ({ themes, selectedTheme, selectTheme }) => (
  <SwitchContent>
    <SwitchLabel>Themes:</SwitchLabel>
    <ThemeList viewBox={`0 0 ${12 * themes.length} 12`}>
      {themes.map((theme, index) => (
        <ThemeSample
          key={theme.id}
          r="4"
          cx={6 + 12 * index}
          cy="6"
          fill={theme.fill}
          stroke={theme.stroke}
          strokeWidth={theme.id === selectedTheme ? 2 : 1}
          onClick={selectTheme(theme.id)}
        />
      ))}
    </ThemeList>
  </SwitchContent>
);

ThemeSwitch.propTypes = {
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      fill: PropTypes.string,
      stroke: PropTypes.string,
    })
  ),
};

const SwitchContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const SwitchLabel = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

const ThemeList = styled.svg`
  height: 2rem;
`;

const ThemeSample = styled.circle`
  cursor: pointer;
`;

export default ThemeSwitch;
