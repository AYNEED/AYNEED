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
  'src/assets/fonts/Montserrat-Regular.ttf',
  'src/assets/fonts/Montserrat-Regular.woff',
  'src/assets/fonts/Montserrat-Regular.woff2',
  'src/assets/fonts/Montserrat-Medium.ttf',
  'src/assets/fonts/Montserrat-Bold.ttf',
  'src/assets/fonts/Montserrat-ExtraBold.ttf'
]

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

renderer.renderFont('Montserrat', files, {})

renderer.renderFont('Montserrat-Regular', files, { 
  fontStyle: 'normal',
  fontWeight: 400,
})

renderer.renderFont('Montserrat-Medium', files, { 
  fontStyle: 'normal',
  fontWeight: 500,
})

renderer.renderFont('Montserrat-Bold', files, { 
  fontStyle: 'normal',
  fontWeight: 700,
})

renderer.renderFont('Montserrat-ExtraBold', files, { 
  fontStyle: 'normal',
  fontWeight: 800,
})

renderer.renderStatic(`
  * {
    font-family: "Montserrat"
  }

  #root {
    font-family: "Montserrat"
  }
`)



export type Styles<K extends string, T = {}, P = {}> = {
  [key in K]: CssFelaStyle<T, P>;
};
