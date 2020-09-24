import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { Scrollbar } from 'src/components/ui/Scrollbar';

export default {
  title: 'Atoms/Scrollbar',
  component: Scrollbar,
} as Meta;

const Tamplate: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <Scrollbar {...args}></Scrollbar>
  </RendererProvider>
);

export const Example = Tamplate.bind({});
Example.args = {};
