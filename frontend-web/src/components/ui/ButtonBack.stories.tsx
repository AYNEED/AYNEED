import React from 'react';

import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { ButtonBack } from 'src/components/ui/ButtonBack';
import { IntlProvider, Props } from 'src/i18n/IntlProvider';

export default {
  title: 'Molecules/Button back',
  component: ButtonBack,
} as Meta;

const Tamplate: Story<Props> = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <ButtonBack {...args}></ButtonBack>
    </RendererProvider>
  </IntlProvider>
);

export const WithText = Tamplate.bind({});
WithText.args = {
  additionalText: true,
};

export const WithoutText = Tamplate.bind({});
WithoutText.args = {
  additionalText: false,
};
