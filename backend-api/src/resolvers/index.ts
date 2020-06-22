import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveUser,
  resolveUserPersonalData,
} from 'src/resolvers/customResolvers';

export const resolvers: Resolvers = {
  Mutation: mutation,
  Query: query,
  Subscription: subscription,

  // Custom resolvers:
  User: resolveUser,
  UserPersonalData: resolveUserPersonalData,
};
