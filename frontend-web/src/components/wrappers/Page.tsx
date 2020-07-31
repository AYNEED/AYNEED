import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import { FelaComponent } from 'react-fela';

import { ROUTES } from 'shared';
import { COLOR } from 'src/constants/colors';
import { config } from 'src/navigation';
import { msg, Msg } from 'src/i18n/Msg';
import { Styles } from 'src/utils/fela';

type Props = {
  withTitle?: boolean;
  gray?: boolean;
};

const style: Styles<'page'> = {
  page: ({ gray }: { gray: Props['gray'] }) => ({
    backgroundColor: gray ? COLOR.SECONDARY_100 : COLOR.WHITE,
    minHeight: '100vh',
  }),
};

export const Page: React.FC<Props> = ({ children, withTitle, gray }) => {
  const intl = useIntl();
  const match = useRouteMatch();

  const id = config[match.path as ROUTES].title;
  const msgProps = id ? { id } : undefined;

  useEffect(() => {
    document.title = msgProps ? msg(intl, msgProps) : 'AYneed';
  }, [msgProps, intl]);

  return (
    <FelaComponent style={style.page} gray={gray}>
      {({ className }) => (
        <div data-testid="page" className={className}>
          {!!(withTitle && msgProps) && (
            <h1>
              <Msg {...msgProps} />
            </h1>
          )}

          {children}
        </div>
      )}
    </FelaComponent>
  );
};
