import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';

import { typography } from '../../../typography';
import { colors } from '../../../colors';
import { spacing } from '../../../spacing';
import { flex } from '../../../flex';

import { iconsByName } from '../../icons/iconsByName';
import { IconName } from '../../icons';
import { StatusBubble } from '../StatusBubble';

const { margin } = spacing;

export default {
  title: 'Status',
  parameters: {
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
    options: { panelPosition: 'right' },
  },
};

const bubbleSizes = ['xs', 's', 'm', 'l', 'xl'] as const;
const bubbleAppearances = ['inactive', 'neutral', 'info', 'progress', 'success', 'warning', 'error'] as const;

export const playground = () => {
  const iconNames = Object.keys(iconsByName).sort() as IconName[];

  const iconName = select('Icon', iconNames, 'canaryPass');
  const appearance = select('Appearance', bubbleAppearances, 'success');
  const size = select('Size', bubbleSizes, 'm');

  return (
    <div css={[flex.h.container, flex.h.center, flex.h.middle, margin.m.all]}>
      <StatusBubble iconName={iconName} appearance={appearance} size={size} />
    </div>
  );
};

export const sizes = () => (
  <div css={[flex.h.container, flex.h.center, flex.h.bottom]}>
    {bubbleSizes.map(size => (
      <div css={[flex.v.container, flex.v.center, flex.v.middle, flex.wrap, margin.m.all]}>
        <StatusBubble iconName="canaryPass" appearance="success" size={size} />
        <div css={[typography.weights.regular, margin.m.top, { fontSize: '13px', color: colors.icons.neutral }]}>
          {size}
        </div>
      </div>
    ))}
  </div>
);

export const appearances = () => (
  <div css={[flex.h.container, flex.h.center, flex.h.bottom]}>
    {bubbleAppearances.map(appearance => (
      <div css={[flex.v.container, flex.v.center, flex.v.middle, flex.wrap, margin.m.all]}>
        <StatusBubble iconName="canaryPass" appearance={appearance} size="m" />
        <div css={[typography.weights.regular, margin.m.top, { fontSize: '13px', color: colors.icons.neutral }]}>
          {appearance}
        </div>
      </div>
    ))}
  </div>
);
