import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';

import { renderer } from 'src/utils/fela';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { Notification, Props } from 'src/components/ui/Notification';

export default {
  title: 'Organisms/Notification',
  component: Notification,
} as Meta;

const Template: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <Notification {...args}></Notification>
    </RendererProvider>
  </IntlProvider>
);

export const Accept = Template.bind({});
Accept.args = {
  accept: true,
  isNew: false,
  align: 'leftTop',
  name: 'Sancho',
  skill: 'Make Burrito',
  time: '12:00',
  date: '20.11.2020',
};

export const Reject = Template.bind({});
Reject.args = {
  accept: false,
  isNew: false,
  align: 'leftTop',
  name: 'Sancho',
  skill: 'Make Burrito',
  time: '12:00',
  date: '20.11.2020',
};

export const New = Template.bind({});
New.args = {
  accept: true,
  isNew: true,
  align: 'leftTop',
  name: 'Sancho',
  skill: 'Make Burrito',
  time: '12:00',
  date: '20.11.2020',
};
