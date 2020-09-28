import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { renderer } from 'src/utils/fela';
import { FirstCard, IFirstCard } from 'src/components/ui/FirstCard';

export default {
  title: 'Atoms/FirstCard',
  component: FirstCard,
} as Meta;

const Tamplate: Story<IFirstCard> = (args) => (
  <RendererProvider renderer={renderer}>
    <FirstCard {...args}></FirstCard>
  </RendererProvider>
);

export const Example = Tamplate.bind({});
Example.args = {
  disabled: false,
};

export const Disabled = Tamplate.bind({});
Disabled.args = {
  disabled: true,
};
