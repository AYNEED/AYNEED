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

const style: Styles<'root' | 'logo' | 'title'> = {
  root: ({ backgroundColor }: LayoutStyleProps) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor,
  }),
  logo: {
    marginBottom: 25,
  },
  title: {
    ...font(FONT_SIZE.XL, FONT_WEIGHT.SEMIBOLD),
    color: COLOR.SECONDARY_200,
  },
};

export const EntryLayout: React.FC<LayoutProps> = ({
  title,
  children,
  backgroundColor,
}) => (
  <FelaComponent style={style.root} backgroundColor={backgroundColor}>
    {({ className }) => (
      <div data-testid="page" className={className}>
        <FelaComponent style={style.logo}>
          <Logo />
        </FelaComponent>

        {title && (
          <FelaComponent style={style.title} as="h1">
            {title}
          </FelaComponent>
        )}

        {children}
      </div>
    )}
  </FelaComponent>
);
