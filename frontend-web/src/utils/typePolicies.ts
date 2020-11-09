import { TypePolicy } from '@apollo/client';

import {
  isLoggedInResolver,
  userResolver,
} from 'src/resolvers/customResolvers';

export const typePolicies = {
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: isLoggedInResolver,
        user: userResolver,
      },
    },
  } as TypePolicy,
};
