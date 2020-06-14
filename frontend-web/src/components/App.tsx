import React from 'react';

import { Router } from 'src/components/wrappers/Router';
import { IntlProvider } from 'src/i18n/IntlProvider';

export const App: React.FC = () => (
  <IntlProvider>
    <Router />
  </IntlProvider>
);
