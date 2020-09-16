import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { ROUTES } from 'shared';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { history } from 'src/navigation/store';
import { renderer } from 'src/utils/fela';
import {
  Button,
  ButtonLink,
  ButtonProps,
  ButtonLinkProps,
} from 'src/components/ui/forms/Button';
import { Idea } from 'src/components/icons/projects/Idea';

export default {
  title: 'Molecules/Button',
  component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <Button {...args} />
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

const ButtonLinkTemplate: Story<ButtonLinkProps> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <ButtonLink {...args} />
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

export const General = ButtonTemplate.bind({});
General.args = {
  text: { id: 'web.routes.Main.button_start' },
  mode: 'origin',
  type: 'submit',
};

export const GeneralWithChildren = ButtonTemplate.bind({});
GeneralWithChildren.args = {
  text: { id: 'web.routes.Main.button_start' },
  mode: 'origin',
  type: 'submit',
  children: <Idea />,
};

export const Text = ButtonTemplate.bind({});
Text.args = {
  text: { id: 'web.routes.Main.button_start' },
  mode: 'text',
};

export const TextWithChildren = ButtonTemplate.bind({});
TextWithChildren.args = {
  text: { id: 'web.routes.Main.button_start' },
  mode: 'text',
  children: <Idea />,
};

export const Icon = ButtonTemplate.bind({});
Icon.args = {
  mode: 'text',
  children: <Idea />,
};

export const LinkButton = ButtonLinkTemplate.bind({});
LinkButton.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  text: { id: 'web.routes.Main.button_start' },
  children: <Idea />,
};
