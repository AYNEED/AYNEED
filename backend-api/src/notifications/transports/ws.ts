import { pubsub } from 'src/resolvers/subscriptions';
import { Update, Notification } from 'src/notifications/types';

export const ws = async (action: Update | Notification): Promise<void> => {
  pubsub.publish(action.event, action.payload);
};
