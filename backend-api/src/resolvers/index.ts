import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveUser,
  resolveUserPersonalData,
} from 'src/resolvers/customResolvers';
import { scalarDateTime } from 'src/resolvers/customScalars';

export const resolvers: Resolvers = {
  Mutation: mutation,
  Query: query,
  Subscription: subscription,

  // Custom scalars:
  DateTime: scalarDateTime,

  // Custom resolvers:
  User: resolveUser,
  UserPersonalData: resolveUserPersonalData,
};
