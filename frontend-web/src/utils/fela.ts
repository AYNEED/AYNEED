import { createRenderer, IStyle } from 'fela';
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

const buttonKeyframe = () => ({
  '0%': {
    transform: 'scale(0)',
    opacity: 1
  },
  '100%': {
    transform: 'scale(var(--scale))',
    opacity: 0,
  }
})

renderer.renderKeyframe(buttonKeyframe, {})

interface IAugmentedStyle extends IStyle {
  ':hover'?: IStyle;
  '> a'?: IStyle;
  '> input'?: IStyle;
  '> label'?: IStyle;
}

type FelaSheet = IAugmentedStyle;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FelaSheetFunction = (props: any) => FelaSheet;
export type PropsStyle = FelaSheet | FelaSheetFunction;

export type Styles<T extends string> = {
  [key in T]: PropsStyle;
};
