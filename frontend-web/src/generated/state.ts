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
};

export type Query = {
  isLoggedIn: Scalars['Boolean'];
  token: Maybe<Scalars['String']>;
};

export type GetIsLoggedInQueryVariables = Exact<{ [key: string]: never }>;

export type GetIsLoggedInQuery = Pick<Query, 'isLoggedIn'>;

export const GetIsLoggedInDocument = gql`
  query GetIsLoggedIn {
    isLoggedIn @client
  }
`;
export type GetIsLoggedInQueryResult = Apollo.QueryResult<
  GetIsLoggedInQuery,
  GetIsLoggedInQueryVariables
>;
