import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FelaComponent } from 'react-fela';

import { ROUTES } from 'shared';
import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { COLOR } from 'src/constants/colors';
import { SHADOW } from 'src/constants/effects';
import { User, UserClient } from 'src/generated';
import { Link } from 'src/components/ui/Link';
import { Msg } from 'src/i18n/Msg';

export type PropSize = '30px' | '50px' | '90px' | '140px';

export type Props = {
  id: User['id'];
  photo?: string;
  isOnline: boolean;
  client: UserClient;
  size: PropSize;
};

const style: Styles<'avatar' | 'container' | 'online'> = {
  avatar: ({ photo }: { photo: string }) => ({
    backgroundColor: COLOR.TRANSPARENT,
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
  }),
  container: ({ size, isOnline }: { size: PropSize; isOnline: boolean }) => ({
    '-webkit-transition': 'border 0.5s ease',
    '-moz-transition': 'border 0.5s ease',
    '-o-transition': 'border 0.5s ease',
    transition: 'border 0.5s ease',

    position: 'relative',
    backgroundColor: COLOR.TRANSPARENT,
    borderRadius: '50%',
    border: `solid ${COLOR.WHITE}`,
    boxShadow: `${SHADOW.AVATAR}`,
    width: size,
    height: size,
    nested: {
      ':hover': {
        borderColor: COLOR.PRIMARY_300,
      },
      ':focused': {
        borderColor: COLOR.PRIMARY_300,
      },
      ':active': {
        borderColor: COLOR.PRIMARY_200,
      },
      ':before': isOnline
        ? {
            content: 'close-quote',
            width: size === '30px' || size === '50px' ? 8 : 14,
            height: size === '30px' || size === '50px' ? 8 : 14,
            borderRadius: '50%',
            backgroundColor: COLOR.PRIMARY_300,
            border: `solid ${COLOR.WHITE}`,
            position: 'absolute',
            right:
              size === '30px'
                ? 0
                : size === '50px'
                ? 3
                : size === '90px'
                ? 5
                : size === '140px'
                ? 14
                : 14,
            bottom:
              size === '30px'
                ? 0
                : size === '50px'
                ? 3
                : size === '90px'
                ? 5
                : size === '140px'
                ? 13
                : 13,
          }
        : {},
    },
  }),
  online: {
    ...font(FONT_SIZE.XS, FONT_WEIGHT.SEMIBOLD),
    color: COLOR.SECONDARY_200,
    position: 'absolute',
    bottom: -4,
    right: 4,
  },
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

export const Avatar: React.FC<Props> = ({ id, photo, isOnline, size }) => (
  <Linked id={id}>
    <FelaComponent size={size} style={style.container} isOnline={isOnline}>
      {photo && (
        <FelaComponent photo={photo} style={style.avatar}></FelaComponent>
      )}
      {isOnline && size === '140px' && (
        <FelaComponent style={style.online}>
          <Msg id="web.components.ui.Avatar.online" />
        </FelaComponent>
      )}
    </FelaComponent>
  </Linked>
);
