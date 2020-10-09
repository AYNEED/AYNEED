import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';

import { renderer } from 'src/utils/fela';
import { ProfileButtonsPanel } from 'src/components/blocks/ProfileButtonsPanel';

export default {
  title: 'Organisms/ProfileButtonsPanel',
  component: ProfileButtonsPanel,
} as Meta;

const Template: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <ProfileButtonsPanel {...args} />
  </RendererProvider>
);

export const General = Template.bind({});
