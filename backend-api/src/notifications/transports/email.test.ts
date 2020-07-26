import { email } from 'src/notifications/transports/email';
import { IEmailTemplate } from 'src/notifications/types';

const testEmail = '7reyddk@gmail.com';
const testCode = '123456';

const userAdded: IEmailTemplate = {
  to: testEmail,
  from: 'support@aynd.ru',
  subject: 'Регистрация на AYNeed',
  text: `
    Благодарим Вас за интерес к платформе AYNeed!\n\n
    Чтобы завершить регистрацию, перейдите по ссылке: ${
      process.env.BASE_URL || 'localhost'
    }/registerConfirm?email=${testEmail}&code=${testCode}\n\n
    Ссылка действительна 10 минут
    `,
  html: `
    Благодарим Вас за интерес к платформе AYNeed!<br><br>
    Чтобы завершить регистрацию, перейдите <a href="${
      process.env.BASE_URL || 'localhost'
    }/registerConfirm?email=${testEmail}&code=${testCode}">перейдите по ссылке</a>.<br><br>
    Ссылка действительна 10 минут
    `,
};

const userForgotPassword: IEmailTemplate = {
  to: testEmail,
  from: 'support@aynd.ru',
  subject: 'Восстановление пароля',
  text: `Добрый день! Вы оставили заявку на сайте aynd.ru по смене пароля. Перейдите по ссылке, чтобы задать себе новый пароль: ${
    process.env.BASE_CLIENT_URL || 'localhost'
  }/passwordRecovery?email=${testEmail}&code=${testCode}`,
  html: `Добрый день! Вы оставили заявку на сайте aynd.ru по смене пароля. <a href="${
    process.env.BASE_CLIENT_URL || 'localhost'
  }/passwordRecovery?email=${testEmail}&code=${testCode}">Нажмите сюда</a>, чтобы задать себе новый пароль`,
};

describe('Email notification', () => {
  test('Event USER_ADDED', () => {
    expect(email({ event: 'USER_ADDED' }, userAdded));
  });

  test('Event USER_FORGOT_PASSWORD', () => {
    expect(email({ event: 'USER_FORGOT_PASSWORD' }, userForgotPassword));
  });
});
