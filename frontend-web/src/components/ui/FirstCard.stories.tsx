import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { renderer } from 'src/utils/fela';
import { FirstCard, IFirstCard } from 'src/components/ui/FirstCard';

export default {
  title: 'Organisms/FirstCard',
  component: FirstCard,
} as Meta;

const Template: Story<IFirstCard> = (args) => (
  <RendererProvider renderer={renderer}>
    <FirstCard {...args}></FirstCard>
  </RendererProvider>
);

export const General = Template.bind({});
General.args = {
  disabled: false,
  firstStart: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  firstStart: false,
};

export const FirstStart = Template.bind({});
FirstStart.args = {
  disabled: false,
  firstStart: true,
};
