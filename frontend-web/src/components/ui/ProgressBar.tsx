import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';
import { COLOR, GRADIENT, gradient } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Msg, MsgProps } from 'src/i18n/Msg';

export interface IProgressBar {
  percent: number;
  progressBarTitle: MsgProps;
  negative: boolean;
}

const style: Styles<
  | 'progressBar'
  | 'negatived'
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

  negatived: {
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

  progressBarLine: ({ percent }: { percent: number }) => ({
    background: GRADIENT.HORIZONTAL,
    width: '100%',
    height: '8px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    nested: {
      '::after': {
        content: '" "',
        display: 'block',
        height: '8px',
        width: `${percent}%`,
        borderRadius: `${percent === 100 ? '10px' : '0px 10px 10px 0px'}`,
        backgroundColor: COLOR.SECONDARY_400,
      },
    },
  }),
};

export const ProgressBar: React.FC<IProgressBar> = (props) => {
  return (
    <FelaComponent
      style={[style.progressBar, props.negative ? style.negatived : {}]}
    >
      <FelaComponent style={style.progressBarTextInfo}>
        <FelaComponent style={style.titleText} as="p">
          <Msg id={props.progressBarTitle.id}></Msg>
        </FelaComponent>
        <FelaComponent
          style={style.percentText}
          as="p"
        >{`${props.percent}%`}</FelaComponent>
      </FelaComponent>
      <div>
        <FelaComponent
          percent={100 - props.percent}
          style={style.progressBarLine}
        ></FelaComponent>
      </div>
    </FelaComponent>
  );
};
