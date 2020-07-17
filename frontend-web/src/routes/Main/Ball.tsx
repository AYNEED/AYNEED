import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { MsgProps, Msg } from 'src/i18n/Msg';
import { COLOR } from 'src/constants/colors';


// type Props = MsgProps, 'style'
interface Props extends MsgProps {
  style?: object;
}


const styles: Styles<'ball' | 'icon' | 'text'> = {
  ball: {
    position: 'absolute',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  icon: {
    width: '71px',
    height: '71px',
    borderRadius: '50%',
    backgroundColor: COLOR.WHITE,
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  },
  text: {
    color: COLOR.PRIMARY_500,
    marginTop: '15px', 
  },
};

export const Ball: React.FC<Props> = ({ id, values, children, style = {}}) => (
  <FelaComponent style={[styles.ball, style]}>
    <FelaComponent style={styles.icon}>{children}</FelaComponent>

    <FelaComponent as="p" style={styles.text}>
      <Msg id={id} values={values} />
    </FelaComponent>
  </FelaComponent>
);
