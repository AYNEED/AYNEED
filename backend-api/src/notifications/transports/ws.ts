import { pubsub } from 'src/resolvers/subscriptions';
import { NotificationsBaseConfig } from 'src/notifications/types';

export const ws = async <T extends {} = {}>(
  options: NotificationsBaseConfig,
  payload: T
): Promise<void> => {
  pubsub.publish(options.event, payload);
};
