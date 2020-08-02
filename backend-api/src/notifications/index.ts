import { Update, Notification } from 'src/notifications/types';
import { email } from 'src/notifications/transports/email';
import { ws } from 'src/notifications/transports/ws';

export const send = {
  // TODO: use queue
  notification: async (action: Notification): Promise<void> => email(action),
  update: async (action: Update): Promise<void> => ws(action),
};
