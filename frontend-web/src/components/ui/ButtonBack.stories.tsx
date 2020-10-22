import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { ButtonBack } from 'src/components/ui/ButtonBack';

export default {
  title: 'Molecules/Button back',
  component: ButtonBack,
} as Meta;

const Tamplate: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <ButtonBack {...args}></ButtonBack>
  </RendererProvider>
);

export const Example = Tamplate.bind({});
Example.args = {
  isActive: false,
  tagText: 'Example',
};
