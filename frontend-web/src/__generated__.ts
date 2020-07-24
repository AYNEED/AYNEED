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
  forgotPassword: Scalars['Boolean'];
  forgotPasswordChange: User;
  signInEmail: User;
  signUpEmail: User;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationForgotPasswordChangeArgs = {
  password: Scalars['String'];
  recoveryCode: Scalars['String'];
  client: Client;
};

export type MutationSignInEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  client: Client;
};

export type MutationSignUpEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: Locale;
  isAgree: Scalars['Boolean'];
  client: Client;
};

export type Query = {
  user: User;
  users: UserFeed;
  search: UserFeed;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUsersArgs = {
  cursor: Maybe<Scalars['ID']>;
};

export type QuerySearchArgs = {
  query: Scalars['String'];
  mode: SearchMode;
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

export enum Client {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

export enum SearchMode {
  Candidates = 'candidates',
  Users = 'users',
  Ideas = 'ideas',
  Concepts = 'concepts',
  Mvps = 'mvps',
}

export enum Role {
  User = 'user',
}

export type User = {
  id: Scalars['ID'];
  role: Role;
  network: UserNetwotk;
  about: UserAboutData;
  personal: UserPersonalData;
  regional: UserRegionalData;
  contacts: UserContactsData;
  statistics: UserStatisticsData;
  createdAt: Scalars['DateTime'];
};

export type UserNetwotk = {
  isOnline: Scalars['Boolean'];
  client: Client;
};

export type UserFeed = {
  items: Array<User>;
  hasMore: Scalars['Boolean'];
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

export type CommouUserFieldsFragment = Pick<User, 'id'> & {
  network: Pick<UserNetwotk, 'isOnline' | 'client'>;
  about: { skills: Array<Pick<UserSkillRecord, 'title' | 'primary'>> };
  personal: Pick<UserPersonalData, 'firstName' | 'lastName' | 'photo'>;
};

export type GetUsersQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetUsersQuery = {
  users: Pick<UserFeed, 'hasMore'> & { items: Array<CommouUserFieldsFragment> };
};

export type OnUserAddedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnUserAddedSubscription = { userAdded: CommouUserFieldsFragment };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = Pick<Mutation, 'forgotPassword'>;

export type SignInEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  client: Client;
}>;

export type SignInEmailMutation = { signInEmail: CommouUserFieldsFragment };

export type SignUpEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: Locale;
  isAgree: Scalars['Boolean'];
  client: Client;
}>;

export type SignUpEmailMutation = { signUpEmail: CommouUserFieldsFragment };

export const CommouUserFieldsFragmentDoc = gql`
  fragment commouUserFields on User {
    id
    network {
      isOnline
      client
    }
    about {
      skills {
        title
        primary
      }
    }
    personal {
      firstName
      lastName
      photo
    }
  }
`;
export const GetUsersDocument = gql`
  query GetUsers($cursor: ID) {
    users(cursor: $cursor) {
      items {
        ...commouUserFields
      }
      hasMore
    }
  }
  ${CommouUserFieldsFragmentDoc}
`;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const OnUserAddedDocument = gql`
  subscription onUserAdded {
    userAdded {
      ...commouUserFields
    }
  }
  ${CommouUserFieldsFragmentDoc}
`;
export type OnUserAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnUserAddedSubscription
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<
  ForgotPasswordMutation
>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const SignInEmailDocument = gql`
  mutation SignInEmail($email: String!, $password: String!, $client: CLIENT!) {
    signInEmail(email: $email, password: $password, client: $client) {
      ...commouUserFields
    }
  }
  ${CommouUserFieldsFragmentDoc}
`;
export type SignInEmailMutationFn = ApolloReactCommon.MutationFunction<
  SignInEmailMutation,
  SignInEmailMutationVariables
>;
export type SignInEmailMutationResult = ApolloReactCommon.MutationResult<
  SignInEmailMutation
>;
export type SignInEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SignInEmailMutation,
  SignInEmailMutationVariables
>;
export const SignUpEmailDocument = gql`
  mutation SignUpEmail(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $locale: LOCALE!
    $isAgree: Boolean!
    $client: CLIENT!
  ) {
    signUpEmail(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      locale: $locale
      isAgree: $isAgree
      client: $client
    ) {
      ...commouUserFields
    }
  }
  ${CommouUserFieldsFragmentDoc}
`;
export type SignUpEmailMutationFn = ApolloReactCommon.MutationFunction<
  SignUpEmailMutation,
  SignUpEmailMutationVariables
>;
export type SignUpEmailMutationResult = ApolloReactCommon.MutationResult<
  SignUpEmailMutation
>;
export type SignUpEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SignUpEmailMutation,
  SignUpEmailMutationVariables
>;
