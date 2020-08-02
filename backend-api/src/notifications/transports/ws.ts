import { pubsub } from 'src/resolvers/subscriptions';
import { Event } from 'src/notifications/types';

export const ws = async <T extends {} = {}>(
  event: Event,
  payload: T
): Promise<void> => {
  pubsub.publish(event, payload);
};
