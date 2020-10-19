import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Router as ReactRouter } from 'react-router-dom';

import { history } from 'src/navigation/store';
import { renderer } from 'src/utils/fela';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { Notification, Props } from 'src/components/ui/Notification';
import { UserClient } from 'src/__generated__';

export default {
  title: 'Organisms/Notification',
  component: Notification,
} as Meta;

const Template: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <Notification {...args}></Notification>
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

const User = {
  id: '1',
  personal: {
    firstName: 'Sancho',
    lastName: 'Black',
    isAgree: false,
    photo:
      'https://get.pxhere.com/photo/person-girl-woman-hair-photography-portrait-model-youth-fashion-blue-lady-hairstyle-smile-long-hair-face-dress-eye-head-skin-beauty-blond-photo-shoot-brown-hair-portrait-photography-108386.jpg',
  },
};

export const Accept = Template.bind({});
Accept.args = {
  accept: true,
  isNew: false,
  align: 'leftTop',
  name: User.personal.firstName,
  skill: 'Make Burrito',
  time: '12:00',
  date: '20.11.2020',
  id: User.id,
  client: UserClient.Desktop,
  isOnline: true,
  photo: User.personal.photo,
};

export const Reject = Template.bind({});
Reject.args = {
  accept: false,
  isNew: false,
  align: 'leftTop',
  name: User.personal.firstName,
  skill: 'Make Burrito',
  time: '12:00',
  date: '20.11.2020',
  id: User.id,
  client: UserClient.Desktop,
  isOnline: true,
  photo: User.personal.photo,
};

export const New = Template.bind({});
New.args = {
  accept: true,
  isNew: true,
  align: 'leftTop',
  name: User.personal.firstName,
  skill: 'Make Burrito',
  time: '12:00',
  date: '20.11.2020',
  id: User.id,
  client: UserClient.Desktop,
  isOnline: true,
  photo: User.personal.photo,
};
