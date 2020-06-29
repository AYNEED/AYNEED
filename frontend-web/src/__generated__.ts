import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type Mutation = {
  signInEmail: Maybe<User>;
  signUpEmail: Maybe<User>;
};

export type MutationSignInEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: Locale;
  isAgree: Scalars['Boolean'];
};

export type Query = {
  user: Maybe<User>;
  users: Array<User>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  userAdded: User;
  userUpdated: User;
};

export enum Locale {
  Rus = 'rus',
}

export enum LanguageLevel {
  Beginner = 'beginner',
  Elementary = 'elementary',
  Intermediate = 'intermediate',
  UpperIntermediate = 'upper_intermediate',
  Advanced = 'advanced',
  Proficiency = 'proficiency',
}

export type User = {
  id: Scalars['ID'];
  isOnline: Scalars['Boolean'];
  about: UserAboutData;
  personal: UserPersonalData;
  regional: UserRegionalData;
  contacts: UserContactsData;
  statistics: UserStatisticsData;
  createdAt: Scalars['DateTime'];
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
  locale: Locale;
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
  level: LanguageLevel;
};

export type UserContactRecord = {
  value: Scalars['String'];
  isVisible: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users: Array<
    Pick<User, 'id' | 'isOnline'> & {
      personal: Pick<UserPersonalData, 'firstName' | 'lastName'>;
    }
  >;
};

export type OnUserAddedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnUserAddedSubscription = {
  userAdded: Pick<User, 'id' | 'isOnline'> & {
    personal: Pick<UserPersonalData, 'firstName' | 'lastName'>;
  };
};

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      isOnline
      personal {
        firstName
        lastName
      }
    }
  }
`;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const OnUserAddedDocument = gql`
  subscription onUserAdded {
    userAdded {
      id
      isOnline
      personal {
        firstName
        lastName
      }
    }
  }
`;
export type OnUserAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnUserAddedSubscription
>;
