import { sizes } from './sizes';

export const padding = Object.entries(sizes).reduce(
  (bySize, [size, value]) => ({
    ...bySize,
    [size]: {
      all: { padding: value },
      top: { paddingTop: value },
      right: { paddingRight: value },
      bottom: { paddingBottom: value },
      left: { paddingLeft: value },
      xaxis: { paddingLeft: value, paddingRight: value },
      yaxis: { paddingTop: value, paddingBottom: value },
    },
  }),
  {} as {
    [size in keyof typeof sizes]: {
      all: { padding: size };
      top: { paddingTop: size };
      right: { paddingRight: size };
      bottom: { paddingBottom: size };
      left: { paddingLeft: size };
      xaxis: { paddingLeft: size; paddingRight: size };
      yaxis: { paddingTop: size; paddingBottom: size };
    };
  },
);
