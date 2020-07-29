import sgMail, { MailDataRequired } from '@sendgrid/mail';

import { EVENTS } from 'src/notifications/events';
import { NotificationsBaseConfig } from 'src/notifications/types';

export const userAddedEmailTpl = (payload: any): MailDataRequired => ({
  to: payload.to,
  from: 'support@aynd.ru',
  subject: 'Регистрация на AYNeed',
  text: `
    Благодарим Вас за интерес к платформе AYNeed!\n\n
    Чтобы завершить регистрацию, перейдите по ссылке: ${process.env.AYNEED_BACKEND_HOST_URL}/registerConfirm?email=${payload.to}&code=${payload.code}\n\n
    Ссылка действительна 10 минут
    `,
  html: `
    Благодарим Вас за интерес к платформе AYNeed!<br><br>
    Чтобы завершить регистрацию, перейдите <a href="${process.env.AYNEED_BACKEND_HOST_URL}/registerConfirm?email=${payload.to}&code=${payload.code}">перейдите по ссылке</a>.<br><br>
    Ссылка действительна 10 минут
    `,
});

const userForgotPasswordEmailTpl = (payload: any): MailDataRequired => ({
  to: payload.to,
  from: 'support@aynd.ru',
  subject: 'Восстановление пароля',
  text: `Добрый день! Вы оставили заявку на сайте aynd.ru по смене пароля. Перейдите по ссылке, чтобы задать себе новый пароль: ${process.env.AYNEED_BACKEND_HOST_URL}/passwordRecovery?email=${payload.to}&code=${payload.code}`,
  html: `Добрый день! Вы оставили заявку на сайте aynd.ru по смене пароля. <a href="${process.env.AYNEED_BACKEND_HOST_URL}/passwordRecovery?email=${payload.to}&code=${payload.code}">Нажмите сюда</a>, чтобы задать себе новый пароль`,
});

export const email = async <T extends {} = {}>(
  options: NotificationsBaseConfig,
  payload: T
): Promise<void> => {
  sgMail.setApiKey(process.env.AYNEED_BACKEND_SENDGRID_API_KEY || '');

  switch (options.event) {
    case EVENTS.USER_ADDED:
      try {
        const mailData: MailDataRequired = userAddedEmailTpl(payload);
        const res = await sgMail.send(mailData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      break;

    case EVENTS.USER_FORGOT_PASSWORD:
      try {
        const mailData: MailDataRequired = userForgotPasswordEmailTpl(payload);
        const res = await sgMail.send(mailData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      console.log('Notification event - not found');
  }
};
