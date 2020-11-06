import { TypePolicy } from '@apollo/client';

import { isLoggedInResolver } from 'src/resolvers/customResolvers';

export const typePolicies = {
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: isLoggedInResolver,
      },
    },
  } as TypePolicy,
};
