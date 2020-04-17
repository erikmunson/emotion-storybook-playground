import { css } from '@emotion/core';

export const flex = {
  h: {
    container: css({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    }),

    left: css({ justifyContent: 'flex-start' }),
    center: css({ justifyContent: 'center' }),
    right: css({ justifyContent: 'flex-end' }),
    spaceAround: css({ justifyContent: 'space-around' }),
    spaceBetween: css({ justifyContent: 'space-between' }),

    top: css({ alignItems: 'flex-start' }),
    middle: css({ alignItems: 'center' }),
    baseline: css({ alignItems: 'baseline' }),
    bottom: css({ alignItems: 'flex-end' }),
    stretchHeight: css({ alignItems: 'stretch' }),

    pullLeft: css({ marginRight: 'auto' }),
    pullRight: css({ marginLeft: 'auto' }),
  },
  v: {
    container: css({
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
    }),

    left: css({ alignItems: 'flex-start' }),
    center: css({ alignItems: 'center' }),
    right: css({ alignItems: 'flex-end' }),
    stretchWidth: css({ alignItems: 'stretch' }),

    top: css({ justifyContent: 'flex-start' }),
    middle: css({ justifyContent: 'center' }),
    bottom: css({ justifyContent: 'flex-end' }),
    spaceAround: css({ justifyContent: 'space-around' }),
    spaceBetween: { justifyContent: 'space-between' },

    pullUp: css({ marginBottom: 'auto' }),
    pullDown: css({ marginTop: 'auto' }),
  },

  wrap: css({ flexWrap: 'wrap' }),
  grow: css({ flexGrow: 1, flexBasis: 'auto' }),
  shrink: css({ flexShrink: 1, flexBasis: 'auto' }),
  none: css({ flex: 'none' }),
} as const;
