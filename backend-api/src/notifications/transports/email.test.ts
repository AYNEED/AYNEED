import { EVENTS } from 'src/notifications/events';
import { email } from 'src/notifications/transports/email';

describe('Email notification', () => {
  test('Event USER_ADDED - sending test email', () => {
    expect(
      email(
        { event: EVENTS.USER_ADDED },
        { to: '7reyddk@gmail.com', code: '123456' }
      )
    );
  });

  test('Event USER_FORGOT_PASSWORD - sending test email', () => {
    expect(
      email(
        { event: EVENTS.USER_FORGOT_PASSWORD },
        { to: '7reyddk@gmail.com', code: '123456' }
      )
    );
  });
});
