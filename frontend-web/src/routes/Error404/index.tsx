import React from 'react';
import { FelaComponent } from 'react-fela';
import { useHistory } from 'react-router-dom';

import { Styles } from 'src/utils/fela';
import { ROUTES } from 'shared';
import { updateHistory } from 'src/navigation';
import { Page } from 'src/components/wrappers/Page';
import { SearchForm } from 'src/components/blocks/SearchForm';
import { Error404 as Error404Icon } from 'src/components/icons/old_design/Error404';

const style: Styles<'icon'> = {
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '120px',
    marginBottom: '100px',
  },
};

const Error404: React.FC = () => {
  const history = useHistory();

  return (
    <Page layout="notFound">
      <FelaComponent style={style.icon}>
        <Error404Icon />
      </FelaComponent>
      <SearchForm
        mode="general"
        onSubmit={(values) => updateHistory(history, ROUTES.FEED, values)}
      />
    </Page>
  );
};

export default Error404;
