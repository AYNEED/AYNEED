import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { Router, fallback } from 'src/components/wrappers/Router';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { client } from 'src/utils/graphql';
import { PersistGate } from 'src/components/wrappers/PersistGate';

export const App: React.FC = () => (
  <PersistGate fallback={fallback}>
    <ApolloProvider client={client}>
      <IntlProvider>
        <Router />
      </IntlProvider>
    </ApolloProvider>
  </PersistGate>
);
