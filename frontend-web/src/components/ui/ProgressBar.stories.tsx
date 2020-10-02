import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { renderer } from 'src/utils/fela';
import { ProgressBar, IProgressBar } from 'src/components/ui/ProgressBar';

export default {
  title: 'Organisms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<IProgressBar> = (args) => (
  <RendererProvider renderer={renderer}>
    <ProgressBar {...args}></ProgressBar>
  </RendererProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  percent: 35,
  progressBarTitle: 'Example',
  negative: false,
};

export const Negative = Template.bind({});
Negative.args = {
  percent: 35,
  progressBarTitle: 'Example',
  negative: true,
};
