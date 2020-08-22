import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';

import { Styles, renderer } from 'src/utils/fela';
import { COLOR, GRADIENT } from 'src/constants/colors';
import { SHADOW } from 'src/constants/effects';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { card, bordered, commonStyle } from 'src/utils/storybook';

export default {
  title: 'Documentation/Core',
} as Meta;

const style: Styles<'text' | 'palette' | 'shadow'> = {
  text: ({
    fontSize,
    fontWeight,
    paddingTop,
  }: {
    fontSize: FONT_SIZE;
    fontWeight: FONT_WEIGHT;
    paddingTop?: number;
  }) => ({
    paddingTop,
    paddingBottom: 10,
    ...font(fontSize, fontWeight),
  }),
  palette: ({ background }: { background: string }) => ({
    ...card,
    ...bordered,
    background,
  }),
  shadow: ({ boxShadow }: { boxShadow: string }) => ({
    ...card,
    background: COLOR.WHITE,
    boxShadow,
  }),
};

type FontsTableItem = {
  text: string;
  fsKey: keyof typeof FONT_SIZE;
  fwKey: keyof typeof FONT_WEIGHT;
} | null;

type ColorsTableItem =
  | {
      key: keyof typeof GRADIENT;
      type: 'gradient';
    }
  | {
      key: keyof typeof COLOR;
      type: 'color';
    }
  | null;

const fontsTable: FontsTableItem[][] = [
  [
    { text: 'Montserrat r (10 px)', fsKey: 'XS', fwKey: 'REGULAR' },
    null,
    null,
    null,
  ],
  [
    { text: 'Montserrat r (12 px)', fsKey: 'S', fwKey: 'REGULAR' },
    null,
    null,
    { text: 'Montserrat b (12 px)', fsKey: 'S', fwKey: 'BOLD' },
  ],
  [
    { text: 'Montserrat r (14 px)', fsKey: 'M', fwKey: 'REGULAR' },
    { text: 'Montserrat m (14 px)', fsKey: 'M', fwKey: 'MEDIUM' },
    { text: 'Montserrat sb (14 px)', fsKey: 'M', fwKey: 'SEMIBOLD' },
    null,
  ],
  [
    { text: 'Montserrat r (16 px)', fsKey: 'L', fwKey: 'REGULAR' },
    { text: 'Montserrat m (16 px)', fsKey: 'L', fwKey: 'MEDIUM' },
    { text: 'Montserrat sb (16 px)', fsKey: 'L', fwKey: 'SEMIBOLD' },
    { text: 'Montserrat b (16 px)', fsKey: 'L', fwKey: 'BOLD' },
  ],
  [
    { text: 'Montserrat r (18 px)', fsKey: 'XL', fwKey: 'REGULAR' },
    { text: 'Montserrat m (18 px)', fsKey: 'XL', fwKey: 'MEDIUM' },
    { text: 'Montserrat sb (18 px)', fsKey: 'XL', fwKey: 'SEMIBOLD' },
    { text: 'Montserrat b (18 px)', fsKey: 'XL', fwKey: 'BOLD' },
  ],
  [
    null,
    { text: 'Montserrat m (24 px)', fsKey: 'XXL', fwKey: 'MEDIUM' },
    { text: 'Montserrat sb (24 px)', fsKey: 'XXL', fwKey: 'SEMIBOLD' },
    null,
  ],
];

const colorsTable: ColorsTableItem[][] = [
  [
    { key: 'HORIZONTAL', type: 'gradient' },
    { key: 'PRIMARY_100', type: 'color' },
    { key: 'SECONDARY_100', type: 'color' },
    { key: 'TRANSPARENT', type: 'color' },
  ],
  [
    { key: 'VERTICAL_SUNSET', type: 'gradient' },
    { key: 'PRIMARY_200', type: 'color' },
    { key: 'SECONDARY_200', type: 'color' },
    { key: 'WHITE', type: 'color' },
  ],
  [
    { key: 'VERTICAL_DAWN', type: 'gradient' },
    { key: 'PRIMARY_300', type: 'color' },
    { key: 'SECONDARY_300', type: 'color' },
    { key: 'ERROR', type: 'color' },
  ],
  [
    { key: 'DEFAULT', type: 'gradient' },
    { key: 'PRIMARY_400', type: 'color' },
    { key: 'SECONDARY_400', type: 'color' },
    null,
  ],
  [
    { key: 'GRAY_HORIZONTAL', type: 'gradient' },
    { key: 'PRIMARY_500', type: 'color' },
    { key: 'SECONDARY_500', type: 'color' },
    null,
  ],
];

const shadowsTable: Array<keyof typeof SHADOW> = Object.keys(SHADOW) as never;

export const Fonts: Story = () => (
  <RendererProvider renderer={renderer}>
    <table style={{ width: '100%' }}>
      <thead>
        <FelaComponent style={commonStyle.thead} as="tr">
          <th>Regular</th>
          <th>Medium</th>
          <th>SemiBold</th>
          <th>Bold</th>
        </FelaComponent>
      </thead>
      <tbody>
        {fontsTable.map((cells, index) => (
          <tr key={index}>
            {cells.map((cell, cellIndex) =>
              cell ? (
                <FelaComponent
                  key={cell.text}
                  style={style.text}
                  as="td"
                  paddingTop={index ? 0 : 5}
                  fontSize={FONT_SIZE[cell.fsKey]}
                  fontWeight={FONT_WEIGHT[cell.fwKey]}
                >
                  <div style={{ color: COLOR.SECONDARY_100 }}>{cell.text}</div>
                  <div style={{ color: COLOR.SECONDARY_200 }}>{cell.text}</div>
                  <div style={{ color: COLOR.SECONDARY_300 }}>{cell.text}</div>
                  <FelaComponent style={commonStyle.code} as="code">
                    ...font(FONT_SIZE.{cell.fsKey}, FONT_WEIGHT.{cell.fwKey})
                  </FelaComponent>
                </FelaComponent>
              ) : (
                <td key={`${index}-${cellIndex}`} />
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </RendererProvider>
);

export const Colors: Story = () => (
  <RendererProvider renderer={renderer}>
    <table>
      <thead>
        <FelaComponent style={commonStyle.thead} as="tr">
          <th>Gradient</th>
          <th>Primary</th>
          <th>Secondary</th>
          <th>Other</th>
        </FelaComponent>
      </thead>
      <tbody>
        {colorsTable.map((cells, index) => (
          <tr key={index}>
            {cells.map((cell, cellIndex) =>
              cell ? (
                <td key={`${cell.type}-${cell.key}`}>
                  <FelaComponent
                    style={style.palette}
                    background={
                      cell.type === 'gradient'
                        ? GRADIENT[cell.key]
                        : COLOR[cell.key]
                    }
                  />
                  <FelaComponent style={commonStyle.code} as="code">
                    {(cell.type === 'gradient'
                      ? 'background: GRADIENT.'
                      : 'backgroundColor: COLOR.') + cell.key}
                  </FelaComponent>
                </td>
              ) : (
                <td key={`${index}-${cellIndex}`} />
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </RendererProvider>
);

export const Shadows: Story = () => (
  <RendererProvider renderer={renderer}>
    <table>
      <thead>
        <FelaComponent style={commonStyle.thead} as="tr">
          <th>Messager</th>
          <th>Cards</th>
          <th>Avatar</th>
          <th>Button back</th>
        </FelaComponent>
      </thead>
      <tbody>
        <tr>
          {shadowsTable.map((item) => (
            <td key={item}>
              <FelaComponent style={style.shadow} boxShadow={SHADOW[item]} />
              <FelaComponent style={commonStyle.code} as="code">
                boxShadow: SHADOW.{item}
              </FelaComponent>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </RendererProvider>
);

export const Backgrounds: Story = () => (
  <RendererProvider renderer={renderer}>
    <>TODO</>
  </RendererProvider>
);
