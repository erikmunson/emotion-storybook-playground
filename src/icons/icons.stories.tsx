import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';

import { iconsByName } from './iconsByName';
import { Icon, IIconProps, IconNames } from './Icon';

export default { title: 'Icons' };

type IIconGridProps = Partial<IIconProps> & {
  icons: IconNames[];
  onClick: (icon: IconNames) => any;
};

const PlaygroundLayout = ({ summary, grid }: { summary: React.ReactNode; grid: React.ReactNode }) => (
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
    {icons.map((icon) => (
      <div
        css={{
          padding: '24px',
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '2px' },
        }}
        onClick={() => onClick(icon)}
      >
        <Icon key={icon} name={icon} appearance={appearance} size={size} />
      </div>
    ))}
  </div>
);

export const playground = () => {
  const [iconName, setIconName] = useState<IconNames>('manualJudgement');

  const allIcons = Object.keys(iconsByName).sort() as IconNames[];
  const appearance = select('Appearance', ['light', 'neutral', 'dark'], 'neutral');
  const size = select('Size', ['extraSmall', 'small', 'medium', 'large', 'extraLarge'], 'large');

  return (
    <PlaygroundLayout
      summary={
        <>
          <div css={{ fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>
            {iconName}
          </div>
          <Icon name={iconName} appearance={appearance} size={size} />
        </>
      }
      grid={<IconGrid icons={allIcons} onClick={(icon) => setIconName(icon)} appearance={appearance} size={size} />}
    />
  );
};
