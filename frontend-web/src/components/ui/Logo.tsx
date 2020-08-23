import React from 'react';
import { useIntl } from 'react-intl';

import { LogoAYNeed } from 'src/components/logos/LogoAYNeed';
import { Link } from 'src/components/ui/Link';
import { ROUTES } from 'shared';
import { msg } from 'src/i18n/Msg';

export const Logo: React.FC = () => {
  const intl = useIntl();

  return (
    <Link
      url={{ scheme: ROUTES.MAIN }}
      title={msg(intl, { id: 'web.components.ui.Logo.title' })}
      mode="wrapper"
    >
      <LogoAYNeed />
    </Link>
  );
};
