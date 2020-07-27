import * as yup from 'yup';

import { events } from './i18n/dictionaries/rus/events';

type Events = keyof typeof events;
const _msg = (message: Events): Events => message;

export class ValidationError extends Error {
  constructor(message: Events) {
    super(message);
    this.name = 'ValidationError';
  }
}

const rules = {
  email: yup
    .string()
    .required(_msg('error.email.required'))
    .email(_msg('error.email.format')),

  password: yup
    .string()
    .required(_msg('error.password.required'))
    .min(8, _msg('error.password.min')),

  firstName: yup.string().required(_msg('error.firstName.required')),

  lastName: yup.string().required(_msg('error.lastName.required')),
};

export const validators = {
  forgotPassword: yup.object().shape({
    email: rules.email,
  }),

  forgotPasswordChange: yup.object().shape({
    password: rules.password,
  }),

  signInEmail: yup.object().shape({
    email: rules.email,
    password: rules.password,
  }),

  signUpEmail: yup.object().shape({
    firstName: rules.firstName,
    lastName: rules.lastName,
    email: rules.email,
    password: rules.password,
  }),
};
