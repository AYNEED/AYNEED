import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { TagTextArea } from 'src/components/ui/TagTextArea';

export default {
  title: 'Molecules/TagTextArea',
  component: TagTextArea,
} as Meta;

const TestWrapper: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>([]);
  return <TagTextArea tags={tags} setTags={setTags}></TagTextArea>;
};

const Tamplate: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <TestWrapper {...args}></TestWrapper>
  </RendererProvider>
);

export const Example = Tamplate.bind({});
Example.args = {};
