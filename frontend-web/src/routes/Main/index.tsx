import React from 'react';

import { Page } from 'src/components/wrappers/Page';
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

const Main: React.FC = () => (
  <Page>
    <Logo />

    <p>
      <Msg id="web.routes.Main.description" />
    </p>

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

    <Networks />
  </Page>
);

export default Main;
