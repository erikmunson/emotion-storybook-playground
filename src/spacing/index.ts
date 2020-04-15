import { sizes } from './sizes';
import { margin } from './margin';
import { padding } from './padding';

export const spacing = {
  ...sizes,
  margin,
  padding,
} as const;
