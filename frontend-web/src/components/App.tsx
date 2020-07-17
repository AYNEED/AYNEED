import React from 'react';
import { RendererProvider } from 'react-fela';
import { createRenderer } from 'fela'

import { Router } from 'src/components/wrappers/Router';
import { IntlProvider } from 'src/i18n/IntlProvider';
import { ApolloProvider } from 'src/components/wrappers/ApolloProvider';

export const App: React.FC = () => {
  const renderer = createRenderer()
  renderer.renderStatic(`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      width: 100%;
      height: 100%;
    }

    #root{
      position: relative;
      width: 100%;
      height: 100%;
    }
  `)

  
  return(
    <ApolloProvider>
      <IntlProvider>
        <RendererProvider renderer={renderer}>
          <Router />
        </RendererProvider>
      </IntlProvider>
    </ApolloProvider>
  )
};
