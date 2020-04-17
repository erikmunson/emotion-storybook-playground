import { css, SerializedStyles } from '@emotion/core';

import { sizes } from './sizes';

export const margin = Object.entries(sizes).reduce(
  (bySize, [size, value]) => ({
    ...bySize,
    [size]: {
      all: css({ margin: value }),
      top: css({ marginTop: value }),
      right: css({ marginRight: value }),
      bottom: css({ marginBottom: value }),
      left: css({ marginLeft: value }),
      xaxis: css({ marginLeft: value, marginRight: value }),
      yaxis: css({ marginTop: value, marginBottom: value }),
    },
  }),
  {} as {
    [size in keyof typeof sizes]: {
      all: SerializedStyles;
      top: SerializedStyles;
      right: SerializedStyles;
      bottom: SerializedStyles;
      left: SerializedStyles;
      xaxis: SerializedStyles;
      yaxis: SerializedStyles;
    };
  },
);
