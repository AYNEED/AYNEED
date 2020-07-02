import React from 'react';

import { Page } from 'src/components/wrappers/Page';

const Logo = React.lazy(() => import('src/components/ui/Logo'));

const Main: React.FC = () => (
  <Page>
    <Logo />

    <p>Объединяет людей для создания бизнеса</p>
  </Page>
);

export default Main;
