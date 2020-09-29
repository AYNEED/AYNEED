import React from 'react';
import { FelaComponent } from 'react-fela';

import { COLOR } from 'src/constants/colors';
import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import {
  LayoutProps,
  LayoutStyleProps,
} from 'src/components/wrappers/layouts/types';
import { NavigationPanel } from 'src/components/blocks/NavigationPanel';

const style: Styles<'root' | 'main' | 'title'> = {
  root: ({ backgroundColor }: LayoutStyleProps) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: '100vh',
    width: '100%',
    backgroundColor,
  }),
  main: {
    padding: 30,
    minHeight: '100vh',
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
    {({ className }) => (
      <div data-testid="page" className={className}>
        <NavigationPanel expanded={true} logged={false} />
        <FelaComponent style={style.main} as="main">
          {title && (
            <FelaComponent style={style.title} as="h1">
              {title}
            </FelaComponent>
          )}
          {children}
        </FelaComponent>
      </div>
    )}
  </FelaComponent>
);
