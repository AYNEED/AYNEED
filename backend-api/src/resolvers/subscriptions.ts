/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PubSub } from 'apollo-server-express';

import { Resolvers, Beginning, User } from 'src/__generated__';
import { UPDATES } from 'src/notifications/events';

export const pubsub = new PubSub();

export const subscription: Resolvers['Subscription'] = {
  beginningAdded: {
    resolve: (payload: Beginning): Beginning => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.BEGINNING_ADDED),
  },
  beginningUpdated: {
    resolve: (payload: Beginning): Beginning => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.BEGINNING_UPDATED),
  },

  userAdded: {
    resolve: (payload: User): User => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.USER_ADDED),
  },
  userUpdated: {
    resolve: (payload: User): User => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.USER_UPDATED),
  },
};
