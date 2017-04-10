import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const darkTheme = {
  fill: '#303030',
  stroke: '#a78247',
};

const lightTheme = {
  fill: '#aacdee',
  stroke: '#003d6b',
};

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: true,
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(event) {
    event.preventDefault();
    this.setState(prevState => ({ darkTheme: !prevState.darkTheme }));
  }

  render() {
    const theme = Object.assign(
      { borderWidth: '0.2vw' },
      this.state.darkTheme ? darkTheme : lightTheme
    );

    return (
      <ThemeProvider theme={theme}>
        <StoryWrapper>
          <ThemeButton onClick={this.changeTheme}>Change theme</ThemeButton>
          {this.props.children}
        </StoryWrapper>
      </ThemeProvider>
    );
  }
}

const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: ${props => props.theme.fill}; 
  color: ${props => props.theme.stroke};
`;

const ThemeButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  
  padding: 1vw 2vw;
  background: ${props => props.theme.fill};
  border: .5vw ${props => props.theme.stroke} solid;
  
  color: ${props => props.theme.stroke};
  font-size: 2vw;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer; 
  
  &:focus {
    outline: 0;
  }
`;

export default Theme;
