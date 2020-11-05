import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { IApolloContext } from './../types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  COMMENT_TARGET_MODEL: CommentTargetModel;
  LIKE_STATUS: LikeStatus;
  LIKE_TARGET_MODEL: LikeTargetModel;
  PROJECT_STATUS: ProjectStatus;
  SEARCH_TARGET_MODEL: SearchTargetModel;
  SUBSCRIPTION_STATUS: SubscriptionStatus;
  SUBSCRIPTION_TARGET_MODEL: SubscriptionTargetModel;
  USER_LOCALE: UserLocale;
  USER_LANGUAGE_LEVEL: UserLanguageLevel;
  USER_CLIENT: UserClient;
  USER_ROLE: UserRole;
  SearchResult: ResolversTypes['ProjectFeed'] | ResolversTypes['UserFeed'];
  MessageFeed: ResolverTypeWrapper<MessageFeed>;
  ProjectFeed: ResolverTypeWrapper<ProjectFeed>;
  UserFeed: ResolverTypeWrapper<UserFeed>;
  Help: ResolverTypeWrapper<Help>;
  Message: ResolverTypeWrapper<Message>;
  Project: ResolverTypeWrapper<Project>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  User: ResolverTypeWrapper<User>;
  Vacancy: ResolverTypeWrapper<Vacancy>;
  Comment: ResolverTypeWrapper<Comment>;
  HelpItem: ResolverTypeWrapper<HelpItem>;
  Like: ResolverTypeWrapper<Like>;
  SubscribedUser: ResolverTypeWrapper<SubscribedUser>;
  MessageInfoData: ResolverTypeWrapper<MessageInfoData>;
  MessageVisibleData: ResolverTypeWrapper<MessageVisibleData>;
  UserAboutData: ResolverTypeWrapper<UserAboutData>;
  UserContactsData: ResolverTypeWrapper<UserContactsData>;
  UserNetwotkData: ResolverTypeWrapper<UserNetwotkData>;
  UserPersonalData: ResolverTypeWrapper<UserPersonalData>;
  UserRegionalData: ResolverTypeWrapper<UserRegionalData>;
  UserStatisticsData: ResolverTypeWrapper<UserStatisticsData>;
  UserCareerRecord: ResolverTypeWrapper<UserCareerRecord>;
  UserContactRecord: ResolverTypeWrapper<UserContactRecord>;
  UserEducationRecord: ResolverTypeWrapper<UserEducationRecord>;
  UserLanguageRecord: ResolverTypeWrapper<UserLanguageRecord>;
  UserSkillRecord: ResolverTypeWrapper<UserSkillRecord>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  ID: Scalars['ID'];
  Query: {};
  Subscription: {};
  SearchResult:
    | ResolversParentTypes['ProjectFeed']
    | ResolversParentTypes['UserFeed'];
  MessageFeed: MessageFeed;
  ProjectFeed: ProjectFeed;
  UserFeed: UserFeed;
  Help: Help;
  Message: Message;
  Project: Project;
  Int: Scalars['Int'];
  User: User;
  Vacancy: Vacancy;
  Comment: Comment;
  HelpItem: HelpItem;
  Like: Like;
  SubscribedUser: SubscribedUser;
  MessageInfoData: MessageInfoData;
  MessageVisibleData: MessageVisibleData;
  UserAboutData: UserAboutData;
  UserContactsData: UserContactsData;
  UserNetwotkData: UserNetwotkData;
  UserPersonalData: UserPersonalData;
  UserRegionalData: UserRegionalData;
  UserStatisticsData: UserStatisticsData;
  UserCareerRecord: UserCareerRecord;
  UserContactRecord: UserContactRecord;
  UserEducationRecord: UserEducationRecord;
  UserLanguageRecord: UserLanguageRecord;
  UserSkillRecord: UserSkillRecord;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  forgotPassword: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, 'email'>
  >;
  forgotPasswordChange: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      MutationForgotPasswordChangeArgs,
      'password' | 'recoveryCode' | 'client'
    >
  >;
  signInEmail: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInEmailArgs, 'email' | 'password' | 'client'>
  >;
  signUpEmail: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      MutationSignUpEmailArgs,
      | 'email'
      | 'password'
      | 'firstName'
      | 'lastName'
      | 'locale'
      | 'isAgree'
      | 'client'
    >
  >;
  signOut: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  commentAdd: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentAddArgs, 'targetId' | 'targetModel' | 'text'>
  >;
  commentRemove: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentRemoveArgs, 'id'>
  >;
  likeAdd: Resolver<
    ResolversTypes['Like'],
    ParentType,
    ContextType,
    RequireFields<MutationLikeAddArgs, 'targetId' | 'targetModel' | 'status'>
  >;
  likeRemove: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationLikeRemoveArgs, 'id'>
  >;
  messageAdd: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<MutationMessageAddArgs, 'targetId' | 'text'>
  >;
  projectAdd: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<MutationProjectAddArgs, 'title' | 'problem' | 'solution'>
  >;
  projectRemove: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationProjectRemoveArgs, 'id'>
  >;
  subscriptionAdd: Resolver<
    ResolversTypes['SubscribedUser'],
    ParentType,
    ContextType,
    RequireFields<MutationSubscriptionAddArgs, 'targetId' | 'targetModel'>
  >;
  subscriptionRemove: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationSubscriptionRemoveArgs, 'id'>
  >;
};

export type QueryResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  project: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<QueryProjectArgs, 'id'>
  >;
  projects: Resolver<
    ResolversTypes['ProjectFeed'],
    ParentType,
    ContextType,
    RequireFields<QueryProjectsArgs, never>
  >;
  user: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >;
  users: Resolver<
    ResolversTypes['UserFeed'],
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, never>
  >;
  search: Resolver<
    ResolversTypes['SearchResult'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchArgs, 'query' | 'targetModel'>
  >;
  messages: Resolver<
    ResolversTypes['MessageFeed'],
    ParentType,
    ContextType,
    RequireFields<QueryMessagesArgs, never>
  >;
  help: Resolver<
    ResolversTypes['Help'],
    ParentType,
    ContextType,
    RequireFields<QueryHelpArgs, 'locale'>
  >;
};

export type SubscriptionResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  projectAdded: SubscriptionResolver<
    ResolversTypes['Project'],
    'projectAdded',
    ParentType,
    ContextType
  >;
  projectUpdated: SubscriptionResolver<
    ResolversTypes['Project'],
    'projectUpdated',
    ParentType,
    ContextType
  >;
  userAdded: SubscriptionResolver<
    ResolversTypes['User'],
    'userAdded',
    ParentType,
    ContextType
  >;
  userUpdated: SubscriptionResolver<
    ResolversTypes['User'],
    'userUpdated',
    ParentType,
    ContextType
  >;
};

export type SearchResultResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']
> = {
  __resolveType: TypeResolveFn<
    'ProjectFeed' | 'UserFeed',
    ParentType,
    ContextType
  >;
};

export type MessageFeedResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['MessageFeed'] = ResolversParentTypes['MessageFeed']
> = {
  items: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProjectFeedResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['ProjectFeed'] = ResolversParentTypes['ProjectFeed']
> = {
  items: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserFeedResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserFeed'] = ResolversParentTypes['UserFeed']
> = {
  items: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type HelpResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Help'] = ResolversParentTypes['Help']
> = {
  locale: Resolver<ResolversTypes['USER_LOCALE'], ParentType, ContextType>;
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items: Resolver<Array<ResolversTypes['HelpItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info: Resolver<ResolversTypes['MessageInfoData'], ParentType, ContextType>;
  visible: Resolver<
    ResolversTypes['MessageVisibleData'],
    ParentType,
    ContextType
  >;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  editAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deleteAt: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProjectResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  problem: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solution: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likesCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['PROJECT_STATUS'], ParentType, ContextType>;
  vacancies: Resolver<
    Array<ResolversTypes['Vacancy']>,
    ParentType,
    ContextType
  >;
  subscribers: Resolver<
    Array<ResolversTypes['SubscribedUser']>,
    ParentType,
    ContextType
  >;
  comments: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  commentsCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  archivedAt: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role: Resolver<ResolversTypes['USER_ROLE'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['UserNetwotkData'], ParentType, ContextType>;
  about: Resolver<ResolversTypes['UserAboutData'], ParentType, ContextType>;
  personal: Resolver<
    ResolversTypes['UserPersonalData'],
    ParentType,
    ContextType
  >;
  regional: Resolver<
    ResolversTypes['UserRegionalData'],
    ParentType,
    ContextType
  >;
  contacts: Resolver<
    ResolversTypes['UserContactsData'],
    ParentType,
    ContextType
  >;
  statistics: Resolver<
    ResolversTypes['UserStatisticsData'],
    ParentType,
    ContextType
  >;
  projects: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  subscriptions: Resolver<
    Array<ResolversTypes['SubscribedUser']>,
    ParentType,
    ContextType
  >;
  subscribers: Resolver<
    Array<ResolversTypes['SubscribedUser']>,
    ParentType,
    ContextType
  >;
  friends: Resolver<
    Array<ResolversTypes['SubscribedUser']>,
    ParentType,
    ContextType
  >;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type VacancyResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Vacancy'] = ResolversParentTypes['Vacancy']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  archivedAt: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CommentResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentId: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetModel: Resolver<
    ResolversTypes['COMMENT_TARGET_MODEL'],
    ParentType,
    ContextType
  >;
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likesCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dislikesCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  commentsCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type HelpItemResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['HelpItem'] = ResolversParentTypes['HelpItem']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  icon: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LikeResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetModel: Resolver<
    ResolversTypes['LIKE_TARGET_MODEL'],
    ParentType,
    ContextType
  >;
  status: Resolver<ResolversTypes['LIKE_STATUS'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SubscribedUserResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['SubscribedUser'] = ResolversParentTypes['SubscribedUser']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetModel: Resolver<
    ResolversTypes['SUBSCRIPTION_TARGET_MODEL'],
    ParentType,
    ContextType
  >;
  status: Resolver<
    ResolversTypes['SUBSCRIPTION_STATUS'],
    ParentType,
    ContextType
  >;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageInfoDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['MessageInfoData'] = ResolversParentTypes['MessageInfoData']
> = {
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRead: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageVisibleDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['MessageVisibleData'] = ResolversParentTypes['MessageVisibleData']
> = {
  isVisibleSender: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVisibleAll: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserAboutDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserAboutData'] = ResolversParentTypes['UserAboutData']
> = {
  bio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills: Resolver<
    Array<ResolversTypes['UserSkillRecord']>,
    ParentType,
    ContextType
  >;
  career: Resolver<
    Array<ResolversTypes['UserCareerRecord']>,
    ParentType,
    ContextType
  >;
  education: Resolver<
    Array<ResolversTypes['UserEducationRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserContactsDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserContactsData'] = ResolversParentTypes['UserContactsData']
> = {
  email: Resolver<ResolversTypes['UserContactRecord'], ParentType, ContextType>;
  phone: Resolver<
    Maybe<ResolversTypes['UserContactRecord']>,
    ParentType,
    ContextType
  >;
  vkontakte: Resolver<
    Maybe<ResolversTypes['UserContactRecord']>,
    ParentType,
    ContextType
  >;
  facebook: Resolver<
    Maybe<ResolversTypes['UserContactRecord']>,
    ParentType,
    ContextType
  >;
  instagram: Resolver<
    Maybe<ResolversTypes['UserContactRecord']>,
    ParentType,
    ContextType
  >;
  telegram: Resolver<
    Maybe<ResolversTypes['UserContactRecord']>,
    ParentType,
    ContextType
  >;
  linkedin: Resolver<
    Maybe<ResolversTypes['UserContactRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserNetwotkDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserNetwotkData'] = ResolversParentTypes['UserNetwotkData']
> = {
  isOnline: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  client: Resolver<ResolversTypes['USER_CLIENT'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserPersonalDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserPersonalData'] = ResolversParentTypes['UserPersonalData']
> = {
  firstName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAgree: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  bornAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  photo: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserRegionalDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserRegionalData'] = ResolversParentTypes['UserRegionalData']
> = {
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['USER_LOCALE'], ParentType, ContextType>;
  languages: Resolver<
    Array<ResolversTypes['UserLanguageRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatisticsDataResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserStatisticsData'] = ResolversParentTypes['UserStatisticsData']
> = {
  completeness: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserCareerRecordResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserCareerRecord'] = ResolversParentTypes['UserCareerRecord']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserContactRecordResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserContactRecord'] = ResolversParentTypes['UserContactRecord']
> = {
  value: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isVisible: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserEducationRecordResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserEducationRecord'] = ResolversParentTypes['UserEducationRecord']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserLanguageRecordResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserLanguageRecord'] = ResolversParentTypes['UserLanguageRecord']
> = {
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level: Resolver<
    ResolversTypes['USER_LANGUAGE_LEVEL'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserSkillRecordResolvers<
  ContextType = IApolloContext,
  ParentType extends ResolversParentTypes['UserSkillRecord'] = ResolversParentTypes['UserSkillRecord']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primary: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = IApolloContext> = {
  DateTime: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  SearchResult: SearchResultResolvers<ContextType>;
  MessageFeed: MessageFeedResolvers<ContextType>;
  ProjectFeed: ProjectFeedResolvers<ContextType>;
  UserFeed: UserFeedResolvers<ContextType>;
  Help: HelpResolvers<ContextType>;
  Message: MessageResolvers<ContextType>;
  Project: ProjectResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  Vacancy: VacancyResolvers<ContextType>;
  Comment: CommentResolvers<ContextType>;
  HelpItem: HelpItemResolvers<ContextType>;
  Like: LikeResolvers<ContextType>;
  SubscribedUser: SubscribedUserResolvers<ContextType>;
  MessageInfoData: MessageInfoDataResolvers<ContextType>;
  MessageVisibleData: MessageVisibleDataResolvers<ContextType>;
  UserAboutData: UserAboutDataResolvers<ContextType>;
  UserContactsData: UserContactsDataResolvers<ContextType>;
  UserNetwotkData: UserNetwotkDataResolvers<ContextType>;
  UserPersonalData: UserPersonalDataResolvers<ContextType>;
  UserRegionalData: UserRegionalDataResolvers<ContextType>;
  UserStatisticsData: UserStatisticsDataResolvers<ContextType>;
  UserCareerRecord: UserCareerRecordResolvers<ContextType>;
  UserContactRecord: UserContactRecordResolvers<ContextType>;
  UserEducationRecord: UserEducationRecordResolvers<ContextType>;
  UserLanguageRecord: UserLanguageRecordResolvers<ContextType>;
  UserSkillRecord: UserSkillRecordResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IApolloContext> = Resolvers<ContextType>;
