import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
import { COLOR, gradient, GRADIENT } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { SHADOW } from 'src/constants/effects';
import { Lamp } from 'src/components/icons/interactions/Lamp';
import { Msg } from 'src/i18n/Msg';

export type Props = {
  disabled: boolean;
  firstStart: boolean;
};

const style: Styles<
  | 'firstCard'
  | 'disabled'
  | 'firstStart'
  | 'firstCardText'
  | 'textEnabled'
  | 'textDisabled'
  | 'textFirstStart'
> = {
  firstCard: {
    width: '330px',
    height: '400px',
    boxShadow: SHADOW.CARDS,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    border: `1px ${COLOR.SECONDARY_400} solid`,
    nested: {
      ':hover': {
        border: `1px ${COLOR.PRIMARY_300} solid`,
        cursor: 'pointer',
        nested: {
          '>p': {
            color: COLOR.PRIMARY_100,
          },
        },
      },
    },
  },

  disabled: {
    nested: {
      ':hover': {
        border: `1px ${COLOR.SECONDARY_400} solid`,
        nested: {
          '>p': {
            color: COLOR.SECONDARY_400,
          },
        },
      },
    },
  },

  firstStart: {
    ...gradient(GRADIENT.VERTICAL_SUNSET),
    backgroundClip: 'border-box !important',
    WebkitTextFillColor: COLOR.WHITE,
    nested: {
      ':hover': {
        border: `1px ${COLOR.SECONDARY_400} solid`,
      },
    },
  },

  firstCardText: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.MEDIUM),
    marginTop: '20px',
    width: '140px',
  },

  textDisabled: {
    color: COLOR.SECONDARY_400,
  },

  textEnabled: {
    color: COLOR.SECONDARY_200,
  },

  textFirstStart: {
    color: COLOR.WHITE,
  },
};

export const FirstCard: React.FC<IFirstCard> = (props) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <FelaComponent
        style={[
          style.firstCard,
          props.disabled
            ? style.disabled
            : props.firstStart
            ? style.firstStart
            : {},
        ]}
        as="div"
      >
        <Lamp
          fill={
            isHover
              ? props.disabled
                ? COLOR.SECONDARY_500
                : props.firstStart
                ? COLOR.WHITE
                : 'url(#paint0_linear)'
              : props.disabled
              ? COLOR.SECONDARY_500
              : props.firstStart
              ? COLOR.WHITE
              : COLOR.SECONDARY_400
          }
        ></Lamp>
        <FelaComponent
          style={[
            style.firstCardText,
            props.disabled
              ? style.textDisabled
              : props.firstStart
              ? style.textFirstStart
              : style.textEnabled,
          ]}
          as="p"
        >
          <Msg
            id={
              props.firstStart
                ? 'web.components.ui.CardProject.firstUndertaking'
                : 'web.components.ui.CardProject.undertaking'
            }
          />
        </FelaComponent>
      </FelaComponent>
    </div>
  );
};
