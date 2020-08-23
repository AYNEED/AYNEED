import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';

import { Styles, renderer } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { commonStyle } from 'src/utils/storybook';

export default {
  title: 'Atoms',
} as Meta;

const style: Styles<'text'> = {
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
};

type FontsTableItem = {
  text: string;
  fsKey: keyof typeof FONT_SIZE;
  fwKey: keyof typeof FONT_WEIGHT;
} | null;

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
