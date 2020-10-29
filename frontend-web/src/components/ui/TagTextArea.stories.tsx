import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { TagTextArea } from 'src/components/ui/TagTextArea';

export default {
  title: 'Molecules/TagTextArea',
  component: TagTextArea,
} as Meta;

const Tamplate: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <TagTextArea {...args}></TagTextArea>
  </RendererProvider>
);

export const Example = Tamplate.bind({});
Example.args = {};
