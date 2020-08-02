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
  addBeginning: Beginning;
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

export type MutationAddBeginningArgs = {
  authorId: Scalars['ID'];
  title: Scalars['String'];
  problem: Scalars['String'];
  solution: Scalars['String'];
};

export type Query = {
  beginning: Beginning;
  beginnings: BeginningFeed;
  user: User;
  users: UserFeed;
  search: UserFeed;
  messages: MessageFeed;
};

export type QueryBeginningArgs = {
  id: Scalars['ID'];
};

export type QueryBeginningsArgs = {
  cursor: Maybe<Scalars['ID']>;
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

export type QueryMessagesArgs = {
  cursor: Scalars['ID'];
};

export type Subscription = {
  beginningAdded: Beginning;
  beginningUpdated: Beginning;
  userAdded: User;
  userUpdated: User;
};

export enum Locale {
  Rus = 'rus',
}

export enum StatusStatement {
  Waiting = 'waiting',
  Accepted = 'accepted',
  Rejected = 'rejected',
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

export type BeginningFeed = {
  items: Array<Beginning>;
  hasMore: Scalars['Boolean'];
};

export type UserFeed = {
  items: Array<User>;
  hasMore: Scalars['Boolean'];
};

export type MessageFeed = {
  items: Array<Message>;
  hasMore: Scalars['Boolean'];
};

export type Beginning = {
  id: Scalars['ID'];
  authorId: Scalars['ID'];
  title: Scalars['String'];
  problem: Scalars['String'];
  solution: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type SubscriptionUser = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  recipientId: Scalars['ID'];
  status: StatusStatement;
  createdAt: Scalars['DateTime'];
};

export type User = {
  id: Scalars['ID'];
  role: Role;
  network: UserNetwotkData;
  about: UserAboutData;
  personal: UserPersonalData;
  regional: UserRegionalData;
  contacts: UserContactsData;
  statistics: UserStatisticsData;
  createdAt: Scalars['DateTime'];
  beginnings: Array<Beginning>;
  subscriptions: Array<SubscriptionUser>;
};

export type Message = {
  info: MessageInfoData;
  users: MessageUsersData;
  visible: MessageVisibleData;
  createdAt: Scalars['DateTime'];
  editAt: Maybe<Scalars['DateTime']>;
  deleteAt: Maybe<Scalars['DateTime']>;
};

export type UserNetwotkData = {
  isOnline: Scalars['Boolean'];
  client: Client;
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

export type MessageInfoData = {
  text: Scalars['String'];
  isRead: Scalars['Boolean'];
};

export type MessageUsersData = {
  authorId: Scalars['ID'];
  recipientId: Scalars['ID'];
};

export type MessageVisibleData = {
  isVisibleAuthor: Scalars['Boolean'];
  isVisibleAll: Scalars['Boolean'];
};

export type CommouBeginningFieldsFragment = Pick<
  Beginning,
  'id' | 'title' | 'problem' | 'solution'
>;

export type CommouUserFieldsFragment = Pick<User, 'id'> & {
  network: Pick<UserNetwotkData, 'isOnline' | 'client'>;
  about: { skills: Array<Pick<UserSkillRecord, 'title' | 'primary'>> };
  personal: Pick<UserPersonalData, 'firstName' | 'lastName' | 'photo'>;
};

export type GetBeginningsQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetBeginningsQuery = {
  beginnings: Pick<BeginningFeed, 'hasMore'> & {
    items: Array<CommouBeginningFieldsFragment>;
  };
};

export type GetUsersQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetUsersQuery = {
  users: Pick<UserFeed, 'hasMore'> & { items: Array<CommouUserFieldsFragment> };
};

export type OnBeginningAddedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnBeginningAddedSubscription = {
  beginningAdded: CommouBeginningFieldsFragment;
};

export type OnBeginningUpdatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnBeginningUpdatedSubscription = {
  beginningUpdated: CommouBeginningFieldsFragment;
};

export type OnUserAddedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnUserAddedSubscription = { userAdded: CommouUserFieldsFragment };

export type OnUserUpdatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnUserUpdatedSubscription = {
  userUpdated: CommouUserFieldsFragment;
};

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

export const CommouBeginningFieldsFragmentDoc = gql`
  fragment commouBeginningFields on Beginning {
    id
    title
    problem
    solution
  }
`;
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
export const GetBeginningsDocument = gql`
  query GetBeginnings($cursor: ID) {
    beginnings(cursor: $cursor) {
      items {
        ...commouBeginningFields
      }
      hasMore
    }
  }
  ${CommouBeginningFieldsFragmentDoc}
`;
export type GetBeginningsQueryResult = ApolloReactCommon.QueryResult<
  GetBeginningsQuery,
  GetBeginningsQueryVariables
>;
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
export const OnBeginningAddedDocument = gql`
  subscription onBeginningAdded {
    beginningAdded {
      ...commouBeginningFields
    }
  }
  ${CommouBeginningFieldsFragmentDoc}
`;
export type OnBeginningAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnBeginningAddedSubscription
>;
export const OnBeginningUpdatedDocument = gql`
  subscription onBeginningUpdated {
    beginningUpdated {
      ...commouBeginningFields
    }
  }
  ${CommouBeginningFieldsFragmentDoc}
`;
export type OnBeginningUpdatedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnBeginningUpdatedSubscription
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
export const OnUserUpdatedDocument = gql`
  subscription onUserUpdated {
    userUpdated {
      ...commouUserFields
    }
  }
  ${CommouUserFieldsFragmentDoc}
`;
export type OnUserUpdatedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnUserUpdatedSubscription
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
