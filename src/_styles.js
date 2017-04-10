import { injectGlobal } from 'styled-components';

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
  }
`;
