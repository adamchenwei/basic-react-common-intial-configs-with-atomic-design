import { configure, setAddon, addDecorator } from '@storybook/react';
// import '@storybook/addon-console';
// import addWithDoc from 'storybook-addon-props';
// import '@storybook/addon-console';

// setAddon(addWithDoc);
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
