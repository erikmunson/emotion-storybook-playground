import { css } from '@emotion/core';

export const typography = {
  weights: {
    extraLight: css({
      fontWeight: 200,
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    }),
    light: css({
      fontWeight: 300,
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    }),
    standard: css({
      fontWeight: 400,
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    }),

    /*
     * while lighter weights get important readability/clarity benefits
     * from subpixel antialiasing, heavier weights lose clarity in areas
     * like the inside of loops/curves etc. and can appear much darker than
     * intended with the same color as a lighter weight. Let's move up to
     * the full pixel antialiasing when we hit semibold, and rely on text color
     * to ensure contrast ratios are still sufficiently high.
     */
    semibold: css({
      fontWeight: 600,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    }),
    bold: css({
      fontWeight: 700,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    }),
    black: css({
      fontWeight: 900,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    }),
  },

  styles: {
    italic: css({ fontStyle: 'italic' }),
  },
};
