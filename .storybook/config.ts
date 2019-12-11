import { addParameters, configure } from '@storybook/react';

const component = require.context('../src', true, /\.stories\.tsx?$/);

function loadStories() {
  component.keys().forEach(filename => component(filename));
}

configure(loadStories, module);
