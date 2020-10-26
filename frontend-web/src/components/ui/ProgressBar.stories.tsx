import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { renderer } from 'src/utils/fela';
import { ProgressBar, IProgressBar } from 'src/components/ui/ProgressBar';
import { IntlProvider } from 'src/i18n/IntlProvider';

export default {
  title: 'Organisms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<IProgressBar> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ProgressBar {...args}></ProgressBar>
    </RendererProvider>
  </IntlProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  percent: 35,
  progressBarTitle:{id: 'web.components.ui.Logo.title'},
  negative: false,
};

export const Negative = Template.bind({});
Negative.args = {
  percent: 35,
  progressBarTitle:{id: 'web.components.ui.Logo.title'},
  negative: true,
};
