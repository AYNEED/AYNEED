import React from 'react';
import { FelaComponent } from 'react-fela';
import { useHistory } from 'react-router-dom';

import { Styles } from 'src/utils/fela';
import { ROUTES } from 'shared';
import { updateHistory } from 'src/navigation';
import { Page } from 'src/components/wrappers/Page';
import { SearchForm } from 'src/components/blocks/SearchForm';
import { Error404 as Error404Icon } from 'src/components/icons/Error404';

const Logo = React.lazy(() => import('src/components/ui/Logo'));

const style: Styles<'logo' | 'notFound' | 'container'> = {
  logo: {
    marginTop: '110px',
  },
  notFound: {
    marginTop: '120px',
  },
  container: {
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const Error404: React.FC = () => {
  const history = useHistory();

  return (
    <Page>
      <FelaComponent style={style.container}>
        <FelaComponent style={style.logo}>
          <Logo />
        </FelaComponent>
        <FelaComponent style={style.notFound}>
          <Error404Icon />
        </FelaComponent>
        <SearchForm
          onSubmit={(values) => updateHistory(history, ROUTES.FEED, values)}
        />
      </FelaComponent>
    </Page>
  );
};

export default Error404;
