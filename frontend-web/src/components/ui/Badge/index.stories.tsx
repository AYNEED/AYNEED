import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge, Props } from 'src/components/ui/Badge';
import { COLOR } from 'src/constants/colors';

export default {
  title: 'Documentation/Badges',
  component: Badge,
} as Meta;

const Template: Story<Props> = (args) => <Badge {...args}>TODO</Badge>;

export const Normal = Template.bind({});
Normal.args = {
  value: 1,
  borderColor: COLOR.TRANSPARENT,
  backgroundColor: COLOR.PRIMARY_500,
  position: 'leftCenter',
};
