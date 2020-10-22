import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';

const style: Styles<'container' | 'content'> = {
  container: {
    width: '200px',
    height: '300px',
    overflowY: 'scroll',
    backgroundColor: 'gray',
  },

  content: {
    width: '300px',
    height: '1000px',
    backgroundColor: 'white',
    border: '5px #000 dashed',
  },
};

export const ScrollBarPreviewOnly: React.FC = () => {
  return (
    <FelaComponent style={style.container}>
      <FelaComponent style={style.content}></FelaComponent>
    </FelaComponent>
  );
};
