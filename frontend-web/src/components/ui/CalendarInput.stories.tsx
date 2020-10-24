import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';
import { renderer } from 'src/utils/fela';
import { CalendarInput, Props } from 'src/components/ui/CalendarInput';

export default {
  title: 'Molecules/Calendar',
  component: CalendarInput,
} as Meta;

const Tamplate: Story<Props> = (args) => (
  <RendererProvider renderer={renderer}>
    <CalendarInput {...args}></CalendarInput>
  </RendererProvider>
);

export const Enable = Tamplate.bind({});
Enable.args = {
  disabled: false,
};

export const Disable = Tamplate.bind({});
Disable.args = {
  disabled: true,
};
