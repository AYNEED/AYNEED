import { ApolloClient, DefaultOptions, split, HttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import localForage from 'localforage';

import { getAPIUrl } from 'src/utils/lib';

const driver = [
  localForage.INDEXEDDB,
  localForage.WEBSQL,
  localForage.LOCALSTORAGE,
];
const driverTests = [localForage.LOCALSTORAGE];

localForage.config({
  name: 'ayneed',
  driver: process.env.NODE_ENV === 'test' ? driverTests : driver,
  version: 2,
  storeName: process.env.REACT_APP_VERSION,
});

export const cache = new InMemoryCache({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storage = localForage as PersistentStorage<PersistedData<any>>;

const httpLink = new HttpLink({
  uri: getAPIUrl('http'),
  credentials: 'include',
});

const wsLink = new WebSocketLink({
  uri: getAPIUrl('ws'),
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
  },
};

export const client = new ApolloClient({
  cache,
  link,
  defaultOptions,
});
