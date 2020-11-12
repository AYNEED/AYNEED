import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export enum UserClient {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

export enum ProjectStatus {
  Idea = 'idea',
  Concept = 'concept',
  Mvp = 'mvp',
}

export enum UserRole {
  User = 'user',
  Support = 'support',
}

export enum UserLocale {
  Rus = 'rus',
}

export enum UserLanguageLevel {
  Beginner = 'beginner',
  Elementary = 'elementary',
  Intermediate = 'intermediate',
  UpperIntermediate = 'upper_intermediate',
  Advanced = 'advanced',
  Proficiency = 'proficiency',
}

export enum CommentTargetModel {
  Project = 'Project',
}

export enum SubscriptionStatus {
  Waiting = 'waiting',
  Accepted = 'accepted',
  Rejected = 'rejected',
}

export enum SubscriptionTargetModel {
  User = 'User',
  Project = 'Project',
}

export type Vacancy = {
  title: Scalars['String'];
  text: Scalars['String'];
  archivedAt: Maybe<Scalars['DateTime']>;
};

export type UserNetwotkData = {
  isOnline: Scalars['Boolean'];
  client: UserClient;
};

export type SubscribedUser = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  targetId: Scalars['ID'];
  targetModel: SubscriptionTargetModel;
  status: SubscriptionStatus;
  createdAt: Scalars['DateTime'];
};

export type Comment = {
  id: Scalars['ID'];
  parentId: Maybe<Scalars['ID']>;
  senderId: Scalars['ID'];
  targetId: Scalars['ID'];
  targetModel: CommentTargetModel;
  text: Scalars['String'];
  likesCount: Scalars['Int'];
  dislikesCount: Scalars['Int'];
  commentsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type UserSkillRecord = {
  title: Scalars['String'];
  primary: Scalars['Boolean'];
};

export type UserCareerRecord = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type UserEducationRecord = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type UserLanguageRecord = {
  code: Scalars['String'];
  level: UserLanguageLevel;
};

export type UserContactRecord = {
  value: Scalars['String'];
  isVisible: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
};

export type UserAboutData = {
  bio: Maybe<Scalars['String']>;
  skills: Array<UserSkillRecord>;
  career: Array<UserCareerRecord>;
  education: Array<UserEducationRecord>;
};

export type UserPersonalData = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isAgree: Scalars['Boolean'];
  bornAt: Maybe<Scalars['DateTime']>;
  photo: Array<Scalars['String']>;
};

export type UserRegionalData = {
  city: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  locale: UserLocale;
  languages: Array<UserLanguageRecord>;
};

export type UserContactsData = {
  email: UserContactRecord;
  phone: Maybe<UserContactRecord>;
  vkontakte: Maybe<UserContactRecord>;
  facebook: Maybe<UserContactRecord>;
  instagram: Maybe<UserContactRecord>;
  telegram: Maybe<UserContactRecord>;
  linkedin: Maybe<UserContactRecord>;
};

export type UserStatisticsData = {
  completeness: Scalars['Int'];
};

export type Project = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  title: Scalars['String'];
  problem: Scalars['String'];
  solution: Scalars['String'];
  likesCount: Scalars['Int'];
  status: ProjectStatus;
  vacancies: Array<Vacancy>;
  subscribers: Array<SubscribedUser>;
  comments: Array<Comment>;
  commentsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  archivedAt: Maybe<Scalars['DateTime']>;
};

export type User = {
  id: Scalars['ID'];
  role: UserRole;
  network: UserNetwotkData;
  about: UserAboutData;
  personal: UserPersonalData;
  regional: UserRegionalData;
  contacts: UserContactsData;
  statistics: UserStatisticsData;
  projects: Array<Project>;
  subscriptions: Array<SubscribedUser>;
  subscribers: Array<SubscribedUser>;
  friends: Array<SubscribedUser>;
  createdAt: Scalars['DateTime'];
};

export type Query = {
  isLoggedIn: Scalars['Boolean'];
  token: Maybe<Scalars['String']>;
  user: Maybe<Array<Maybe<User>>>;
};

export type GetIsLoggedInQueryVariables = Exact<{ [key: string]: never }>;

export type GetIsLoggedInQuery = Pick<Query, 'isLoggedIn'>;

export const GetIsLoggedInDocument = gql`
  query GetIsLoggedIn {
    isLoggedIn @client
  }
`;
export type GetIsLoggedInQueryResult = Apollo.QueryResult<
  GetIsLoggedInQuery,
  GetIsLoggedInQueryVariables
>;
