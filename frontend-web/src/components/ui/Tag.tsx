import React, { useState } from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { CloseMini } from 'src/components/icons/interactions/CloseMini';

export interface ITag {
  isActive: boolean;
  tagText: string;
  closeCallback?: VoidFunction;
}

const style: Styles<'tag' | 'tagActive' | 'tagTap' | 'buttonCloseOnHover'> = {
  tag: {
    ...font(FONT_SIZE.S, FONT_WEIGHT.MEDIUM),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
    padding: '5px 9px',
    border: `1px ${COLOR.SECONDARY_400} solid`,
    borderRadius: '14px',
    color: COLOR.SECONDARY_100,
  },

  tagActive: {
    columnGap: '8px',
    cursor: 'pointer',
    nested: {
      ':hover': {
        borderColor: COLOR.PRIMARY_300,
        color: COLOR.PRIMARY_300,
      },
    },
  },

  tagTap: {
    borderColor: COLOR.PRIMARY_200,
    color: COLOR.PRIMARY_200,
  },

  buttonCloseOnHover: {
    nested: {
      ':hover': {
        color: COLOR.SECONDARY_200,
        borderColor: COLOR.SECONDARY_400,
      },
    },
  },
};

export const Tag: React.FC<ITag> = (props) => {
  const [isTap, setIsTap] = useState(false);
  const [buttonCloseOnHover, setHover] = useState(false);

  return (
    <FelaComponent
      style={[
        style.tag,
        props.isActive ? style.tagActive : {},
        isTap ? style.tagTap : {},
        buttonCloseOnHover ? style.buttonCloseOnHover : {},
      ]}
    >
      <p onClick={() => (props.isActive ? setIsTap(!isTap) : null)}>
        {props.tagText}
      </p>
      {props.isActive === true ? (
        <div
          onMouseOut={() => setHover(false)}
          onMouseOver={() => setHover(true)}
          onClick={props.closeCallback}
        >
          <CloseMini
            fill={buttonCloseOnHover ? COLOR.PRIMARY_300 : COLOR.SECONDARY_300}
          ></CloseMini>
        </div>
      ) : null}
    </FelaComponent>
  );
};
