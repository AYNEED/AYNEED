import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { renderer } from 'src/utils/fela';
import { ProgressBar, IProgressBar } from 'src/components/ui/ProgressBar';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Tamplate: Story<IProgressBar> = (args) => (
  <RendererProvider renderer={renderer}>
    <ProgressBar {...args}></ProgressBar>
  </RendererProvider>
);

export const Normaly = Tamplate.bind({});
Normaly.args = {
  percent: 35,
  progressBarTitle: 'Example',
  negative: false,
};

export const Negative = Tamplate.bind({});
Negative.args = {
  percent: 35,
  progressBarTitle: 'Example',
  negative: true,
};
