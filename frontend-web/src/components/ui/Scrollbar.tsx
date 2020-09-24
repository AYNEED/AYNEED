import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';

const style: Styles<'scrollbar' | 'scrollThumb'> = {
  scrollbar: {
    backgroundColor: COLOR.SECONDARY_400,
    position: 'fixed',
    width: '4px',
    height: '100%',
    left: '99%',
  },

  scrollThumb: {
    width: '4px',
    height: '10%',
    borderRadius: '10px',
    backgroundColor: COLOR.PRIMARY_300,
    position: 'relative',
  },
};

export const Scrollbar: React.FC = () => {
  return (
    <>
      <FelaComponent style={style.scrollbar} as="div">
        <FelaComponent
          style={[
            style.scrollThumb,
            { height: `100px`, top: `${window.pageYOffset}px` },
          ]}
          as="div"
        ></FelaComponent>
      </FelaComponent>

      <FelaComponent
        style={{ width: '10px', height: '2000px', border: '1px dashed #000' }}
      ></FelaComponent>
    </>
  );
};
