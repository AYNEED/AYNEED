/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PubSub } from 'apollo-server-express';

import { Resolvers, Project, User } from 'src/__generated__';
import { UPDATES } from 'src/notifications/events';

export const pubsub = new PubSub();

export const subscription: Resolvers['Subscription'] = {
  projectAdded: {
    resolve: (payload: Project): Project => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.PROJECT_ADDED),
  },
  projectUpdated: {
    resolve: (payload: Project): Project => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.PROJECT_UPDATED),
  },

  userUpdated: {
    resolve: (payload: User): User => payload,
    subscribe: () => pubsub.asyncIterator(UPDATES.USER_UPDATED),
  },
};
