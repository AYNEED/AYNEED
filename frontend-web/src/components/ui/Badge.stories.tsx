import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';

import { Badge, Props } from 'src/components/ui/Badge';
import { renderer } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';

export default {
  title: 'Atoms/Badges',
  component: Badge,
} as Meta;

const Template: Story<Props> = (args) => (
  <RendererProvider renderer={renderer}>
    <Badge {...args}>TODO</Badge>
  </RendererProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  value: 1,
  borderColor: COLOR.TRANSPARENT,
  backgroundColor: COLOR.PRIMARY_500,
  position: 'leftCenter',
};
