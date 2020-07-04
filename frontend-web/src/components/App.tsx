import React from 'react';

import { RendererProvider } from 'react-fela';

import { renderer } from '../felaConfig';

import { Router } from 'src/components/wrappers/Router';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { ApolloProvider } from 'src/components/wrappers/ApolloProvider';

export const App: React.FC = () => (
  <ApolloProvider>
    <IntlProvider>
      <RendererProvider renderer={renderer}>
        <Router />
      </RendererProvider>
    </IntlProvider>
  </ApolloProvider>
);
