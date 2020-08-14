import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveLike,
  resolveMessage,
  resolveMessageFeed,
  resolveMessageInfoData,
  resolveMessageUsersData,
  resolveMessageVisibleData,
  resolveProject,
  resolveProjectFeed,
  resolveSubscribedUser,
  resolveUser,
  resolveUserAboutData,
  resolveUserCareerRecord,
  resolveUserContactRecord,
  resolveUserContactsData,
  resolveUserEducationRecord,
  resolveUserFeed,
  resolveUserLanguageRecord,
  resolveUserNetworkData,
  resolveUserPersonalData,
  resolveUserRegionalData,
  resolveUserSkillRecord,
  resolveUserStatisticsData,
  resolveReferencesArea,
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

  // Feeds:
  MessageFeed: resolveMessageFeed,
  ProjectFeed: resolveProjectFeed,
  UserFeed: resolveUserFeed,

  // Models:
  Message: resolveMessage,
  Project: resolveProject,
  User: resolveUser,

  // Additional models:
  Like: resolveLike,
  SubscribedUser: resolveSubscribedUser,

  // Models data:
  MessageInfoData: resolveMessageInfoData,
  MessageUsersData: resolveMessageUsersData,
  MessageVisibleData: resolveMessageVisibleData,
  UserAboutData: resolveUserAboutData,
  UserContactsData: resolveUserContactsData,
  UserNetwotkData: resolveUserNetworkData,
  UserPersonalData: resolveUserPersonalData,
  UserRegionalData: resolveUserRegionalData,
  UserStatisticsData: resolveUserStatisticsData,

  // Models records:
  ReferencesArea: resolveReferencesArea,
  UserCareerRecord: resolveUserCareerRecord,
  UserContactRecord: resolveUserContactRecord,
  UserEducationRecord: resolveUserEducationRecord,
  UserLanguageRecord: resolveUserLanguageRecord,
  UserSkillRecord: resolveUserSkillRecord,
};
