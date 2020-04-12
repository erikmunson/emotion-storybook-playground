import 'source-sans-pro/source-sans-pro.css';
import spinnakerLogo from '../src/assets/spinnakerLogo.png';

import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';

const spinnakerTheme = create({
  base: 'light',

  fontBase: '"Source Sans Pro", sans-serif',
  brandTitle: 'Ahoy',
  brandImage: spinnakerLogo,
});

// addDecorator(story => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));

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
