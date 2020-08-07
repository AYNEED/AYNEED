import { readFileSync } from 'fs';
import { gql } from 'apollo-server-express';

import { Resolvers } from 'src/__generated__';
import { subscription } from 'src/resolvers/subscriptions';
import { mutation } from 'src/resolvers/mutations';
import { query } from 'src/resolvers/queries';
import {
  resolveSubscriptionUser,
  resolveFriendsUser,
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
  resolveMessageVisibleData,
  resolveMessageUsersData,
  resolveMessageInfoData,
  resolveMessage,
  resolveSubscribersUser,
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
  SubscriptionUser: resolveSubscriptionUser,
  SubscriberUser: resolveSubscribersUser,
  FriendUser: resolveFriendsUser,
  Beginning: resolveBeginning,
  BeginningFeed: resolveBeginningFeed,
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
