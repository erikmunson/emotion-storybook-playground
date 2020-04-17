import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { spacing } from '../../../spacing';
import { flex } from '../../../flex';

import { iconsByName } from '../../icons/iconsByName';
import { IconName } from '../../icons';

import { StatusCard } from '../StatusCard';

const { margin } = spacing;

export default {
  title: 'Status/StatusCard',
  parameters: {
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
    options: { panelPosition: 'right' },
  },
};

const cardAppearances = ['inactive', 'neutral', 'info', 'progress', 'success', 'warning', 'error'] as const;

export const playground = () => {
  const iconNames = Object.keys(iconsByName).sort() as IconName[];

  const iconName = select('Icon', iconNames, 'manualJudgement');
  const appearance = select('Appearance', cardAppearances, 'success');
  const title = text('Title', 'Manual judgement approved about an hour ago');
  const description = text('Description', 'by spinnaker@spinnaker.io');

  return (
    <div css={[flex.v.container, flex.v.center, margin.m.all, { width: '100%' }]}>
      <div css={[flex.v.container, flex.v.stretchWidth, { width: '100%', maxWidth: '600px' }]}>
        <StatusCard
          iconName={iconName}
          appearance={appearance}
          title={title}
          description={description.length ? description : null}
        />
      </div>
    </div>
  );
};

export const appearances = () => (
  <div css={[flex.v.container, flex.v.center, margin.m.all, { width: '100%' }]}>
    {cardAppearances.map(appearance => (
      <div css={[flex.v.container, flex.v.stretchWidth, margin.xxs.bottom, { width: '100%', maxWidth: '600px' }]}>
        <StatusCard iconName="manualJudgement" appearance={appearance} title={`The is the ${appearance} appearance`} />
      </div>
    ))}
  </div>
);

export const withDescription = () => (
  <div css={[flex.v.container, flex.v.center, margin.m.all, { width: '100%' }]}>
    {(['inactive', 'success'] as const).map(appearance => (
      <div css={[flex.v.container, flex.v.stretchWidth, margin.xxs.bottom, { width: '100%', maxWidth: '600px' }]}>
        <StatusCard
          iconName="manualJudgement"
          appearance={appearance}
          title={`Manual judgement ${appearance === 'success' ? 'approved about an hour ago' : 'will be required'}`}
          description={
            appearance === 'success'
              ? 'by spinnaker@spinnaker.io'
              : 'A notification will be sent to #spinnaker on Slack when judgement is ready'
          }
        />
      </div>
    ))}
  </div>
);
