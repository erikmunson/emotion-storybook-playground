import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';

import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import spinnakerLogo from '../src/assets/spinnakerLogo.png';

import { GlobalStoryStyles } from '../src/utils/GlobalStoryStyles';
import '../src/utils/loadFont';

const spinnakerTheme = create({
  base: 'light',

  appBg: 'white',
  appContentBg: '#f4f4f4',

  fontBase: '"Source Sans Pro", sans-serif',
  brandTitle: 'Ahoy',
  brandImage: spinnakerLogo,
});

addDecorator(story => <GlobalStoryStyles>{story()}</GlobalStoryStyles>);

addDecorator(withKnobs);

addParameters({
  options: {
    theme: spinnakerTheme,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
