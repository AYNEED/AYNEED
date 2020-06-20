import { PubSub } from 'apollo-server';

import { Resolvers } from 'src/_generated';

export const pubsub = new PubSub();

export const events = {
  user: {
    added: 'EVENTS_USER_ADDED',
    updated: 'EVENTS_USER_UPDATED',
  },
};

export const subscription: Resolvers['Subscription'] = {
  userAdded: {
    subscribe: () => pubsub.asyncIterator([events.user.added]),
  },
  userUpdated: {
    subscribe: () => pubsub.asyncIterator([events.user.updated]),
  },
};
