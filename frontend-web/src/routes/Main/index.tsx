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

const styles: Styles<
  'root' | 'title' | 'content' | 'leftContent' | 'network'
> = {
  root: {
    padding: '0 400px',
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
    display: 'flex',
    alignItems: 'flex-start',
  },
  leftContent: {
    height: '100%',
    width: '206px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  network: {
    marginTop: '23px',
  },
};

const Main: React.FC = () => (
  <Page layout="entry">
    <FelaComponent style={styles.root}>
      <FelaComponent style={styles.content}>
        <FelaComponent style={styles.leftContent}>
          <FelaComponent style={styles.title}>
            <Msg id="web.routes.Main.description" />
          </FelaComponent>

          <ButtonLink
            url={{ scheme: ROUTES.FEED }}
            text={{ id: 'web.routes.Main.button_start' }}
            mode="link"
          />
        </FelaComponent>

        <MainPageChain />
      </FelaComponent>

      <MainPageNetworks style={styles.network} />
    </FelaComponent>
  </Page>
);

export default Main;
