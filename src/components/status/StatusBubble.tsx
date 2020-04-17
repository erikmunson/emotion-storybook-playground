import React, { memo } from 'react';
import { useTransition, animated } from 'react-spring';
import { css } from '@emotion/core';

import { flex } from '../../flex';
import { spacing } from '../../spacing';
import { colors } from '../../colors';

import { Icon, IconName } from '../icons';

export interface IStatusBubbleProps {
  /**
   * Check the Playground section to browse and try all available icon choices
   **/
  iconName: IconName;
  appearance: 'inactive' | 'neutral' | 'info' | 'progress' | 'success' | 'warning' | 'error';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const paddingBySize = {
  xs: 'xs',
  s: 's',
  m: 's',
  l: 's',
  xl: 'm',
} as const;

const styles = {
  bubble: css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    borderRadius: '50%',
  }),
  iconContainer: css(flex.h.container, flex.h.center, flex.h.middle, {
    gridColumn: 1,
    gridRow: 1,
  }),
  in: {
    opacity: 1,
    transform: 'scale(1.0, 1.0)',
  },
  out: {
    opacity: 0,
    transform: 'scale(0.8, 0.8)',
  },
};

const transitionConfig = {
  from: styles.out,
  enter: styles.in,
  leave: styles.out,
  config: { mass: 1, tension: 400, friction: 30 },
};
export const StatusBubble = memo(({ iconName, appearance, size }: IStatusBubbleProps) => {
  const transitions = useTransition(iconName, null, transitionConfig);

  return (
    <div
      css={[
        styles.bubble,
        spacing.padding[paddingBySize[size]].all,
        { backgroundColor: colors.status.standard[appearance] },
      ]}
    >
      {transitions.map(({ item, key, props }) => (
        <animated.div key={key} css={styles.iconContainer} style={props}>
          <Icon name={item} appearance="light" size={size} />
        </animated.div>
      ))}
    </div>
  );
});
