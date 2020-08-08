import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveLike,
  resolveSubscriptionUser,
  resolveFriendsUser,
  resolveProject,
  resolveProjectFeed,
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
  resolveMessageVisibleData,
  resolveMessageUsersData,
  resolveMessageInfoData,
  resolveMessage,
  resolveSubscribersUser,
} from 'src/resolvers/customResolvers';
import { scalarToken, scalarDateTime } from 'src/resolvers/customScalars';

const schemaPath = process.cwd().concat('/schema.graphql');
const schemaText = readFileSync(schemaPath, 'utf8');

export const typeDefs = gql(schemaText);

export const resolvers: Resolvers = {
  Mutation: mutation,
  Query: query,
  Subscription: subscription,

  // Custom scalars:
  Token: scalarToken,
  DateTime: scalarDateTime,

  // Custom resolvers:
  Like: resolveLike,
  SubscriptionUser: resolveSubscriptionUser,
  SubscriberUser: resolveSubscribersUser,
  FriendUser: resolveFriendsUser,
  Project: resolveProject,
  ProjectFeed: resolveProjectFeed,
  Message: resolveMessage,
  MessageFeed: resolveMessageFeed,
  MessageInfoData: resolveMessageInfoData,
  MessageUsersData: resolveMessageUsersData,
  MessageVisibleData: resolveMessageVisibleData,
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
