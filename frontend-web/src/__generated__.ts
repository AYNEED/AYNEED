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
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
