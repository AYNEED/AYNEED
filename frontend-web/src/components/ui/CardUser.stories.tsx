import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';

import { renderer } from 'src/utils/fela';
import { CardUser } from 'src/components/ui/CardUser';

export default {
  title: 'Organisms/Cards/User card',
  component: CardUser,
} as Meta;

const Template: Story = (args) => (
  <RendererProvider renderer={renderer}>
    <CardUser {...args}></CardUser>
  </RendererProvider>
);

export const Example = Template.bind({});
Example.args = {
  id: '0',
  network: {
    isOnline: false,
    client: 'mobile',
  },
  about: {
    skills: ['asdf'],
  },
  personal: {
    photo: false,
  },
};
