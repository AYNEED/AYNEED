import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { Page } from 'src/components/wrappers/Page';
import { ButtonLink } from 'src/components/ui/forms/Button';
import { Msg } from 'src/i18n/Msg';
import { ROUTES } from 'shared';
import { MainPageNetworks } from 'src/routes/Main/fragments/MainPageNetworks';
import { MainPageChain } from 'src/routes/Main/fragments/MainPageChain';

const Logo = React.lazy(() => import('src/components/ui/Logo'));

const styles: Styles<
  'pageWrapper' | 'title' | 'content' | 'leftContent' | 'network'
> = {
  pageWrapper: {
    width: '100%',
    height: '100%',
    padding: '308px 419px 277px 350px',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    width: '95px',
    color: COLOR.SECONDARY_400,
    lineHeight: '17px',
    fontSize: '14px',
    wordSpacing: '35px',
  },
  content: {
    width: '100%',
    height: '216px',
    marginTop: '60px',
    display: 'flex !important',
    alignItems: 'flex-start',
  },
  leftContent: {
    height: '97%',
    width: '206px',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  network: {
    marginTop: '23px',
  },
};

const Title: React.FC = () => (
  <FelaComponent style={styles.title}>
    <Msg id="web.routes.Main.description" />
  </FelaComponent>
);

const StartButton: React.FC = () => (
  <ButtonLink url={{ scheme: ROUTES.FEED }}>
    <Msg id="web.routes.Main.button_start" />
  </ButtonLink>
);

const LeftContent: React.FC = () => (
  <FelaComponent style={styles.leftContent}>
    <Title />
    <StartButton />
  </FelaComponent>
);

const Content: React.FC = () => (
  <FelaComponent style={styles.content}>
    <LeftContent />
    <MainPageChain />
  </FelaComponent>
);

const Main: React.FC = () => (
  <Page>
    <FelaComponent style={styles.pageWrapper}>
      <Logo />

      <Content />

      <MainPageNetworks style={styles.network} />
    </FelaComponent>
  </Page>
);

export default Main;
