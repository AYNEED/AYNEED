import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';

import { renderer } from 'src/utils/fela';
import { TabBars, Props } from 'src/components/blocks/TabBars';
import { IntlProvider } from 'src/i18n/IntlProvider';

export default {
  title: 'Organisms/TabBars',
  component: TabBars,
} as Meta;

const Template: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <TabBars {...args} />
    </RendererProvider>
  </IntlProvider>
);

export const Profile = Template.bind({});
Profile.args = {
  tabType: 'profile',
};

export const Subscriptions = Template.bind({});
Subscriptions.args = {
  tabType: 'subscriptions',
};

export const friend = Template.bind({});
friend.args = {
  tabType: 'friend',
};

export const Mvp_concepts = Template.bind({});
Mvp_concepts.args = {
  tabType: 'mvp_concepts',
};

export const Idea = Template.bind({});
Idea.args = {
  tabType: 'idea',
};
