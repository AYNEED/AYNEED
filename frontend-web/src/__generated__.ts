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
  addProject: Project;
  addSubscriptionUser: SubscriptionUser;
  addMessage: Message;
  addLike: Like;
  addSubscriptionProject: SubscriptionProject;
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

export type MutationAddProjectArgs = {
  authorId: Scalars['ID'];
  title: Scalars['String'];
  problem: Scalars['String'];
  solution: Scalars['String'];
};

export type MutationAddSubscriptionUserArgs = {
  senderId: Scalars['ID'];
  recipientId: Scalars['ID'];
  status: StatusStatement;
};

export type MutationAddMessageArgs = {
  authorId: Scalars['ID'];
  recipientId: Scalars['ID'];
  text: Scalars['String'];
};

export type MutationAddLikeArgs = {
  owner: Scalars['ID'];
  targetId: Scalars['ID'];
  targetType: LikeTargetType;
  statement: LikeStatement;
};

export type MutationAddSubscriptionProjectArgs = {
  owner: Scalars['ID'];
  targetId: Scalars['ID'];
  status: ProjectStatement;
};

export type Query = {
  project: Project;
  projects: ProjectFeed;
  user: User;
  users: UserFeed;
  search: UserFeed;
  messages: MessageFeed;
  like: Like;
};

export type QueryProjectArgs = {
  id: Scalars['ID'];
};

export type QueryProjectsArgs = {
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

export type QueryLikeArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  projectAdded: Project;
  projectUpdated: Project;
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

export enum LikeTargetType {
  User = 'user',
  Comment = 'comment',
  Project = 'project',
}

export enum LikeStatement {
  Like = 'like',
  Dislike = 'dislike',
}

export enum ProjectStatement {
  Beginning = 'beginning',
  Concept = 'concept',
  Project = 'project',
  Idea = 'idea',
  Mvp = 'mvp',
}

export type Like = {
  id: Scalars['ID'];
  owner: Scalars['ID'];
  targetId: Scalars['ID'];
  targetType: LikeTargetType;
  statement: LikeStatement;
  createdAt: Scalars['DateTime'];
};

export type ProjectFeed = {
  items: Array<Project>;
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

export type Project = {
  id: Scalars['ID'];
  authorId: Scalars['ID'];
  title: Scalars['String'];
  problem: Scalars['String'];
  solution: Scalars['String'];
  createdAt: Scalars['DateTime'];
  subscriptions: Array<SubscriptionProject>;
};

export type SubscriptionProject = {
  id: Scalars['ID'];
  owner: Scalars['ID'];
  targetId: Scalars['ID'];
  status: ProjectStatement;
  createdAt: Scalars['DateTime'];
};

export type SubscriptionUser = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  recipientId: Scalars['ID'];
  status: StatusStatement;
  createdAt: Scalars['DateTime'];
};

export type SubscriberUser = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  recipientId: Scalars['ID'];
  status: StatusStatement;
  createdAt: Scalars['DateTime'];
};

export type FriendUser = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  recipientId: Scalars['ID'];
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
  projects: Array<Project>;
  subscriptions: Array<SubscriptionUser>;
  subscribers: Array<SubscriberUser>;
  friends: Array<FriendUser>;
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

export type CommouProjectFieldsFragment = Pick<
  Project,
  'id' | 'title' | 'problem' | 'solution'
>;

export type CommouUserFieldsFragment = Pick<User, 'id'> & {
  network: Pick<UserNetwotkData, 'isOnline' | 'client'>;
  about: { skills: Array<Pick<UserSkillRecord, 'title' | 'primary'>> };
  personal: Pick<UserPersonalData, 'firstName' | 'lastName' | 'photo'>;
};

export type GetProjectsQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetProjectsQuery = {
  projects: Pick<ProjectFeed, 'hasMore'> & {
    items: Array<CommouProjectFieldsFragment>;
  };
};

export type GetUsersQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetUsersQuery = {
  users: Pick<UserFeed, 'hasMore'> & { items: Array<CommouUserFieldsFragment> };
};

export type OnProjectAddedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnProjectAddedSubscription = {
  projectAdded: CommouProjectFieldsFragment;
};

export type OnProjectUpdatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnProjectUpdatedSubscription = {
  projectUpdated: CommouProjectFieldsFragment;
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

export const CommouProjectFieldsFragmentDoc = gql`
  fragment commouProjectFields on Project {
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
export const GetProjectsDocument = gql`
  query GetProjects($cursor: ID) {
    projects(cursor: $cursor) {
      items {
        ...commouProjectFields
      }
      hasMore
    }
  }
  ${CommouProjectFieldsFragmentDoc}
`;
export type GetProjectsQueryResult = ApolloReactCommon.QueryResult<
  GetProjectsQuery,
  GetProjectsQueryVariables
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
export const OnProjectAddedDocument = gql`
  subscription onProjectAdded {
    projectAdded {
      ...commouProjectFields
    }
  }
  ${CommouProjectFieldsFragmentDoc}
`;
export type OnProjectAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnProjectAddedSubscription
>;
export const OnProjectUpdatedDocument = gql`
  subscription onProjectUpdated {
    projectUpdated {
      ...commouProjectFields
    }
  }
  ${CommouProjectFieldsFragmentDoc}
`;
export type OnProjectUpdatedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnProjectUpdatedSubscription
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
