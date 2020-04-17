import { css, SerializedStyles } from '@emotion/core';

import { sizes } from './sizes';

export const padding = Object.entries(sizes).reduce(
  (bySize, [size, value]) => ({
    ...bySize,
    [size]: {
      all: css({ padding: value }),
      top: css({ paddingTop: value }),
      right: css({ paddingRight: value }),
      bottom: css({ paddingBottom: value }),
      left: css({ paddingLeft: value }),
      xaxis: css({ paddingLeft: value, paddingRight: value }),
      yaxis: css({ paddingTop: value, paddingBottom: value }),
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
