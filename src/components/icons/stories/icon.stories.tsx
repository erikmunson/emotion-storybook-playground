import React, { useState } from 'react';
import { select, text } from '@storybook/addon-knobs';

import { typography } from '../../../typography';
import { colors } from '../../../colors';
import { spacing } from '../../../spacing';
import { flex } from '../../../flex';

import { iconsByName } from '../iconsByName';
import { Icon, IIconProps, IconName } from '../Icon';

const { margin, padding } = spacing;

export default {
  title: 'Icon',
  parameters: {
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
    options: { panelPosition: 'right' },
  },
};

type IIconGridProps = Partial<IIconProps> & {
  icons: IconName[];
  onClick: (icon: IconName) => any;
};

const iconAppearances = ['light', 'neutral', 'dark'] as const;
const iconSizes = ['xs', 's', 'm', 'l', 'xl'] as const;

const GalleryLayout = ({ summary, grid }: { summary: React.ReactNode; grid: React.ReactNode }) => (
  <div css={[flex.v.container, flex.v.stretchWidth, { margin: '96px' }]}>
    <div
      css={[
        flex.v.container,
        flex.v.center,
        flex.v.middle,
        {
          position: 'sticky',
          top: 0,
          padding: '48px',
          backgroundColor: '#f4f4f4',
          boxShadow: '0 3px 5px 2px #f4f4f4',
        },
      ]}
    >
      {summary}
    </div>
    {grid}
  </div>
);

const IconGrid = ({ icons, appearance, size, onClick }: IIconGridProps) => (
  <div css={[flex.h.container, flex.h.center, flex.wrap, { marginTop: '100px' }]}>
    {icons.map(icon => (
      <div
        key={icon}
        css={[
          padding.xl.all,
          {
            cursor: 'pointer',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '2px' },
          },
        ]}
        onClick={() => onClick(icon)}
      >
        <div css={[flex.v.container, flex.v.center, flex.v.middle, flex.wrap, { minWidth: '150px' }]}>
          <Icon name={icon} appearance={appearance} size={size} />
          <div css={[typography.weights.standard, margin.m.top, { fontSize: '13px', color: colors.icons.neutral }]}>
            {icon}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const gallery = () => {
  const [iconName, setIconName] = useState<IconName>('manualJudgement');

  const appearance = select('Appearance', iconAppearances, 'dark');
  const size = select('Size', iconSizes, 'l');
  const filter = text('Filter', '').toLowerCase();

  const allIcons = Object.keys(iconsByName).sort() as IconName[];
  const filteredIcons = filter ? allIcons.filter(name => name.toLowerCase().includes(filter.toLowerCase())) : allIcons;

  return (
    <GalleryLayout
      summary={
        <>
          <div css={[typography.weights.bold, margin.xl.bottom, { fontSize: '20px' }]}>{iconName}</div>
          <Icon name={iconName} appearance={appearance} size={size} />
        </>
      }
      grid={<IconGrid icons={filteredIcons} onClick={icon => setIconName(icon)} appearance={appearance} size={size} />}
    />
  );
};

export const sizes = () => {
  return (
    <div css={[flex.h.container, flex.h.center, flex.h.baseline]}>
      {iconSizes.map(size => (
        <div css={[flex.v.container, flex.v.center, flex.v.middle, flex.wrap, margin.m.all]}>
          <Icon name="manualJudgement" size={size} />
          <div css={[typography.weights.standard, margin.m.top, { fontSize: '13px', color: colors.icons.neutral }]}>
            {size}
          </div>
        </div>
      ))}
    </div>
  );
};

export const appearances = () => {
  const backgroundsByAppearance = {
    dark: colors.icons.light,
    neutral: 'transparent',
    light: colors.icons.dark,
  };

  return (
    <div css={[flex.h.container, flex.h.center, flex.h.baseline]}>
      {iconAppearances.map(appearance => (
        <div css={[flex.v.container, flex.v.center, flex.v.middle, flex.wrap, margin.m.all]}>
          <div
            css={[
              flex.h.container,
              flex.h.center,
              flex.h.middle,
              padding.m.all,
              {
                borderRadius: '50%',
                backgroundColor: backgroundsByAppearance[appearance],
              },
            ]}
          >
            <Icon name="canaryPass" size="l" appearance={appearance} />
          </div>
          <div css={[typography.weights.standard, margin.m.top, { fontSize: '13px', color: colors.icons.neutral }]}>
            {appearance}
          </div>
        </div>
      ))}
    </div>
  );
};
