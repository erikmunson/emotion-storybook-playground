import { sizes } from './sizes';

export const margin = Object.entries(sizes).reduce(
  (bySize, [size, value]) => ({
    ...bySize,
    [size]: {
      all: { margin: value },
      top: { marginTop: value },
      right: { marginRight: value },
      bottom: { marginBottom: value },
      left: { marginLeft: value },
      xaxis: { marginLeft: value, marginRight: value },
      yaxis: { marginTop: value, marginBottom: value },
    },
  }),
  {} as {
    [size in keyof typeof sizes]: {
      all: { margin: size };
      top: { marginTop: size };
      right: { marginRight: size };
      bottom: { marginBottom: size };
      left: { marginLeft: size };
      xaxis: { marginLeft: size; marginRight: size };
      yaxis: { marginTop: size; marginBottom: size };
    };
  },
);
