import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';
import { validators } from 'shared';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { history } from 'src/navigation/store';
import { renderer } from 'src/utils/fela';
import {
  InputEmail,
  InputProps,
  InputCheckbox,
  InputRadio,
  InputSwitch,
  InputCheckabeProps,
} from 'src/components/ui/forms/Input';

import { useFormik } from 'formik';

export default {
  title: 'Molecules/Input',
  component: InputEmail,
} as Meta;

const InputTemplate: Story<InputProps> = (args) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnChange: false,
    validationSchema: validators.forgotPassword,
    onSubmit: () => {},
  });
  args.name = 'email';
  args.value = formik.values.email;
  args.error = formik.errors.email;
  args.onChange = formik.handleChange;

  return (
    <IntlProvider>
      <RendererProvider renderer={renderer}>
        <ReactRouter history={history}>
          <form onSubmit={formik.handleSubmit}>
            <InputEmail {...args} />
          </form>
        </ReactRouter>
      </RendererProvider>
    </IntlProvider>
  );
};

const InputCheckabeTemplate: Story<InputCheckabeProps> = (args) => {
  return (
    <IntlProvider>
      <RendererProvider renderer={renderer}>
        <ReactRouter history={history}>
          <InputCheckbox {...args} />
        </ReactRouter>
      </RendererProvider>
    </IntlProvider>
  );
};

const InputRadioTemplate: Story<InputCheckabeProps> = (args) => {
  return (
    <IntlProvider>
      <RendererProvider renderer={renderer}>
        <ReactRouter history={history}>
          <InputRadio {...args} />
        </ReactRouter>
      </RendererProvider>
    </IntlProvider>
  );
};

const InputSwitchTemplate: Story<InputCheckabeProps> = (args) => {
  return (
    <IntlProvider>
      <RendererProvider renderer={renderer}>
        <ReactRouter history={history}>
          <InputSwitch {...args} />
        </ReactRouter>
      </RendererProvider>
    </IntlProvider>
  );
};

export const General = InputTemplate.bind({});
General.args = {
  placeholder: { id: 'web.routes.Main.button_start' },
};

export const Checkable = InputCheckabeTemplate.bind({});
Checkable.args = {};

export const Radio = InputRadioTemplate.bind({});
Radio.args = {};
export const Switch = InputSwitchTemplate.bind({});
Switch.args = {};
