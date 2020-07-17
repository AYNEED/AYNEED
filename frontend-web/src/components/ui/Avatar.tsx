import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Badge } from 'src/components/ui/Badge';
import { Desktop } from 'src/components/icons/Desktop';
import { Mobile } from 'src/components/icons/Mobile';
import { NoPhoto } from 'src/components/icons/NoPhoto';
import { Msg } from 'src/i18n/Msg';
import { COLOR } from 'src/constants/colors';
import { User, Client } from 'src/__generated__';
import { Link } from 'src/components/ui/Link';
import { ROUTES } from 'shared';

type Props = {
  id: User['id'];
  photo?: string;
  isOnline: boolean;
  isCurrent: boolean;
  client: Client;
  size: '36px' | '50px' | '76px' | '100px' | '262px' | '100%';
};

const clientToIcon: { [TKey in Props['client']]: React.FC } = {
  mobile: Mobile,
  desktop: Desktop,
};

const EmptyPhoto: React.FC<{ withText: boolean }> = ({ withText }) => (
  <div
    style={{
      backgroundColor: COLOR.GRAY_LIGHT,
      color: COLOR.GRAY,
    }}
  >
    <NoPhoto />

    {withText && (
      <span>
        <Msg id="web.components.ui.Avatar.upload_photo" />
      </span>
    )}
  </div>
);

const Badged: React.FC<{ client: Props['client']; withBadge: boolean }> = ({
  client,
  withBadge,
  children,
}) => {
  if (!withBadge) {
    return <>{children}</>;
  }

  const Icon = clientToIcon[client];

  return (
    <Badge
      value={<Icon />}
      borderColor={COLOR.WHITE}
      backgroundColor={COLOR.PRIMARY_500}
      position="rightBottom"
    >
      {children}
    </Badge>
  );
};

const Linked: React.FC<{ id: Props['id'] }> = ({ id, children }) => {
  const { path, params } = useRouteMatch<{ id?: string }>();

  if (path === ROUTES.USER && id === params.id) {
    return <>{children}</>;
  }

  return <Link url={{ scheme: ROUTES.USER, params: { id } }}>{children}</Link>;
};

export const Avatar: React.FC<Props> = ({
  id,
  photo,
  isOnline,
  isCurrent,
  client,
  size,
}) => (
  <Linked id={id}>
    <Badged client={client} withBadge={isOnline}>
      <div style={{ width: size, height: size }}>
        {photo ? (
          <img src={photo} alt="" />
        ) : (
          <EmptyPhoto withText={isCurrent} />
        )}
      </div>
    </Badged>
  </Linked>
);
