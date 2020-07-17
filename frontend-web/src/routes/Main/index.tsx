import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';

import { COLOR } from 'src/constants/colors';

import { ButtonLink } from 'src/components/ui/forms/Button';
import { Msg } from 'src/i18n/Msg';
import { ROUTES } from 'shared';
import { Networks } from 'src/routes/Main/Networks';


const Logo = React.lazy(() => import('src/components/ui/Logo'));

const MainChain = React.lazy(() =>
  import('src/components/blocks/MainChain')
);

const styles: Styles<
  'pageWrapper' | 
  'title' | 
  'content' | 
  'leftContant' |
  'network'
> = {
  pageWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.BACKGROUND_GRAY,
    padding: '308px 419px 277px 350px',
    paddingLeft: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    width: '95px',
    color: COLOR.GRAY,
    lineHeight: '17px',
    fontSize: '14px',
    wordSpacing: '35px',
  },
  content: {
    marginTop: '60px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    height: '216px',
  },
  leftContant: {
    display: 'flex',
    height: '100%',
    width: '206px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  network: {
    marginTop: '23px',
  }
}

const Title: React.FC = () => (
  <FelaComponent style={styles.title}>
    <Msg id="web.routes.Main.description" />
  </FelaComponent>
)

const StartButton: React.FC = () => (
  <ButtonLink url={{ scheme: ROUTES.FEED }}>
    <Msg id="web.routes.Main.button_start" />
  </ButtonLink>
)

const LeftContant: React.FC = () => (
  <FelaComponent style={styles.leftContant}>
    <Title />
    <StartButton />
  </FelaComponent>
)


const Main: React.FC = () => (
  <FelaComponent style={styles.pageWrapper}>
    <Logo />

      <FelaComponent style={styles.content}>
        <LeftContant />
        <MainChain />
      </FelaComponent>

    <Networks style={styles.network}/>
  </FelaComponent>
);

export default Main;
