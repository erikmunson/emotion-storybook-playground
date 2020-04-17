import React, { memo } from 'react';

import { colors } from '../../colors';

import { iconsByName } from './iconsByName';

export type IconName = keyof typeof iconsByName;

export type IIconProps = {
  /**
   * Check the Gallery to see all the available icons
   **/
  name: IconName;
  /**
   * @default "neutral"
   **/
  appearance?: 'light' | 'neutral' | 'dark';
  /**
   * @default "s"
   **/
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  // DEPRECATED
  // use `appearance` and `size` instead
  legacyColor?: string;
  legacySize?: string;
};

const DEFAULT_SIZE = 's';
const DEFAULT_APPEARANCE = 'neutral';

const pxDimensionsBySize: { [size: string]: string } = {
  xs: '16px',
  s: '20px',
  m: '24px',
  l: '32px',
  xl: '40px',
};

const logInvalidIconError = (name: string) => {
  console.log(new Error(`No icon with the name ${name} exists`));
};

export const Icon = memo(({ name, appearance, size, legacyColor, legacySize }: IIconProps) => {
  const Component = iconsByName[name];

  if (!Component) {
    logInvalidIconError(name);
    return null;
  }

  const width = legacySize ?? pxDimensionsBySize[size || DEFAULT_SIZE];
  const fill = legacyColor ? `var(--color-${legacyColor})` : colors.icons[appearance || DEFAULT_APPEARANCE];

  return <Component style={{ width, fill }} />;
});
