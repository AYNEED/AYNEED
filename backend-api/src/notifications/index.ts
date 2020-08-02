import {
  TypeToTransport,
  Transport,
  Event,
  ActionUpdate,
} from 'src/notifications/types';
import { email } from 'src/notifications/transports/email';
import { ws } from 'src/notifications/transports/ws';
import { pubsub } from 'src/resolvers/subscriptions';

const typeToTransport: TypeToTransport = {
  email,
  ws,
};

export const send = {
  notification: async <T extends {} = {}>(
    transportName: Transport | Transport[],
    event: Event,
    payload: T
  ): Promise<void[]> => {
    const transports: Transport[] = Array.isArray(transportName)
      ? transportName
      : [transportName];

    return Promise.all(
      transports.map((name) => typeToTransport[name](event, payload))
    );
  },

  update: async (action: ActionUpdate): Promise<void> =>
    pubsub.publish(action.event, action.payload), // TODO: use ws transport?
};
