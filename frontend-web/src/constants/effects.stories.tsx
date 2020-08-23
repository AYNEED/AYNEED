import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';

import { Styles, renderer } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { SHADOW } from 'src/constants/effects';
import { card, commonStyle } from 'src/utils/storybook';

export default {
  title: 'Atoms',
} as Meta;

const style: Styles<'shadow'> = {
  shadow: ({ boxShadow }: { boxShadow: string }) => ({
    ...card,
    background: COLOR.WHITE,
    boxShadow,
  }),
};

const shadowsTable: Array<keyof typeof SHADOW> = Object.keys(SHADOW) as never;

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
