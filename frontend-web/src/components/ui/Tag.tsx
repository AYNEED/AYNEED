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
  'tag' | 'tagActive' | 'tagTap' | 'tagText' | 'hoverBlock' | 'closeButton'
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
    padding: '5px 9px',
    border: `1px ${COLOR.SECONDARY_300} solid`,
    borderRadius: '50px',
    columnGap: '8px',
    cursor: 'pointer',
    color: COLOR.SECONDARY_100,
    transition: 'all .2s ease',
    nested: {
      ':hover': {
        borderColor: COLOR.PRIMARY_300,
        color: COLOR.PRIMARY_300,
      },
    },
  },

  tagTap: {
    borderColor: `${COLOR.PRIMARY_200} !important`,
    transition: 'all .2s ease',
    nested: {
      '>p': {
        color: `${COLOR.SECONDARY_100} !important`,
      },
      ':hover': {
        border: `1px ${COLOR.SECONDARY_300} solid`,
        nested: {
          '>p': {
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

  closeButton: {
    nested: {
      ':hover': {
        nested: {
          '>div>svg>path': {
            fill: COLOR.PRIMARY_300,
          },
        },
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
        props.isActive === true ? style.tagActive : style.tag,
        isTap === true ? style.tagTap : {},
        isCloseButtonOnHover === true ? style.hoverBlock : {},
      ]}
      as="div"
    >
      <p onClick={() => setIsTap(!isTap)} style={{ ...style.tagText }}>
        {props.tagText}
      </p>
      {props.isActive === true ? (
        <FelaComponent style={style.closeButton}>
          <div
            onMouseOut={() => setIsCloseButtonOnHover(false)}
            onMouseOver={() => setIsCloseButtonOnHover(true)}
            onClick={props.closeCallback}
          >
            <CloseMini fill={COLOR.SECONDARY_300}></CloseMini>
          </div>
        </FelaComponent>
      ) : null}
    </FelaComponent>
  );
};
