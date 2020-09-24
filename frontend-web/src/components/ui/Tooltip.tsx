import React from 'react';

import { Styles } from 'src/utils/fela';
import { FelaComponent } from 'react-fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';

export type Props = {
  text: JSX.Element | string;
  children?: JSX.Element;
  type?: 'up' | 'down' | 'right' | 'left';
};

const style: Styles<'origTooltip' | 'up' | 'down' | 'right' | 'left'> = {
  origTooltip: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
    color: COLOR.WHITE,
    position: 'absolute',
    width: '299px',
    height: '56px',
    padding: '5px',
    borderRadius: '5px',
    background: COLOR.SECONDARY_100,
    nested: {
      ':after': {
        content: 'no-close-quote',
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: '5px',
      },
    },
  },
  up: {
    bottom: '65px',
    left: '50%',
    marginLeft: '-150px',
    nested: {
      ':after': {
        top: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderColor: `${COLOR.SECONDARY_100} transparent transparent transparent`,
      },
    },
  },
  down: {
    top: '100%',
    left: '50%',
    marginTop: '10px',
    marginLeft: '-150px',
    nested: {
      ':after': {
        bottom: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderColor: `transparent transparent ${COLOR.SECONDARY_100} transparent`,
      },
    },
  },

  right: {
    top: '50%',
    left: '100%',
    marginTop: '-28px',
    marginLeft: '10px',
    nested: {
      ':after': {
        bottom: '50%',
        right: '100%',
        marginBottom: '-5px',
        borderColor: `transparent ${COLOR.SECONDARY_100} transparent transparent`,
      },
    },
  },
  left: {
    top: '50%',
    marginTop: '-28px',
    marginLeft: '-309px',
    nested: {
      ':after': {
        top: '50%',
        left: '100%',
        marginTop: '-5px',
        borderColor: `transparent transparent transparent ${COLOR.SECONDARY_100}`,
      },
    },
  },
};

export const Tooltip: React.FC<Props> = ({ text, children, type }) => (
  <FelaComponent style={[style.origTooltip, type ? style[type] : {}]}>
    {text}
    {children}
  </FelaComponent>
);
