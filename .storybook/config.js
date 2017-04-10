import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import '../src/_styles';
import Theme from '../src/Theme';

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => <Theme>{story()}</Theme>);

configure(loadStories, module);
