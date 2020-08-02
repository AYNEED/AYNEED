import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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
  addBeginning: Beginning;
  addSubscriptionUser: SubscriptionUser;
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

export type MutationAddSubscriptionUserArgs = {
  senderId: Scalars['ID'];
  recipientId: Scalars['ID'];
  status: StatusStatement;
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
  LOCALE: Locale;
  STATUS_STATEMENT: StatusStatement;
  LANGUAGE_LEVEL: LanguageLevel;
  CLIENT: Client;
  SEARCH_MODE: SearchMode;
  ROLE: Role;
  BeginningFeed: ResolverTypeWrapper<BeginningFeed>;
  UserFeed: ResolverTypeWrapper<UserFeed>;
  MessageFeed: ResolverTypeWrapper<MessageFeed>;
  Beginning: ResolverTypeWrapper<Beginning>;
  SubscriptionUser: ResolverTypeWrapper<SubscriptionUser>;
  User: ResolverTypeWrapper<User>;
  Message: ResolverTypeWrapper<Message>;
  UserNetwotkData: ResolverTypeWrapper<UserNetwotkData>;
  UserAboutData: ResolverTypeWrapper<UserAboutData>;
  UserPersonalData: ResolverTypeWrapper<UserPersonalData>;
  UserRegionalData: ResolverTypeWrapper<UserRegionalData>;
  UserContactsData: ResolverTypeWrapper<UserContactsData>;
  UserStatisticsData: ResolverTypeWrapper<UserStatisticsData>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  UserSkillRecord: ResolverTypeWrapper<UserSkillRecord>;
  UserCareerRecord: ResolverTypeWrapper<UserCareerRecord>;
  UserEducationRecord: ResolverTypeWrapper<UserEducationRecord>;
  UserLanguageRecord: ResolverTypeWrapper<UserLanguageRecord>;
  UserContactRecord: ResolverTypeWrapper<UserContactRecord>;
  MessageInfoData: ResolverTypeWrapper<MessageInfoData>;
  MessageUsersData: ResolverTypeWrapper<MessageUsersData>;
  MessageVisibleData: ResolverTypeWrapper<MessageVisibleData>;
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
  BeginningFeed: BeginningFeed;
  UserFeed: UserFeed;
  MessageFeed: MessageFeed;
  Beginning: Beginning;
  SubscriptionUser: SubscriptionUser;
  User: User;
  Message: Message;
  UserNetwotkData: UserNetwotkData;
  UserAboutData: UserAboutData;
  UserPersonalData: UserPersonalData;
  UserRegionalData: UserRegionalData;
  UserContactsData: UserContactsData;
  UserStatisticsData: UserStatisticsData;
  Int: Scalars['Int'];
  UserSkillRecord: UserSkillRecord;
  UserCareerRecord: UserCareerRecord;
  UserEducationRecord: UserEducationRecord;
  UserLanguageRecord: UserLanguageRecord;
  UserContactRecord: UserContactRecord;
  MessageInfoData: MessageInfoData;
  MessageUsersData: MessageUsersData;
  MessageVisibleData: MessageVisibleData;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<
  ContextType = any,
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
  addBeginning: Resolver<
    ResolversTypes['Beginning'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddBeginningArgs,
      'authorId' | 'title' | 'problem' | 'solution'
    >
  >;
  addSubscriptionUser: Resolver<
    ResolversTypes['SubscriptionUser'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddSubscriptionUserArgs,
      'senderId' | 'recipientId' | 'status'
    >
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  beginning: Resolver<
    ResolversTypes['Beginning'],
    ParentType,
    ContextType,
    RequireFields<QueryBeginningArgs, 'id'>
  >;
  beginnings: Resolver<
    ResolversTypes['BeginningFeed'],
    ParentType,
    ContextType,
    RequireFields<QueryBeginningsArgs, never>
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
    ResolversTypes['UserFeed'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchArgs, 'query' | 'mode'>
  >;
  messages: Resolver<
    ResolversTypes['MessageFeed'],
    ParentType,
    ContextType,
    RequireFields<QueryMessagesArgs, 'cursor'>
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  beginningAdded: SubscriptionResolver<
    ResolversTypes['Beginning'],
    'beginningAdded',
    ParentType,
    ContextType
  >;
  beginningUpdated: SubscriptionResolver<
    ResolversTypes['Beginning'],
    'beginningUpdated',
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

export type BeginningFeedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BeginningFeed'] = ResolversParentTypes['BeginningFeed']
> = {
  items: Resolver<Array<ResolversTypes['Beginning']>, ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserFeedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserFeed'] = ResolversParentTypes['UserFeed']
> = {
  items: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageFeedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageFeed'] = ResolversParentTypes['MessageFeed']
> = {
  items: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type BeginningResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Beginning'] = ResolversParentTypes['Beginning']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authorId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  problem: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solution: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SubscriptionUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubscriptionUser'] = ResolversParentTypes['SubscriptionUser']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['STATUS_STATEMENT'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role: Resolver<ResolversTypes['ROLE'], ParentType, ContextType>;
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
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  beginnings: Resolver<
    Array<ResolversTypes['Beginning']>,
    ParentType,
    ContextType
  >;
  subscriptions: Resolver<
    Array<ResolversTypes['SubscriptionUser']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']
> = {
  info: Resolver<ResolversTypes['MessageInfoData'], ParentType, ContextType>;
  users: Resolver<ResolversTypes['MessageUsersData'], ParentType, ContextType>;
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

export type UserNetwotkDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserNetwotkData'] = ResolversParentTypes['UserNetwotkData']
> = {
  isOnline: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  client: Resolver<ResolversTypes['CLIENT'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserAboutDataResolvers<
  ContextType = any,
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

export type UserPersonalDataResolvers<
  ContextType = any,
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
  ContextType = any,
  ParentType extends ResolversParentTypes['UserRegionalData'] = ResolversParentTypes['UserRegionalData']
> = {
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['LOCALE'], ParentType, ContextType>;
  languages: Resolver<
    Array<ResolversTypes['UserLanguageRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserContactsDataResolvers<
  ContextType = any,
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

export type UserStatisticsDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStatisticsData'] = ResolversParentTypes['UserStatisticsData']
> = {
  completeness: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserSkillRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserSkillRecord'] = ResolversParentTypes['UserSkillRecord']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primary: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserCareerRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserCareerRecord'] = ResolversParentTypes['UserCareerRecord']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserEducationRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserEducationRecord'] = ResolversParentTypes['UserEducationRecord']
> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserLanguageRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserLanguageRecord'] = ResolversParentTypes['UserLanguageRecord']
> = {
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level: Resolver<ResolversTypes['LANGUAGE_LEVEL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserContactRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserContactRecord'] = ResolversParentTypes['UserContactRecord']
> = {
  value: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isVisible: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageInfoDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageInfoData'] = ResolversParentTypes['MessageInfoData']
> = {
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRead: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageUsersDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageUsersData'] = ResolversParentTypes['MessageUsersData']
> = {
  authorId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageVisibleDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageVisibleData'] = ResolversParentTypes['MessageVisibleData']
> = {
  isVisibleAuthor: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVisibleAll: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  DateTime: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  BeginningFeed: BeginningFeedResolvers<ContextType>;
  UserFeed: UserFeedResolvers<ContextType>;
  MessageFeed: MessageFeedResolvers<ContextType>;
  Beginning: BeginningResolvers<ContextType>;
  SubscriptionUser: SubscriptionUserResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  Message: MessageResolvers<ContextType>;
  UserNetwotkData: UserNetwotkDataResolvers<ContextType>;
  UserAboutData: UserAboutDataResolvers<ContextType>;
  UserPersonalData: UserPersonalDataResolvers<ContextType>;
  UserRegionalData: UserRegionalDataResolvers<ContextType>;
  UserContactsData: UserContactsDataResolvers<ContextType>;
  UserStatisticsData: UserStatisticsDataResolvers<ContextType>;
  UserSkillRecord: UserSkillRecordResolvers<ContextType>;
  UserCareerRecord: UserCareerRecordResolvers<ContextType>;
  UserEducationRecord: UserEducationRecordResolvers<ContextType>;
  UserLanguageRecord: UserLanguageRecordResolvers<ContextType>;
  UserContactRecord: UserContactRecordResolvers<ContextType>;
  MessageInfoData: MessageInfoDataResolvers<ContextType>;
  MessageUsersData: MessageUsersDataResolvers<ContextType>;
  MessageVisibleData: MessageVisibleDataResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
