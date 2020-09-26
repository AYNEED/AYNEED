import React from 'react';
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

const style: Styles<
  'tag' | 'tagActive' | 'tagTap' | 'tagText' | 'hoverBlock'
> = {
  tag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
    padding: '5px 9px',
    border: `1px ${COLOR.SECONDARY_400} solid`,
    borderRadius: '50px',
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
    borderColor: `${COLOR.PRIMARY_200} !important`,
    nested: {
      '>p': {
        color: `${COLOR.SECONDARY_100} !important`,
      },
      ':hover': {
        border: `1px ${COLOR.SECONDARY_300} solid`,
        nested: {
          '>div>p': {
            color: `${COLOR.SECONDARY_100} !important`,
          },
        },
      },
    },
  },

  tagText: {
    ...font(FONT_SIZE.S, FONT_WEIGHT.MEDIUM),
    color: 'inherit',
  },

  hoverBlock: {
    nested: {
      ':hover': {
        color: COLOR.SECONDARY_100,
        border: `1px ${COLOR.SECONDARY_300} solid`,
      },
    },
  },
};

export const Tag: React.FC<ITag> = (props) => {
  const [isTap, setIsTap] = React.useState(false);
  const [isCloseButtonOnHover, setIsCloseButtonOnHover] = React.useState(false);

  return (
    <FelaComponent
      style={[
        style.tag,
        props.isActive ? style.tagActive : {},
        isTap ? style.tagTap : {},
        isCloseButtonOnHover ? style.hoverBlock : {},
      ]}
      as="div"
    >
      <div onClick={() => setIsTap(!isTap)}>
        <FelaComponent style={style.tagText} as="p">
          {props.tagText}
        </FelaComponent>
      </div>
      {props.isActive === true ? (
        <div
          onMouseOut={() => setIsCloseButtonOnHover(false)}
          onMouseOver={() => setIsCloseButtonOnHover(true)}
          onClick={props.closeCallback}
        >
          <CloseMini
            fill={
              isCloseButtonOnHover ? COLOR.PRIMARY_300 : COLOR.SECONDARY_300
            }
          ></CloseMini>
        </div>
      ) : null}
    </FelaComponent>
  );
};
