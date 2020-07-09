import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { MsgProps, Msg } from 'src/i18n/Msg';
import { COLOR } from 'src/constants/colors';

type Props = MsgProps;

const styles: Styles<'icon' | 'text'> = {
  icon: {
    width: 70,
    height: 70,
    borderRadius: '50%',
    backgroundColor: COLOR.WHITE,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  },
  text: {
    color: COLOR.PRIMARY_500,
  },
};

export const Ball: React.FC<Props> = ({ id, values, children }) => (
  <>
    <FelaComponent style={styles.icon}>{children}</FelaComponent>

    <FelaComponent as="p" style={styles.text}>
      <Msg id={id} values={values} />
    </FelaComponent>
  </>
);
