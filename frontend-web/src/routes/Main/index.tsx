import React from 'react';

import { Page } from 'src/components/wrappers/Page';
import { ButtonLink } from 'src/components/ui/forms/Button';
import { Msg } from 'src/i18n/Msg';
import { ROUTES } from 'shared';
import { Ball } from 'src/routes/Main/Ball';
import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';
import { Link } from 'src/components/ui/Link';

const Logo = React.lazy(() => import('src/components/ui/Logo'));

const Main: React.FC = () => (
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

    <Link url={{ scheme: ROUTES.SIGN_IN_EMAIL }}>
      <Msg id="web.routes.Main.button_sign_in" />
    </Link>
  </Page>
);

export default Main;
