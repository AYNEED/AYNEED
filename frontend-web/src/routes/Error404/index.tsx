import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'shared';
import { updateHistory } from 'src/navigation';
import { Page } from 'src/components/wrappers/Page';
import { SearchForm } from 'src/components/blocks/SearchForm';

const Logo = React.lazy(() => import('src/components/ui/Logo'));

const Error404: React.FC = () => {
  const history = useHistory();

  return (
    <Page>
      <Logo />

      <h1>404</h1>

      <SearchForm
        onSubmit={(values) => updateHistory(history, ROUTES.FEED, values)}
      />
    </Page>
  );
};

export default Error404;
