import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';

import { Styles, renderer } from 'src/utils/fela';
import { COLOR, GRADIENT } from 'src/constants/colors';
import { card, bordered, commonStyle } from 'src/utils/storybook';

export default {
  title: 'Atoms',
} as Meta;

const style: Styles<'palette'> = {
  palette: ({ background }: { background: string }) => ({
    ...card,
    ...bordered,
    background,
  }),
};

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
