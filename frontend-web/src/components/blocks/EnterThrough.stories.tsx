import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';

import { IntlProvider } from 'src/i18n/IntlProvider';
import { renderer } from 'src/utils/fela';
import { EnterThrough as EnterThroughImpl } from 'src/components/blocks/EnterThrough';

export default {
  title: 'Organisms',
  component: EnterThroughImpl,
} as Meta;

const Template: Story = (args) => (
  <IntlProvider>
    <RendererProvider renderer={renderer}>
      <EnterThroughImpl {...args} />
    </RendererProvider>
  </IntlProvider>
);

export const EnterThrough = Template.bind({});
