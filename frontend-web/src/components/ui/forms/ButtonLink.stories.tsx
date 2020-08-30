import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { ROUTES } from 'shared';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { history } from 'src/navigation/store';
import { renderer } from 'src/utils/fela';
import { ButtonLink, ButtonLinkProps } from 'src/components/ui/forms/Button';

export default {
  title: 'Molecules/ButtonsLink',
  component: ButtonLink,
} as Meta;

const Template: Story<ButtonLinkProps> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <ButtonLink {...args} />
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

export const DefaultButtonLink = Template.bind({});
DefaultButtonLink.args = {
  url: { scheme: ROUTES.MAIN },
  text: { id: 'web.routes.Main.button_start' },
};

export const NegativeButtonLink = Template.bind({});
NegativeButtonLink.args = {
  url: { scheme: ROUTES.MAIN },
  text: { id: 'web.routes.Main.button_start' },
};

export const DisabledButtonLink = Template.bind({});
DisabledButtonLink.args = {
  url: { scheme: ROUTES.MAIN },
  text: { id: 'web.routes.Main.button_start' },
};
