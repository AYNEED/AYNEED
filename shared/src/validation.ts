import * as yup from 'yup';

import { events } from './i18n/dictionaries/rus/events';

type Events = keyof typeof events;
const _msg = (name: Events): Events => name;

const rules = {
  email: yup
    .string()
    .required(_msg('error.email.required'))
    .email(_msg('error.email.format')),

  password: yup
    .string()
    .required(_msg('error.password.required'))
    .min(8, _msg('error.password.min')),
};

export const validation = {
  signInEmail: yup.object().shape({
    email: rules.email,
    password: rules.password,
  }),
};
