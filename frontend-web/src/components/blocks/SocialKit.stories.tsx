import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';

import { renderer } from 'src/utils/fela';
import { SocialKit } from 'src/components/blocks/SocialKit';

export default {
  title: 'Organisms/SocialKit',
  component: SocialKit,
} as Meta;

const Template: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <SocialKit {...args} />
  </RendererProvider>
);

export const General = Template.bind({});
