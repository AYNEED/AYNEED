import * as yup from 'yup';

import { events } from './i18n/dictionaries/rus/events';

type Rules = Partial<typeof rules>;
type Events = keyof typeof events;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createSchema = (rules: Rules) => yup.object().shape(rules);

const _msg = (name: Events): Events => name;

export const rules = {
  email: yup
    .string()
    .required(_msg('error.email.required'))
    .email(_msg('error.email.format')),

  password: yup
    .string()
    .required(_msg('error.password.required'))
    .min(8, _msg('error.password.min')),
};
