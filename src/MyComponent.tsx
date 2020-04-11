import React, { useMemo } from 'react';
import { css } from '@emotion/core';

const getStuff = (thing: number) => `${thing + 12} things`;

export interface IMyComponentProps {
  color: 'red' | 'black';
}

export const MyComponent = ({ color }: IMyComponentProps) => {
  const styles = useMemo(
    () =>
      css({
        color,
      }),
    [color],
  );

  return <div css={styles}>Whale hello there. {getStuff(1)}</div>;
};
