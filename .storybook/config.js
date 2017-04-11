import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import '../src/_styles';
import ThemeDecorator from '../src/theme/ThemeDecorator';

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => <ThemeDecorator>{story()}</ThemeDecorator>);

configure(loadStories, module);
