import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveBeginning,
  resolveBeginningFeed,
  resolveUser,
  resolveUserFeed,
  resolveUserAboutData,
  resolveUserContactsData,
  resolveUserNetworkData,
  resolveUserPersonalData,
  resolveUserRegionalData,
  resolveUserStatisticsData,
  resolveUserCareerRecord,
  resolveUserContactRecord,
  resolveUserEducationRecord,
  resolveUserLanguageRecord,
  resolveUserSkillRecord,
  resolveMessageFeed,
  resolveMessageVisible,
  resolveMessageUsers,
  resolveMessageInfo,
  resolveMessage,
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
  Beginning: resolveBeginning,
  BeginningFeed: resolveBeginningFeed,
  Message: resolveMessage,
  MessageFeed: resolveMessageFeed,
  MessageInfoData: resolveMessageInfo,
  MessageUsersData: resolveMessageUsers,
  MessageVisibleData: resolveMessageVisible,
  User: resolveUser,
  UserFeed: resolveUserFeed,
  UserAboutData: resolveUserAboutData,
  UserContactsData: resolveUserContactsData,
  UserNetwotkData: resolveUserNetworkData,
  UserPersonalData: resolveUserPersonalData,
  UserRegionalData: resolveUserRegionalData,
  UserStatisticsData: resolveUserStatisticsData,
  UserCareerRecord: resolveUserCareerRecord,
  UserContactRecord: resolveUserContactRecord,
  UserEducationRecord: resolveUserEducationRecord,
  UserLanguageRecord: resolveUserLanguageRecord,
  UserSkillRecord: resolveUserSkillRecord,
};
