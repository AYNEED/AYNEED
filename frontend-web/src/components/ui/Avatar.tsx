import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Badge } from 'src/components/ui/Badge';
import { Desktop } from 'src/components/icons/old_design/Desktop';
import { Mobile } from 'src/components/icons/old_design/Mobile';
import { COLOR } from 'src/constants/colors';
import { SHADOW } from 'src/constants/effects';
import { User, UserClient } from 'src/__generated__';
import { Link } from 'src/components/ui/Link';
import { ROUTES } from 'shared';

export type Props = {
  id: User['id'];
  photo?: string;
  isOnline: boolean;
  client: UserClient;
  size: '30px' | '50px' | '90px' | '140px' | '100%';
};

const clientToIcon: { [TKey in Props['client']]: React.FC } = {
  mobile: Mobile,
  desktop: Desktop,
};

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

  return (
    <Link url={{ scheme: ROUTES.USER, params: { id } }} mode="wrapper">
      {children}
    </Link>
  );
};

export const Avatar: React.FC<Props> = ({
  id,
  photo,
  isOnline,
  client,
  size,
}) => (
  <Linked id={id}>
    <Badged client={client} withBadge={isOnline}>
      <div
        style={{
          backgroundColor: COLOR.TRANSPARENT,
          borderRadius: '50%',
          border: `2px solid ${COLOR.WHITE}`,
          boxShadow: `${SHADOW.AVATAR}`,
          width: size,
          height: size,
        }}
      >
        {photo && (
          <div
            style={{
              backgroundColor: COLOR.TRANSPARENT,
              borderRadius: '50%',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${photo})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        )}
      </div>
    </Badged>
  </Linked>
);
