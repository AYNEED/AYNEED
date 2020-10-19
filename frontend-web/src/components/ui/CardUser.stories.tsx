import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Router as ReactRouter } from 'react-router-dom';
import { IntlProvider } from 'src/i18n/IntlProvider';

import { renderer } from 'src/utils/fela';
import { CardUser } from 'src/components/ui/CardUser';
import { history } from 'src/navigation/store';

export default {
  title: 'Organisms/Cards/User card',
  component: CardUser,
} as Meta;

const Template: Story = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <CardUser {...args}></CardUser>
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

export const Example = Template.bind({});
Example.args = {
  id: User.id,
  network: {
    isOnline: true,
    client: 'Desktop',
  },
  about: {
    skills: ['asdf'],
  },
  personal: {
    photo: User.personal.photo,
  },
};
