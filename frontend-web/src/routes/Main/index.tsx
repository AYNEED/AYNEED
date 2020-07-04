import React from 'react';
import { connect, FelaWithStylesProps, Rules } from 'react-fela';

import { Page } from 'src/components/wrappers/Page';
import { ButtonLink } from 'src/components/ui/forms/Button';
import { Msg } from 'src/i18n/Msg';
import { ROUTES } from 'shared';
import { Ball } from 'src/routes/Main/Ball';
import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';

interface IStyles {
  container: any;
  greetingRow: any;
}

const Logo = React.lazy(() => import('src/components/ui/Logo'));

type PropsType = FelaWithStylesProps<null, IStyles, null>;

const Main: React.FC<PropsType> = (props) => {
  const { styles } = props;

  return (
    <div>
      <Page>
        <Logo />

        <p>Объединяет людей для создания бизнеса</p>

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
      </Page>
      <div className={styles.container}>
        <div className={styles.greetingRow}>Hola :)</div>
      </div>
    </div>
  );
};

const complexMainStyle: Rules<null, IStyles, null> = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: '18px',
    minHeight: '500px',
  },
  greetingRow: {
    fontSize: '6rem',
    textAlign: 'center',
    padding: '2rem',
    margin: '2rem',
  },
});

export default connect(complexMainStyle)(Main);
