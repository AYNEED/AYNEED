import sgMail, { MailDataRequired } from '@sendgrid/mail';

import { ROUTES } from 'shared';
import { EMAIL_SUPPORT } from 'src/constants';
import { EVENTS } from 'src/notifications/events';
import { NotificationsBaseConfig } from 'src/notifications/types';

const webURL = process.env.AYNEED_BACKEND_HOST_URL;

sgMail.setApiKey(process.env.AYNEED_BACKEND_SENDGRID_API_KEY || '');

const eventToHandler = {
  [EVENTS.BEGINNING_ADDED]: null,
  [EVENTS.BEGINNING_UPDATED]: null,

  [EVENTS.USER_ADDED]: ({ to, code }: any): MailDataRequired => ({
    to,
    from: EMAIL_SUPPORT,
    subject: 'Регистрация на AYNeed',
    text: `
      Благодарим Вас за интерес к платформе AYNeed!\n\n
      Чтобы завершить регистрацию, перейдите по ссылке: ${webURL}/registerConfirm?code=${code}
    `,
    html: `
      Благодарим Вас за интерес к платформе AYNeed!<br><br>
      Чтобы завершить регистрацию, перейдите <a href="${webURL}/registerConfirm?code=${code}">перейдите по ссылке</a>.
    `,
  }),
  [EVENTS.USER_UPDATED]: null,

  [EVENTS.USER_FORGOT_PASSWORD]: ({ to, code }: any): MailDataRequired => ({
    to,
    from: EMAIL_SUPPORT,
    subject: 'Восстановление пароля',
    text: `Добрый день! Вы оставили заявку на сайте aynd.ru для смены пароля. Перейдите по ссылке, чтобы задать себе новый пароль: ${webURL}${ROUTES.FORGOT_PASSWORD_CHANGE}?code=${code}`,
    html: `Добрый день! Вы оставили заявку на сайте aynd.ru для смены пароля. <a href="${webURL}${ROUTES.FORGOT_PASSWORD_CHANGE}?code=${code}">Нажмите сюда</a>, чтобы задать себе новый пароль`,
  }),
};

export const email = async <T extends {} = {}>(
  options: NotificationsBaseConfig,
  payload: T
): Promise<void> => {
  const handler = eventToHandler[options.event];

  if (handler) {
    try {
      const res = await sgMail.send(handler(payload));
      console.log(res);
    } catch (error) {
      console.error(`[notifications email] ${error}`);
    }
  } else {
    console.error(
      `[notifications email] Event ${options.event} is not supported`
    );
  }
};
