import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { COLOR } from 'src/constants/colors';
import { LogoAYNeed, Props } from 'src/components/logos/LogoAYNeed';

export default {
  title: 'Atoms/Logos',
  component: LogoAYNeed,
} as Meta;

const Template: Story<Props> = (args) => <LogoAYNeed {...args} />;

export const Logo33x12Short = Template.bind({});
Logo33x12Short.args = {
  width: 33,
  height: 12,
  cropped: true,
  firstColor: COLOR.PRIMARY_100,
  secondColor: COLOR.PRIMARY_300,
};

export const Logo96x18 = Template.bind({});
Logo96x18.args = {
  width: 96,
  height: 18,
  firstColor: COLOR.PRIMARY_100,
  secondColor: COLOR.PRIMARY_300,
};

export const Logo53x10 = Template.bind({});
Logo53x10.args = {
  width: 53,
  height: 10,
  firstColor: COLOR.PRIMARY_100,
  secondColor: COLOR.PRIMARY_300,
};

export const Logo44x16Short = Template.bind({});
Logo44x16Short.args = {
  width: 44,
  height: 16,
  cropped: true,
  firstColor: COLOR.PRIMARY_100,
  secondColor: COLOR.PRIMARY_300,
};

export const Logo44x16GrayShort = Template.bind({});
Logo44x16GrayShort.args = {
  width: 44,
  height: 16,
  cropped: true,
  firstColor: COLOR.SECONDARY_100,
  secondColor: COLOR.SECONDARY_500,
};

export const Logo24x9GreenShort = Template.bind({});
Logo24x9GreenShort.args = {
  width: 24,
  height: 9,
  cropped: true,
  firstColor: COLOR.PRIMARY_300,
  secondColor: COLOR.PRIMARY_300,
};
