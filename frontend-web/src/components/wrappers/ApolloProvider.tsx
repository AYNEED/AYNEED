import React, { useEffect, useState, useCallback } from 'react';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider as Provider } from '@apollo/react-hooks';

import { cache, client, storage } from 'src/utils/graphql';
import { fallback } from 'src/components/wrappers/Router';

export const ApolloProvider: React.FC = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  const fetchCache = useCallback(async () => {
    // await before instantiating ApolloClient, else
    // queries might run before the cache is persisted
    await persistCache({ cache, storage });

    setInitialized(true);
  }, [setInitialized]);

  useEffect(() => {
    fetchCache();
  }, [fetchCache]);

  if (!initialized) {
    return fallback;
  }

  return <Provider client={client}>{children}</Provider>;
};
