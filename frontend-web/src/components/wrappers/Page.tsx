import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';

import { ROUTES } from 'shared';
import { config } from 'src/navigation';
import { msg, Msg } from 'src/i18n/Msg';

type Props = {
  title?: boolean;
};

export const Page: React.FC<Props> = ({ children, title }) => {
  const intl = useIntl();
  const match = useRouteMatch();

  const id = config[match.path as ROUTES].title;
  const msgProps = id ? { id } : undefined;

  useEffect(() => {
    const title = msgProps ? msg(intl, msgProps) : undefined;
    document.title = title || 'AYneed';
  }, [msgProps, intl]);

  return (
    <>
      {!!(title && msgProps) && (
        <h1>
          <Msg {...msgProps} />
        </h1>
      )}

      {children}
    </>
  );
};
