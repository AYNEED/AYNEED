import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

import { Resolvers } from 'src/generated';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveVacancy,
  resolveComment,
  resolveHelp,
  resolveHelpItem,
  resolveLike,
  resolveMessage,
  resolveMessageFeed,
  resolveMessageInfoData,
  resolveMessageVisibleData,
  resolveProject,
  resolveProjectFeed,
  resolveSearchResult,
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

  // Unions
  SearchResult: resolveSearchResult,

  // Feeds:
  MessageFeed: resolveMessageFeed,
  ProjectFeed: resolveProjectFeed,
  UserFeed: resolveUserFeed,

  // Models:
  Message: resolveMessage,
  Project: resolveProject,
  User: resolveUser,

  // Additional models:
  Vacancy: resolveVacancy,
  Comment: resolveComment,
  Like: resolveLike,
  SubscribedUser: resolveSubscribedUser,

  // Models data:
  MessageInfoData: resolveMessageInfoData,
  MessageVisibleData: resolveMessageVisibleData,
  UserAboutData: resolveUserAboutData,
  UserContactsData: resolveUserContactsData,
  UserNetwotkData: resolveUserNetworkData,
  UserPersonalData: resolveUserPersonalData,
  UserRegionalData: resolveUserRegionalData,
  UserStatisticsData: resolveUserStatisticsData,

  // Models records:
  Help: resolveHelp,
  HelpItem: resolveHelpItem,
  UserCareerRecord: resolveUserCareerRecord,
  UserContactRecord: resolveUserContactRecord,
  UserEducationRecord: resolveUserEducationRecord,
  UserLanguageRecord: resolveUserLanguageRecord,
  UserSkillRecord: resolveUserSkillRecord,
};
