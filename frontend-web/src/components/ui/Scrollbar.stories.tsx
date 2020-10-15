import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { renderer } from 'src/utils/fela';
import { ScrollBarPreviewOnly } from 'src/components/ui/ScrollbarPreviewOnly';

export default {
  title: 'Atoms/ScrollBar',
  component: ScrollBarPreviewOnly,
} as Meta;

const Template: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <ScrollBarPreviewOnly {...args}></ScrollBarPreviewOnly>
  </RendererProvider>
);

export const Normal = Template.bind({});
Normal.args = {};
