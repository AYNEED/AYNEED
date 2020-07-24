import { createRenderer } from 'fela';
import { CssFelaStyle } from 'react-fela';
import typescript from 'fela-plugin-typescript';
import fallbackValue from 'fela-plugin-fallback-value';
import namedKeys from 'fela-plugin-named-keys';
import prefixer from 'fela-plugin-prefixer';
import unit from 'fela-plugin-unit';

import { Client } from 'src/__generated__';

const mediaQueries = {
  desktop: '@media (min-width: 1024px)',
  tablet: '@media (min-width: 768px)',
  supportsFlex: '@supports (display: flex)',
  supportsGrid: '@supports (display: grid)',
};

export const client = window.matchMedia(
  mediaQueries.desktop.replace('@media ', '')
).matches
  ? Client.Desktop
  : Client.Mobile;

export const renderer = createRenderer({
  plugins: [
    typescript(),
    fallbackValue(),
    prefixer(),
    unit(),
    namedKeys(mediaQueries),
  ],
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Thin.ttf'], {
  fontStyle: 'normal',
  fontWeight: 100,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ThinItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 100,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraLight.ttf'], {
  fontStyle: 'normal',
  fontWeight: 200,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraLightItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 200,
});

renderer.renderFont(
  'Montserrat',
  ['/fonts/Montserrat-Light.ttf', '/fonts/Montserrat-Light.woff'],
  {
    fontStyle: 'normal',
    fontWeight: 300,
  }
);

renderer.renderFont('Montserrat', ['/fonts/Montserrat-LightItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 300,
});

renderer.renderFont(
  'Montserrat',
  ['/fonts/Montserrat-Regular.ttf', '/fonts/Montserrat-Regular.woff2'],
  {
    fontStyle: 'normal',
    fontWeight: 400,
  }
);

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Medium.ttf'], {
  fontStyle: 'normal',
  fontWeight: 500,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-MediumItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 500,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-SemiBold.ttf'], {
  fontStyle: 'normal',
  fontWeight: 600,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-SemiBoldItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 600,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Bold.ttf'], {
  fontStyle: 'normal',
  fontWeight: 700,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-BoldItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 700,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraBold.ttf'], {
  fontStyle: 'normal',
  fontWeight: 800,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-ExtraBoldItalic.ttf'], {
  fontStyle: 'italic',
  fontWeight: 800,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-Black.ttf'], {
  fontStyle: 'normal',
  fontWeight: 900,
});

renderer.renderFont('Montserrat', ['/fonts/Montserrat-BlackItalic.ttf'], {
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  #root{
    position: relative;
    width: 100%;
    height: 100%;
  }
`);

export type Styles<K extends string, T = {}, P = {}> = {
  [key in K]: CssFelaStyle<T, P>;
};

export type PropsStyle<T = {}, P = {}> = CssFelaStyle<T, P>;
