import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';

import { renderer } from 'src/utils/fela';
import { Divider, Props } from 'src/components/ui/Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as Meta;

const Template: Story<Props> = (args) => (
  <RendererProvider renderer={renderer}>
    <Divider {...args} />
  </RendererProvider>
);

export const Strong = Template.bind({});
Strong.args = {
  color: 'strong',
};

export const Light = Template.bind({});
Light.args = {
  color: 'light',
};
