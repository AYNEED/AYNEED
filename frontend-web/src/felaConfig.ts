import { createRenderer } from 'fela';
import typescript from 'fela-plugin-typescript';
import fallbackValue from 'fela-plugin-fallback-value';
import namedKeys from 'fela-plugin-named-keys';
import prefixer from 'fela-plugin-prefixer';
import unit from 'fela-plugin-unit';

const namedKeysPlugin = namedKeys({
  desktop: '@media (min-width: 1024px)',
  tablet: '@media (min-width: 768px)',
  supportsFlex: '@supports (display: flex)',
  supportsGrid: '@supports (display: grid)',
});

export const renderer = createRenderer({
  plugins: [typescript(), fallbackValue(), prefixer(), unit(), namedKeysPlugin],
});
