import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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
  userAgreement: Scalars['Boolean'];
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

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export type User = {
  id: Scalars['ID'];
  isOnline: Scalars['Boolean'];
  personal: UserPersonalData;
};

export type UserPersonalData = {
  login: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Maybe<Gender>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users: Array<
    Pick<User, 'id' | 'isOnline'> & {
      personal: Pick<
        UserPersonalData,
        'login' | 'firstName' | 'lastName' | 'gender'
      >;
    }
  >;
};

export type OnUserAddedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnUserAddedSubscription = {
  userAdded: Pick<User, 'id' | 'isOnline'> & {
    personal: Pick<
      UserPersonalData,
      'login' | 'firstName' | 'lastName' | 'gender'
    >;
  };
};

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      isOnline
      personal {
        login
        firstName
        lastName
        gender
      }
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
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
        login
        firstName
        lastName
        gender
      }
    }
  }
`;

/**
 * __useOnUserAddedSubscription__
 *
 * To run a query within a React component, call `useOnUserAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUserAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUserAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUserAddedSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    OnUserAddedSubscription,
    OnUserAddedSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    OnUserAddedSubscription,
    OnUserAddedSubscriptionVariables
  >(OnUserAddedDocument, baseOptions);
}
export type OnUserAddedSubscriptionHookResult = ReturnType<
  typeof useOnUserAddedSubscription
>;
export type OnUserAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  OnUserAddedSubscription
>;
