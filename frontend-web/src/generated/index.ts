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

export type Mutation = {
  forgotPassword: Scalars['Boolean'];
  forgotPasswordChange: User;
  signInEmail: User;
  signUpEmail: User;
  signOut: Scalars['Boolean'];
  commentAdd: Comment;
  commentRemove: Scalars['Boolean'];
  likeAdd: Like;
  likeRemove: Scalars['Boolean'];
  messageAdd: Message;
  projectAdd: Project;
  projectRemove: Scalars['Boolean'];
  subscriptionAdd: SubscribedUser;
  subscriptionRemove: Scalars['Boolean'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationForgotPasswordChangeArgs = {
  password: Scalars['String'];
  recoveryCode: Scalars['String'];
  client: UserClient;
};

export type MutationSignInEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  client: UserClient;
};

export type MutationSignUpEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: UserLocale;
  isAgree: Scalars['Boolean'];
  client: UserClient;
};

export type MutationCommentAddArgs = {
  parentId: Maybe<Scalars['ID']>;
  targetId: Scalars['ID'];
  targetModel: CommentTargetModel;
  text: Scalars['String'];
};

export type MutationCommentRemoveArgs = {
  id: Scalars['ID'];
};

export type MutationLikeAddArgs = {
  targetId: Scalars['ID'];
  targetModel: LikeTargetModel;
  status: LikeStatus;
};

export type MutationLikeRemoveArgs = {
  id: Scalars['ID'];
};

export type MutationMessageAddArgs = {
  targetId: Scalars['ID'];
  text: Scalars['String'];
};

export type MutationProjectAddArgs = {
  title: Scalars['String'];
  problem: Scalars['String'];
  solution: Scalars['String'];
};

export type MutationProjectRemoveArgs = {
  id: Scalars['ID'];
};

export type MutationSubscriptionAddArgs = {
  targetId: Scalars['ID'];
  targetModel: SubscriptionTargetModel;
};

export type MutationSubscriptionRemoveArgs = {
  id: Scalars['ID'];
};

export type Query = {
  project: Project;
  projects: ProjectFeed;
  user: User;
  users: UserFeed;
  search: SearchResult;
  messages: MessageFeed;
  help: Help;
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
  targetModel: SearchTargetModel;
  cursor: Maybe<Scalars['ID']>;
};

export type QueryMessagesArgs = {
  cursor: Maybe<Scalars['ID']>;
};

export type QueryHelpArgs = {
  locale: UserLocale;
};

export type Subscription = {
  projectAdded: Project;
  projectUpdated: Project;
  userAdded: User;
  userUpdated: User;
};

export enum CommentTargetModel {
  Project = 'Project',
}

export enum LikeStatus {
  Like = 'like',
  Dislike = 'dislike',
}

export enum LikeTargetModel {
  Comment = 'Comment',
  Project = 'Project',
}

export enum ProjectStatus {
  Idea = 'idea',
  Concept = 'concept',
  Mvp = 'mvp',
}

export enum SearchTargetModel {
  Candidates = 'candidates',
  Users = 'users',
  Ideas = 'ideas',
  Concepts = 'concepts',
  Mvps = 'mvps',
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

export enum UserClient {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

export enum UserRole {
  User = 'user',
  Support = 'support',
}

export type SearchResult = ProjectFeed | UserFeed;

export type MessageFeed = {
  items: Array<Message>;
  hasMore: Scalars['Boolean'];
};

export type ProjectFeed = {
  items: Array<Project>;
  hasMore: Scalars['Boolean'];
};

export type UserFeed = {
  items: Array<User>;
  hasMore: Scalars['Boolean'];
};

export type Help = {
  locale: UserLocale;
  text: Scalars['String'];
  items: Array<HelpItem>;
};

export type Message = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  targetId: Scalars['ID'];
  info: MessageInfoData;
  visible: MessageVisibleData;
  createdAt: Scalars['DateTime'];
  editAt: Maybe<Scalars['DateTime']>;
  deleteAt: Maybe<Scalars['DateTime']>;
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

export type Vacancy = {
  title: Scalars['String'];
  text: Scalars['String'];
  archivedAt: Maybe<Scalars['DateTime']>;
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

export type HelpItem = {
  id: Scalars['ID'];
  icon: Scalars['String'];
  title: Scalars['String'];
  text: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type Like = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  targetId: Scalars['ID'];
  targetModel: LikeTargetModel;
  status: LikeStatus;
  createdAt: Scalars['DateTime'];
};

export type SubscribedUser = {
  id: Scalars['ID'];
  senderId: Scalars['ID'];
  targetId: Scalars['ID'];
  targetModel: SubscriptionTargetModel;
  status: SubscriptionStatus;
  createdAt: Scalars['DateTime'];
};

export type MessageInfoData = {
  text: Scalars['String'];
  isRead: Scalars['Boolean'];
};

export type MessageVisibleData = {
  isVisibleSender: Scalars['Boolean'];
  isVisibleAll: Scalars['Boolean'];
};

export type UserAboutData = {
  bio: Maybe<Scalars['String']>;
  skills: Array<UserSkillRecord>;
  career: Array<UserCareerRecord>;
  education: Array<UserEducationRecord>;
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

export type UserNetwotkData = {
  isOnline: Scalars['Boolean'];
  client: UserClient;
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

export type UserStatisticsData = {
  completeness: Scalars['Int'];
};

export type UserCareerRecord = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type UserContactRecord = {
  value: Scalars['String'];
  isVisible: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
};

export type UserEducationRecord = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type UserLanguageRecord = {
  code: Scalars['String'];
  level: UserLanguageLevel;
};

export type UserSkillRecord = {
  title: Scalars['String'];
  primary: Scalars['Boolean'];
};

export type CommonProjectFieldsFragment = Pick<
  Project,
  'id' | 'title' | 'problem' | 'solution'
>;

export type CommonUserFieldsFragment = Pick<User, 'id'> & {
  network: Pick<UserNetwotkData, 'isOnline' | 'client'>;
  about: { skills: Array<Pick<UserSkillRecord, 'title' | 'primary'>> };
  personal: Pick<UserPersonalData, 'firstName' | 'lastName' | 'photo'>;
};

export type GetProjectsQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetProjectsQuery = {
  projects: Pick<ProjectFeed, 'hasMore'> & {
    items: Array<CommonProjectFieldsFragment>;
  };
};

export type GetUsersQueryVariables = Exact<{
  cursor: Maybe<Scalars['ID']>;
}>;

export type GetUsersQuery = {
  users: Pick<UserFeed, 'hasMore'> & { items: Array<CommonUserFieldsFragment> };
};

export type OnProjectAddedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnProjectAddedSubscription = {
  projectAdded: CommonProjectFieldsFragment;
};

export type OnProjectUpdatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnProjectUpdatedSubscription = {
  projectUpdated: CommonProjectFieldsFragment;
};

export type OnUserAddedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnUserAddedSubscription = { userAdded: CommonUserFieldsFragment };

export type OnUserUpdatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnUserUpdatedSubscription = {
  userUpdated: CommonUserFieldsFragment;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = Pick<Mutation, 'forgotPassword'>;

export type SignInEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  client: UserClient;
}>;

export type SignInEmailMutation = { signInEmail: CommonUserFieldsFragment };

export type SignUpEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: UserLocale;
  isAgree: Scalars['Boolean'];
  client: UserClient;
}>;

export type SignUpEmailMutation = { signUpEmail: CommonUserFieldsFragment };

export const CommonProjectFieldsFragmentDoc = gql`
  fragment commonProjectFields on Project {
    id
    title
    problem
    solution
  }
`;
export const CommonUserFieldsFragmentDoc = gql`
  fragment commonUserFields on User {
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
        ...commonProjectFields
      }
      hasMore
    }
  }
  ${CommonProjectFieldsFragmentDoc}
`;
export type GetProjectsQueryResult = Apollo.QueryResult<
  GetProjectsQuery,
  GetProjectsQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers($cursor: ID) {
    users(cursor: $cursor) {
      items {
        ...commonUserFields
      }
      hasMore
    }
  }
  ${CommonUserFieldsFragmentDoc}
`;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const OnProjectAddedDocument = gql`
  subscription onProjectAdded {
    projectAdded {
      ...commonProjectFields
    }
  }
  ${CommonProjectFieldsFragmentDoc}
`;
export type OnProjectAddedSubscriptionResult = Apollo.SubscriptionResult<
  OnProjectAddedSubscription
>;
export const OnProjectUpdatedDocument = gql`
  subscription onProjectUpdated {
    projectUpdated {
      ...commonProjectFields
    }
  }
  ${CommonProjectFieldsFragmentDoc}
`;
export type OnProjectUpdatedSubscriptionResult = Apollo.SubscriptionResult<
  OnProjectUpdatedSubscription
>;
export const OnUserAddedDocument = gql`
  subscription onUserAdded {
    userAdded {
      ...commonUserFields
    }
  }
  ${CommonUserFieldsFragmentDoc}
`;
export type OnUserAddedSubscriptionResult = Apollo.SubscriptionResult<
  OnUserAddedSubscription
>;
export const OnUserUpdatedDocument = gql`
  subscription onUserUpdated {
    userUpdated {
      ...commonUserFields
    }
  }
  ${CommonUserFieldsFragmentDoc}
`;
export type OnUserUpdatedSubscriptionResult = Apollo.SubscriptionResult<
  OnUserUpdatedSubscription
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<
  ForgotPasswordMutation
>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const SignInEmailDocument = gql`
  mutation SignInEmail(
    $email: String!
    $password: String!
    $client: USER_CLIENT!
  ) {
    signInEmail(email: $email, password: $password, client: $client) {
      ...commonUserFields
    }
  }
  ${CommonUserFieldsFragmentDoc}
`;
export type SignInEmailMutationFn = Apollo.MutationFunction<
  SignInEmailMutation,
  SignInEmailMutationVariables
>;
export type SignInEmailMutationResult = Apollo.MutationResult<
  SignInEmailMutation
>;
export type SignInEmailMutationOptions = Apollo.BaseMutationOptions<
  SignInEmailMutation,
  SignInEmailMutationVariables
>;
export const SignUpEmailDocument = gql`
  mutation SignUpEmail(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $locale: USER_LOCALE!
    $isAgree: Boolean!
    $client: USER_CLIENT!
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
      ...commonUserFields
    }
  }
  ${CommonUserFieldsFragmentDoc}
`;
export type SignUpEmailMutationFn = Apollo.MutationFunction<
  SignUpEmailMutation,
  SignUpEmailMutationVariables
>;
export type SignUpEmailMutationResult = Apollo.MutationResult<
  SignUpEmailMutation
>;
export type SignUpEmailMutationOptions = Apollo.BaseMutationOptions<
  SignUpEmailMutation,
  SignUpEmailMutationVariables
>;
