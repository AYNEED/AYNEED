import React from 'react';
import { FelaComponent } from 'react-fela';

import { COLOR } from 'src/constants/colors';
import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import {
  LayoutProps,
  LayoutStyleProps,
} from 'src/components/wrappers/layouts/types';

const Logo = React.lazy(() => import('src/components/ui/Logo'));

const style: Styles<'root' | 'nav' | 'main' | 'logo' | 'title'> = {
  root: ({ backgroundColor }: LayoutStyleProps) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: '100vh',
    backgroundColor,
  }),
  nav: ({ width }: { width: number }) => ({
    width,
    backgroundColor: COLOR.WHITE,
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: COLOR.SECONDARY_400,
    position: 'sticky',
    top: 0,
    minHeight: '100vh',
  }),
  main: {
    padding: 30,
    minHeight: '100vh',
  },
  logo: {
    margin: 20,
  },
  title: {
    ...font(FONT_SIZE.XL, FONT_WEIGHT.SEMIBOLD),
    color: COLOR.SECONDARY_200,
  },
};

export const DefaultLayout: React.FC<LayoutProps> = ({
  title,
  children,
  backgroundColor,
}) => (
  <FelaComponent style={style.root} backgroundColor={backgroundColor}>
    <FelaComponent style={style.nav} as="nav" width={256}>
      <FelaComponent style={style.logo}>
        <Logo />
      </FelaComponent>
    </FelaComponent>

    <FelaComponent style={style.main} as="main">
      {title && (
        <FelaComponent style={style.title} as="h1">
          {title}
        </FelaComponent>
      )}

      {children}
    </FelaComponent>
  </FelaComponent>
);
