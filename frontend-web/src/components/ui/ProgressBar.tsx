import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
import { COLOR, GRADIENT, gradient } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';

export interface IProgressBar {
  percent: number;
  progressBarTitle: string;
  disable: boolean;
}

const style: Styles<
  | 'progressBar'
  | 'disabled'
  | 'progressBarTextInfo'
  | 'titleText'
  | 'percentText'
  | 'progressBarLine'
> = {
  progressBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
  },

  disabled: {
    filter: 'grayscale(0.6)',
    opacity: '0.5',
  },

  progressBarTextInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  titleText: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
    color: COLOR.PRIMARY_200,
  },

  percentText: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.SEMIBOLD),
    ...gradient(GRADIENT.VERTICAL_SUNSET),
  },

  progressBarLine: {
    ...gradient(GRADIENT.HORIZONTAL),
    width: '100%',
    height: '8px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'end',
    nested: {
      '::after': {
        content: '" "',
        display: 'block',
        height: '8px',
        borderRadius: '0px 10px 10px 0px',
        backgroundColor: COLOR.SECONDARY_400,
      },
    },
  },
};

export const ProgressBar: React.FC<IProgressBar> = (props) => {
  return (
    <FelaComponent
      style={[style.progressBar, props.disable ? style.disabled : {}]}
      as="div"
    >
      <FelaComponent style={style.progressBarTextInfo} as="div">
        <FelaComponent style={style.titleText} as="p">
          {props.progressBarTitle}
        </FelaComponent>
        <FelaComponent
          style={style.percentText}
          as="p"
        >{`${props.percent}%`}</FelaComponent>
      </FelaComponent>
      <div>
        <FelaComponent
          style={[
            style.progressBarLine,
            { nested: { '::after': { width: `${100 - props.percent}%` } } },
          ]}
          as="div"
        ></FelaComponent>
      </div>
    </FelaComponent>
  );
};
