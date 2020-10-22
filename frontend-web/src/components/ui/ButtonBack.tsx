import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { Hill } from 'src/components/icons/interactions/Hill';

const style: Styles<'container' | 'line' | 'hillContainer'> = {
  container: {
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    height: '100%',
  },

  line: {
    position: 'fixed',
    width: '5px',
    height: '100%',
    backgroundColor: COLOR.PRIMARY_200,
  },

  hillContainer: {
    marginLeft: '5px',
  },
};

export const ButtonBack: React.FC = () => {
  return (
    <FelaComponent style={style.container}>
      <FelaComponent style={style.line}></FelaComponent>
      <FelaComponent style={style.hillContainer}>
        <Hill></Hill>
      </FelaComponent>
    </FelaComponent>
  );
};
