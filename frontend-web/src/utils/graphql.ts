import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';
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
  storeName: 'keyvaluepairs',
});

export const cache = new InMemoryCache({});
export const storage = localForage as PersistentStorage<PersistedData<any>>;

export const client = new ApolloClient({
  cache,
  uri: getAPIUrl(),
});
