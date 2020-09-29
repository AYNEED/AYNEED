import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { history } from 'src/navigation/store';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { renderer } from 'src/utils/fela';
import { NavigationPanel, Props } from 'src/components/blocks/NavigationPanel';

export default {
  title: 'Organisms/NavigationPanel',
  component: NavigationPanel,
} as Meta;

const Template: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <NavigationPanel {...args} />
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

export const GeneralExpanded = Template.bind({});
GeneralExpanded.args = {
  expanded: true,
  logged: false,
};

export const General = Template.bind({});
General.args = {
  expanded: false,
  logged: false,
};

export const LoggedInExpanded = Template.bind({});
LoggedInExpanded.args = {
  expanded: true,
  logged: true,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  expanded: false,
  logged: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  expanded: true,
  logged: true,
};
