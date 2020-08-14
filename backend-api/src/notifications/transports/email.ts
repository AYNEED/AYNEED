import sgMail, { MailDataRequired } from '@sendgrid/mail';

import { ROUTES } from 'shared';
import { EMAIL_SUPPORT } from 'src/constants';
import { EVENTS } from 'src/notifications/events';
import { Event, Notification } from 'src/notifications/types';
import { findUserById } from 'src/helpers/users';

const webURL = process.env.AYNEED_BACKEND_CLIENT_DOMAIN;

sgMail.setApiKey(process.env.AYNEED_BACKEND_SENDGRID_API_KEY || '');

const eventToTemplate: {
  [key in Event]: (
    payload: Notification['payload']
  ) => Promise<MailDataRequired>;
} = {
  // [EVENTS.ON_SIGN_UP_EMAIL]: async ({ from, to }) => {
  //   return {
  //     to,
  //     from: EMAIL_SUPPORT,
  //     subject: 'Регистрация на AYNeed',
  //     text: `
  //       Благодарим Вас за интерес к платформе AYNeed!\n\n
  //       Чтобы завершить регистрацию, перейдите по ссылке: ${webURL}/registerConfirm?code=${code}
  //     `,
  //     html: `
  //       Благодарим Вас за интерес к платформе AYNeed!<br><br>
  //       Чтобы завершить регистрацию, перейдите <a href="${webURL}/registerConfirm?code=${code}">перейдите по ссылке</a>.
  //     `,
  //   };
  // },
  [EVENTS.ON_USER_FORGOT_PASSWORD]: async ({ from, to }) => {
    const user = await findUserById(to);

    const code = user.private.recovery?.code;
    const email = user.contacts.email.value;
    const { firstName, lastName } = user.personal;

    return {
      to: `${firstName} ${lastName} <${email}>`,
      from: `AYNeed <${EMAIL_SUPPORT}>`,
      subject: 'Восстановление пароля',
      text: `
        Добрый день!
        Вы оставили заявку на сайте ${webURL} для смены пароля.
        Перейдите по ссылке, чтобы задать себе новый пароль: ${webURL}${ROUTES.FORGOT_PASSWORD_CHANGE}?code=${code}
      `,
      html: `
        <p>Добрый день!</p>
        <p>Вы оставили заявку на сайте ${webURL} для смены пароля.</p>
        <p><a href="${webURL}${ROUTES.FORGOT_PASSWORD_CHANGE}?code=${code}">Нажмите сюда</a>, чтобы задать себе новый пароль.</p>
      `,
    };
  },
};

export const email = async (action: Notification): Promise<void> => {
  const template = await eventToTemplate[action.event](action.payload);

  try {
    await sgMail.send(template);
  } catch (error) {
    console.error(`[notifications email] ${error}`);
  }
};
