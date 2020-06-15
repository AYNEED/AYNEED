import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';
import localForage from 'localforage';

const driver =
  process.env.NODE_ENV === 'test'
    ? [localForage.LOCALSTORAGE]
    : [localForage.INDEXEDDB, localForage.WEBSQL, localForage.LOCALSTORAGE];

localForage.config({
  name: 'ayneed',
  driver,
  version: 2,
  storeName: 'keyvaluepairs',
});

export const cache = new InMemoryCache({});
export const storage = localForage as PersistentStorage<PersistedData<any>>;

export const client = new ApolloClient({
  cache,
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});
