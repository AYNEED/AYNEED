import { PubSub } from 'apollo-server-express';

import { Resolvers, User } from 'src/__generated__';

export const pubsub = new PubSub();

export const events = {
  user: {
    added: 'EVENTS_USER_ADDED',
    updated: 'EVENTS_USER_UPDATED',
  },
};

export const subscription: Resolvers['Subscription'] = {
  userAdded: {
    resolve: (payload: User) => payload,
    subscribe: () => pubsub.asyncIterator(events.user.added),
  },
  userUpdated: {
    resolve: (payload: User) => payload,
    subscribe: () => pubsub.asyncIterator(events.user.updated),
  },
};
