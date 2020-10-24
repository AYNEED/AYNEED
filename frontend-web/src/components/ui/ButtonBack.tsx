import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { HillHovered } from 'src/components/icons/interactions/HillHovered';
import { Hill } from 'src/components/icons/interactions/Hill';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Msg } from 'src/i18n/Msg';

export type Props = {
  additionalText: boolean;
};

const style: Styles<'container' | 'line' | 'hillContainer'> = {
  container: {
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    height: '100%',
    nested: {
      '>p': {
        marginLeft: '13px',
        ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
        color: COLOR.SECONDARY_200,
        cursor: 'pointer',
      },
    },
  },

  line: ({ hover }: { hover: boolean }) => ({
    position: 'fixed',
    width: '5px',
    height: '100%',
    backgroundColor: hover ? COLOR.SECONDARY_400 : COLOR.PRIMARY_200,
    opacity: hover ? 0.7 : 1,
    nested: {
      ':hover': {
        backgroundColor: COLOR.SECONDARY_400,
      },
    },
  }),

  hillContainer: {
    marginLeft: '5px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
  },
};

export const ButtonBack: React.FC<Props> = (props) => {
  const [isHover, setHover] = React.useState(false);

  return (
    <FelaComponent style={style.container}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{ position: 'fixed', height: '100%' }}
      >
        <FelaComponent hover={isHover} style={style.line}></FelaComponent>
      </div>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <FelaComponent style={style.hillContainer}>
          {isHover ? <HillHovered></HillHovered> : <Hill></Hill>}
        </FelaComponent>
      </div>
      {props.additionalText ? (
        <p
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <Msg id={'web.components.ui.ButtonBack.back'}></Msg>
        </p>
      ) : (
        ''
      )}
    </FelaComponent>
  );
};
