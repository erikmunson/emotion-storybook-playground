import React, { useState } from 'react';
import { select, text } from '@storybook/addon-knobs';

import { iconsByName } from '../iconsByName';
import { Icon, IIconProps, IconNames } from '../Icon';
import { iconColors } from '../../../colors';

export default {
  title: 'Icon',
  parameters: {
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
    options: { panelPosition: 'right' },
  },
};

type IIconGridProps = Partial<IIconProps> & {
  icons: IconNames[];
  onClick: (icon: IconNames) => any;
};

const iconAppearances = ['light', 'neutral', 'dark'] as const;
const iconSizes = ['xs', 's', 'm', 'l', 'xl'] as const;

const GalleryLayout = ({ summary, grid }: { summary: React.ReactNode; grid: React.ReactNode }) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'grow',
      margin: '96px',
    }}
  >
    <div
      css={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px',
        backgroundColor: '#f4f4f4',
        boxShadow: '0 3px 5px 2px #f4f4f4',
      }}
    >
      {summary}
    </div>
    {grid}
  </div>
);

const IconGrid = ({ icons, appearance, size, onClick }: IIconGridProps) => (
  <div css={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '100px' }}>
    {icons.map(icon => (
      <div
        key={icon}
        css={{
          padding: '24px',
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '2px' },
        }}
        onClick={() => onClick(icon)}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '150px',
          }}
        >
          <Icon name={icon} appearance={appearance} size={size} />
          <div
            css={{
              fontSize: '13px',
              fontWeight: 400,
              color: iconColors.neutral,
              marginTop: '12px',
            }}
          >
            {icon}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const gallery = () => {
  const [iconName, setIconName] = useState<IconNames>('manualJudgement');

  const appearance = select('Appearance', iconAppearances, 'dark');
  const size = select('Size', iconSizes, 'l');
  const filter = text('Filter', '').toLowerCase();

  const allIcons = Object.keys(iconsByName).sort() as IconNames[];
  const filteredIcons = filter ? allIcons.filter(name => name.toLowerCase().includes(filter.toLowerCase())) : allIcons;

  return (
    <GalleryLayout
      summary={
        <>
          <div css={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>{iconName}</div>
          <Icon name={iconName} appearance={appearance} size={size} />
        </>
      }
      grid={<IconGrid icons={filteredIcons} onClick={icon => setIconName(icon)} appearance={appearance} size={size} />}
    />
  );
};

export const sizes = () => {
  return (
    <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
      {iconSizes.map(size => (
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '12px',
          }}
        >
          <Icon name="manualJudgement" size={size} />
          <div
            css={{
              fontSize: '13px',
              fontWeight: 400,
              color: iconColors.neutral,
              marginTop: '12px',
            }}
          >
            {size}
          </div>
        </div>
      ))}
    </div>
  );
};

export const appearances = () => {
  const backgroundsByAppearance = {
    dark: iconColors.light,
    neutral: 'transparent',
    light: iconColors.dark,
  };

  return (
    <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
      {iconAppearances.map(appearance => (
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '12px',
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px',
              borderRadius: '50%',
              backgroundColor: backgroundsByAppearance[appearance],
            }}
          >
            <Icon name="canaryPass" size="l" appearance={appearance} />
          </div>
          <div
            css={{
              fontSize: '13px',
              fontWeight: 400,
              color: iconColors.neutral,
              marginTop: '12px',
            }}
          >
            {appearance}
          </div>
        </div>
      ))}
    </div>
  );
};
