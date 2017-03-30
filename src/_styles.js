import { injectGlobal } from 'styled-components';

export const colors = {
  dark: '#303030',
  gold: '#a78247',
};

export const animationTime = '5s';
export const borderWidth = '0.1vw';

export const bordered = `border: ${borderWidth} solid ${colors.gold};`;

// CSS Resets
// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');
  
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }
  
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.dark}; 
    color: ${colors.gold};
  }
`;
