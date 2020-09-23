import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Close } from 'src/components/icons/interactions/Close';

export interface ITag {
  isActive: boolean;
  tagText: string;
}

const style: Styles<'tag' | 'tagActive' | 'tagText'> = {
  tag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    padding: '5px 9px',
    border: `2px ${COLOR.SECONDARY_400} solid`,
    borderRadius: '50px',
  },

  tagActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    padding: '5px 9px',
    border: `2px ${COLOR.SECONDARY_300} solid`,
    borderRadius: '50px',
    columnGap: '8px',
  },

  tagText: {
    ...font(FONT_SIZE.S, FONT_WEIGHT.MEDIUM),
    color: COLOR.SECONDARY_100,
  },
};

export const Tag: React.FC<ITag> = (props) => {
  return (
    <FelaComponent
      style={props.isActive === true ? style.tagActive : style.tag}
      as="div"
    >
      <FelaComponent style={style.tagText} as="p">
        {props.tagText}
      </FelaComponent>
      {props.isActive === true ? (
        <Close fill={COLOR.SECONDARY_300} width={15} height={15}></Close>
      ) : null}
    </FelaComponent>
  );
};
