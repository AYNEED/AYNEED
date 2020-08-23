import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { history } from 'src/navigation/store';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { renderer } from 'src/utils/fela';
import { SearchForm, Props } from 'src/components/blocks/SearchForm';

export default {
  title: 'Organisms/SearchForm',
  component: SearchForm,
} as Meta;

const Template: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ReactRouter history={history}>
        <SearchForm {...args} />
      </ReactRouter>
    </RendererProvider>
  </IntlProvider>
);

export const General = Template.bind({});
General.args = {
  mode: 'general',
  onSubmit: console.log,
};

export const Single = Template.bind({});
Single.args = {
  mode: 'single',
  onSubmit: console.log,
};
