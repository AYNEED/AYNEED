import React from 'react';
import { FelaComponent } from 'react-fela';

import { COLOR } from 'src/constants/colors';
import { Styles } from 'src/utils/fela';

export type Props = {
  color: 'light' | 'strong';
};

const style: Styles<'root'> = {
  root: ({ color }: Props) => ({
    border: 'none',
    borderRadius: 2,
    backgroundColor:
      color === 'light' ? COLOR.SECONDARY_500 : COLOR.SECONDARY_400,
    width: '100%',
    height: 2,
  }),
};

export const Divider: React.FC<Props> = ({ color }) => (
  <FelaComponent style={style.root} as="hr" color={color} />
);
