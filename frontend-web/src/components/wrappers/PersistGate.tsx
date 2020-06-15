import React, { useEffect, useState, useCallback } from 'react';
import { persistCache } from 'apollo-cache-persist';

import { cache, storage } from 'src/utils/graphql';

type Props = {
  fallback: JSX.Element;
};

export const PersistGate: React.FC<Props> = ({ children, fallback }) => {
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

  return <>{children}</>;
};
