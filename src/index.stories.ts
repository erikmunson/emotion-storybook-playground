import 'source-sans-pro/source-sans-pro.css';
import spinnakerLogo from './assets/spinnakerLogo.png';

import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';

const spinnakerTheme = create({
  base: 'light',

  fontBase: '"Source Sans Pro", sans-serif',
  brandTitle: 'Sail',
  brandImage: spinnakerLogo,
});

addDecorator(withKnobs);

addParameters({
  options: {
    theme: spinnakerTheme,
  },
  backgrounds: [
    { name: 'neutral', value: '#f4f4f4', default: true },
    { name: 'white', value: '#ffffff' },
  ],
});
