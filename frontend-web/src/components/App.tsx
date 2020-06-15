import React from 'react';

import { Router, fallback } from 'src/components/wrappers/Router';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { ApolloProvider } from 'src/components/wrappers/ApolloProvider';

export const App: React.FC = () => (
  <ApolloProvider fallback={fallback}>
    <IntlProvider>
      <Router />
    </IntlProvider>
  </ApolloProvider>
);
