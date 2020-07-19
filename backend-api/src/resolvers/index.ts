import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveUser,
  resolveUserNetwork,
  resolveUserFeed,
  resolveUserAboutData,
  resolveUserPersonalData,
  resolveUserRegionalData,
  resolveUserContactsData,
  resolveUserStatisticsData,
  resolveUserCareerRecord,
  resolveUserSkillRecord,
  resolveUserEducationRecord,
  resolveUserLanguageRecord,
  resolveUserContactRecord,
} from 'src/resolvers/customResolvers';
import { scalarDateTime } from 'src/resolvers/customScalars';

const schemaPath = process.cwd().concat('/schema.graphql');
const schemaText = readFileSync(schemaPath, 'utf8');

export const typeDefs = gql(schemaText);

export const resolvers: Resolvers = {
  Mutation: mutation,
  Query: query,
  Subscription: subscription,

  // Custom scalars:
  DateTime: scalarDateTime,

  // Custom resolvers:
  User: resolveUser,
  UserNetwotk: resolveUserNetwork,
  UserFeed: resolveUserFeed,
  UserAboutData: resolveUserAboutData,
  UserPersonalData: resolveUserPersonalData,
  UserRegionalData: resolveUserRegionalData,
  UserContactsData: resolveUserContactsData,
  UserStatisticsData: resolveUserStatisticsData,
  UserCareerRecord: resolveUserCareerRecord,
  UserSkillRecord: resolveUserSkillRecord,
  UserEducationRecord: resolveUserEducationRecord,
  UserLanguageRecord: resolveUserLanguageRecord,
  UserContactRecord: resolveUserContactRecord,
};
