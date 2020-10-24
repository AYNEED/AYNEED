import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { IntlProvider } from 'src/i18n/IntlProvider';
import { UserClient } from 'src/__generated__';
import { history } from 'src/navigation/store';
import { renderer } from 'src/utils/fela';
import { Avatar, Props, PropSize } from 'src/components/ui/Avatar';

export default {
  title: 'Organisms/Avatar',
  component: Avatar,
} as Meta;
const sizes = ['30px', '50px', '90px', '140px'];

const Template: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        {sizes.map((width, index) => (
          <div key={index} style={{ marginLeft: 30 }}>
            <Avatar {...args} size={width as PropSize} />
          </div>
        ))}
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

const User = {
  id: '1',
  personal: {
    firstName: 'Ann',
    lastName: 'Isharova',
    isAgree: false,
    photo:
      'https://get.pxhere.com/photo/person-girl-woman-hair-photography-portrait-model-youth-fashion-blue-lady-hairstyle-smile-long-hair-face-dress-eye-head-skin-beauty-blond-photo-shoot-brown-hair-portrait-photography-108386.jpg',
  },
};

export const WithPhoto = Template.bind({});
WithPhoto.args = {
  id: User.id,
  client: UserClient.Desktop,
  isOnline: false,
  photo: User.personal.photo,
};

export const WithPhotoOnline = Template.bind({});
WithPhotoOnline.args = {
  id: User.id,
  client: UserClient.Desktop,
  isOnline: true,
  photo: User.personal.photo,
};

export const EmptyPhoto = Template.bind({});
EmptyPhoto.args = {
  id: User.id,
  client: UserClient.Desktop,
  isOnline: false,
};

export const EmptyPhotoOnline = Template.bind({});
EmptyPhotoOnline.args = {
  id: User.id,
  client: UserClient.Desktop,
  isOnline: true,
};
