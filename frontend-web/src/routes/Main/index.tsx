import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
// import { useFela } from 'react-fela'

import { COLOR } from 'src/constants/colors';

import { ButtonLink } from 'src/components/ui/forms/Button';
import { Msg } from 'src/i18n/Msg';
import { ROUTES } from 'shared';
import { Ball } from 'src/routes/Main/Ball';
import { Networks } from 'src/routes/Main/Networks';
import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';

const Logo = React.lazy(() => import('src/components/ui/Logo'));


const styles: Styles<'pageWrapper' | 'title' | 'content'> = {
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
    marginTop: '42px',
  },
  content: {
    position: 'relative',
    marginTop: '60px',
    display: 'flex',
    alignItems: 'flex-start',
  }
}

const Main: React.FC = () => (
  <FelaComponent style={styles.pageWrapper}>
    <Logo />
    <p>
      <Msg id="web.routes.Main.description" />
    </p>

      <FelaComponent style={styles.title}>Объединяет людей для создания бизнеса</FelaComponent>

      <FelaComponent style={styles.content}>
        <ButtonLink url={{ scheme: ROUTES.FEED }}>
          <Msg id="web.routes.Main.button_start" />
        </ButtonLink>

        <Ball id="web.routes.Main.ball_idea">
          <Idea />
        </Ball>

        <Ball id="web.routes.Main.ball_command">
          <Command />
        </Ball>

        <Ball id="web.routes.Main.ball_investments">
          <Investments />
        </Ball>
        <Rocket />
      </FelaComponent>
    <Networks />
  </FelaComponent>
);

export default Main;
