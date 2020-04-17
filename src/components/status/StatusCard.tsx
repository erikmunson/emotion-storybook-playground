import React, { memo } from 'react';
import { css } from '@emotion/core';

import { colors } from '../../colors';
import { typography } from '../../typography';
import { spacing } from '../../spacing';
import { flex } from '../../flex';

import { IconName } from '../icons';
import { StatusBubble } from './StatusBubble';

const { margin, padding } = spacing;

export interface IStatusCardProps {
  appearance: 'inactive' | 'neutral' | 'info' | 'progress' | 'success' | 'warning' | 'error';
  /**
   * Check the Playground section to browse and try all available icon choices
   **/
  iconName: IconName;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

const styles = {
  card: css(flex.h.container, flex.h.spaceBetween, flex.h.middle, flex.wrap, padding.l.xaxis, padding.s.yaxis, {
    borderRadius: '3px',
    fontSize: '13px',
    color: colors.typography.standard,
  }),
  inactive: css({ color: colors.typography.light }),
  neutral: css({ backgroundColor: colors.status.light.neutral }),
  info: css({ backgroundColor: colors.status.light.info }),
  progress: css({ backgroundColor: colors.status.light.progress }),
  success: css({ backgroundColor: colors.status.light.success }),
  warning: css({ backgroundColor: colors.status.light.warning }),
  error: css({ backgroundColor: colors.status.light.error }),
};

export const StatusCard = memo(({ appearance, iconName, title, description, actions }: IStatusCardProps) => (
  <div css={[styles.card, styles[appearance]]}>
    <div css={[flex.h.container, flex.h.middle]}>
      <div css={[flex.h.container, flex.h.center, flex.h.middle, margin.l.right]}>
        <StatusBubble iconName={iconName} appearance={appearance} size="m" />
      </div>
      <div css={[flex.v.container, margin.xs.yaxis]}>
        <div css={[typography.weights.bold]}>{title}</div>
        {description && <div css={[typography.weights.standard]}>{description}</div>}
      </div>
    </div>
    {actions && <div css={[flex.h.container, flex.h.right, flex.h.middle, flex.grow, margin.s.left]}>{actions}</div>}
  </div>
));
