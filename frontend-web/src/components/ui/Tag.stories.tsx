import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { RendererProvider } from 'react-fela';
import { Tag, ITag } from 'src/components/ui/Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta;

const Tamplate: Story<ITag> = (args) => (
  <RendererProvider renderer={renderer}>
    <Tag {...args}></Tag>
  </RendererProvider>
);

export const Example = Tamplate.bind({});
Example.args = {
  isActive: false,
  tagText: 'Example',
};

export const ExampleActive = Tamplate.bind({});
ExampleActive.args = {
  isActive: true,
  tagText: 'ExampleActive',
};
