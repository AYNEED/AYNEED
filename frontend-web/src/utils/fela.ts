import { createRenderer, IStyle } from 'fela';
import typescript from 'fela-plugin-typescript';
import fallbackValue from 'fela-plugin-fallback-value';
import namedKeys from 'fela-plugin-named-keys';
import prefixer from 'fela-plugin-prefixer';
import unit from 'fela-plugin-unit';

import { UserClient } from 'src/generated';
import { COLOR } from '../constants/colors';

const mediaQueries = {
  desktop: '@media (min-width: 1024px)',
  tablet: '@media (min-width: 768px)',
  supportsFlex: '@supports (display: flex)',
  supportsGrid: '@supports (display: grid)',
};

export const client = window.matchMedia(
  mediaQueries.desktop.replace('@media ', '')
).matches
  ? UserClient.Desktop
  : UserClient.Mobile;

export const renderer = createRenderer({
  plugins: [
    typescript(),
    prefixer(),
    fallbackValue(),
    unit(),
    namedKeys(mediaQueries),
  ],
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Thin.woff'], {
  fontStyle: 'normal',
  fontWeight: 100,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ThinItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 100,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraLight.woff'], {
  fontStyle: 'normal',
  fontWeight: 200,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraLightItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 200,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Light.woff'], {
  fontStyle: 'normal',
  fontWeight: 300,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-LightItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 300,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Regular.woff'], {
  fontStyle: 'normal',
  fontWeight: 400,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Medium.woff'], {
  fontStyle: 'normal',
  fontWeight: 500,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-MediumItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 500,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-SemiBold.woff'], {
  fontStyle: 'normal',
  fontWeight: 600,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-SemiBoldItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 600,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Bold.woff'], {
  fontStyle: 'normal',
  fontWeight: 700,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-BoldItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 700,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraBold.woff'], {
  fontStyle: 'normal',
  fontWeight: 800,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraBoldItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 800,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Black.woff'], {
  fontStyle: 'normal',
  fontWeight: 900,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-BlackItalic.woff'], {
  fontStyle: 'italic',
  fontWeight: 900,
});

renderer.renderStatic(`
  #root {
    font-family: "Montserrat";
    font-weight: 400;
  }
`);

renderer.renderStatic(`
  * {
    scrollbar-width: thin;
    scrollbar-color: ${COLOR.SECONDARY_400} ${COLOR.SECONDARY_300};
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLOR.SECONDARY_500};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLOR.SECONDARY_400};
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:vertical:hover{ 
    background-color: ${COLOR.PRIMARY_300};
   }

   ::-webkit-scrollbar-thumb:horizontal:hover{ 
    background-color: ${COLOR.PRIMARY_300};
   }
`);

export type Theme = 'default' | 'negative';

type FelaSheet = IStyle;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FelaSheetFunction = (props: any) => FelaSheet;
export type PropsStyle = FelaSheet | FelaSheetFunction;

export type Styles<T extends string> = {
  [key in T]: PropsStyle;
};
