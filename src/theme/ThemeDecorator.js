import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeSwitch from './ThemeSwitch';
import themesList from './list';

class ThemeDecorator extends React.Component {
  constructor(props) {
    super(props);

    const [firstTheme] = themesList;

    this.state = {
      selectedTheme: firstTheme.id,
    };

    this.selectTheme = this.selectTheme.bind(this);
  }

  selectTheme(themeId) {
    return event => {
      event.preventDefault();
      this.setState(prevState => ({ selectedTheme: themeId }));
    };
  }

  render() {
    const theme = Object.assign(
      { borderWidth: '0.2vw' },
      themesList.find(theme => theme.id === this.state.selectedTheme)
    );

    return (
      <ThemeProvider theme={theme}>
        <StoryPositioner>
          <ThemeSwitch
            selectTheme={this.selectTheme}
            selectedTheme={theme.id}
            themes={themesList}
          />
          {this.props.children}
        </StoryPositioner>
      </ThemeProvider>
    );
  }
}

const StoryPositioner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: ${props => props.theme.fill}; 
  color: ${props => props.theme.stroke};
`;

export default ThemeDecorator;
