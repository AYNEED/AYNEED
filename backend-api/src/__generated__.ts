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
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationForgotPasswordChangeArgs = {
  password: Scalars['String'];
  recoveryCode: Scalars['String'];
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
  user: Maybe<User>;
  users: UserFeed;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUsersArgs = {
  cursor: Maybe<Scalars['ID']>;
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

export type User = {
  id: Scalars['ID'];
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
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Subscription: ResolverTypeWrapper<{}>;
  LOCALE: Locale;
  LANGUAGE_LEVEL: LanguageLevel;
  CLIENT: Client;
  User: ResolverTypeWrapper<User>;
  UserNetwotk: ResolverTypeWrapper<UserNetwotk>;
  UserFeed: ResolverTypeWrapper<UserFeed>;
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
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Query: {};
  ID: Scalars['ID'];
  Subscription: {};
  User: User;
  UserNetwotk: UserNetwotk;
  UserFeed: UserFeed;
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
    RequireFields<MutationForgotPasswordChangeArgs, 'password' | 'recoveryCode'>
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
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  user: Resolver<
    Maybe<ResolversTypes['User']>,
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
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
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

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['UserNetwotk'], ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserNetwotkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserNetwotk'] = ResolversParentTypes['UserNetwotk']
> = {
  isOnline: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  client: Resolver<ResolversTypes['CLIENT'], ParentType, ContextType>;
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

export type Resolvers<ContextType = any> = {
  DateTime: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  UserNetwotk: UserNetwotkResolvers<ContextType>;
  UserFeed: UserFeedResolvers<ContextType>;
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
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
