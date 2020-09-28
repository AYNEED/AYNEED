import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { SHADOW } from 'src/constants/effects';
import { Lamp } from 'src/components/icons/interactions/Lamp';

export interface IFirstCard {
  disabled: boolean;
}

const style: Styles<
  'firstCard' | 'disabled' | 'firstCardText' | 'textEnabled' | 'textDisabled'
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

  firstCardText: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.MEDIUM),
    marginTop: '20px',
  },

  textDisabled: {
    color: COLOR.SECONDARY_400,
  },

  textEnabled: {
    color: COLOR.SECONDARY_200,
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
        style={[style.firstCard, props.disabled ? style.disabled : {}]}
        as="div"
      >
        <Lamp
          fill={
            isHover
              ? props.disabled
                ? COLOR.SECONDARY_500
                : 'url(#paint0_linear)'
              : props.disabled
              ? COLOR.SECONDARY_500
              : COLOR.SECONDARY_400
          }
        ></Lamp>
        <FelaComponent
          style={[
            style.firstCardText,
            props.disabled ? style.textDisabled : style.textEnabled,
          ]}
          as="p"
        >
          Создать
          <br />
          начинание
        </FelaComponent>
      </FelaComponent>
    </div>
  );
};
