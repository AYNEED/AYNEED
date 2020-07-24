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

const files = [
  '/fonts/Montserrat-Regular.ttf',
  '/fonts/Montserrat-Regular.woff',
  '/fonts/Montserrat-Regular.woff2',
  '/fonts/Montserrat-Medium.ttf',
  '/fonts/Montserrat-Bold.ttf',
  '/fonts/Montserrat-ExtraBold.ttf',
];

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

renderer.renderFont('Montserrat-Regular', files, {
  fontStyle: 'normal',
  fontWeight: 400,
});

renderer.renderFont('Montserrat-Medium', files, {
  fontStyle: 'normal',
  fontWeight: 500,
});

renderer.renderFont('Montserrat-Bold', files, {
  fontStyle: 'normal',
  fontWeight: 700,
});

renderer.renderFont('Montserrat-ExtraBold', files, {
  fontStyle: 'normal',
  fontWeight: 800,
});

renderer.renderStatic(`
  * {
    font-family: "Montserrat"
  }

  #root {
    font-family: "Montserrat"
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
