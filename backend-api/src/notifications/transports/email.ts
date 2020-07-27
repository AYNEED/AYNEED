import { NotificationsBaseConfig } from 'src/notifications/types';

export const email = async <T extends {} = {}>(
  options: NotificationsBaseConfig,
  payload: T
): Promise<void> => {
  console.log(options, payload);
};
