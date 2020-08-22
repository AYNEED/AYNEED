import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';

import { ROUTES } from 'shared';
import { COLOR } from 'src/constants/colors';
import { config } from 'src/navigation';
import { msg, Msg } from 'src/i18n/Msg';
import { Layout, layoutToComponent } from 'src/components/wrappers/layouts';

type Props = {
  title?: string;
  withTitle?: boolean;
  layout?: Layout;
};

export const Page: React.FC<Props> = ({
  children,
  title,
  withTitle,
  layout = 'default',
}) => {
  const intl = useIntl();
  const match = useRouteMatch();

  const id = config[match.path as ROUTES].title;
  const msgProps = id ? { id } : undefined;

  useEffect(() => {
    document.title = title || (msgProps ? msg(intl, msgProps) : 'AYneed');
  }, [title, msgProps, intl]);

  let renderedTitle = null;

  if (withTitle) {
    if (title) {
      renderedTitle = <>{title}</>;
    } else if (msgProps) {
      renderedTitle = <Msg {...msgProps} />;
    }
  }

  const LayoutComponent = layoutToComponent[layout];
  const backgroundColor =
    layout === 'notFound' || layout === 'default'
      ? COLOR.SECONDARY_500
      : COLOR.WHITE;

  return (
    <LayoutComponent title={renderedTitle} backgroundColor={backgroundColor}>
      {children}
    </LayoutComponent>
  );
};
