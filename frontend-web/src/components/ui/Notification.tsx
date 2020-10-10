import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { Msg } from 'src/i18n/Msg';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
// import {font, FONT_SIZE, FONT_WEIGHT} from 'src/constants/fonts'

export type Props = {
  accept: boolean;
  isNew: boolean;
  align?: string;
  name: string;
  skill: string;
  time: string;
  date: string;
};

const style: Styles<
  | 'notificarion'
  | 'avatar'
  | 'nameText'
  | 'skillText'
  | 'actionText'
  | 'dateText'
  | 'button'
  | 'userInfoContainet'
  | 'userTextContainer'
  | 'actionContainer'
  | 'buttonsContainer'
> = {
  notificarion: ({
    isNew,
    align,
  }: {
    isNew: boolean;
    align: { left: string; top: string };
  }) => ({
    position: 'fixed',
    width: '320px',
    height: '189px',
    border: `1px solid ${isNew ? COLOR.PRIMARY_200 : COLOR.SECONDARY_300}`,
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    ...align,
  }),

  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    backgroundColor: COLOR.SECONDARY_400,
  },

  nameText: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.SEMIBOLD),
    color: COLOR.SECONDARY_200,
  },

  skillText: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
    color: COLOR.SECONDARY_200,
  },

  actionText: ({ accept }: { accept: boolean }) => ({
    ...font(FONT_SIZE.L, FONT_WEIGHT.SEMIBOLD),
    color: accept ? COLOR.PRIMARY_300 : COLOR.RED,
  }),

  dateText: {
    ...font(FONT_SIZE.S, FONT_WEIGHT.REGULAR),
    color: COLOR.SECONDARY_300,
  },

  button: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.MEDIUM),
    color: COLOR.SECONDARY_200,
    cursor: 'pointer',
  },

  userInfoContainet: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
  },

  userTextContainer: {},

  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '5px',
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
};

export const Notification: React.FC<Props> = (props) => {
  return (
    <FelaComponent
      align={
        props.align === 'rightTop'
          ? { right: '20px', top: 'auto' }
          : props.align === 'rightBottom'
          ? { right: '20px', bottom: '20px' }
          : props.align === 'leftTop'
          ? { left: 'auto', top: 'auto' }
          : props.align === 'leftBottom'
          ? { left: 'auto', bottom: '20px' }
          : { left: 'auto', top: 'auto' }
      }
      isNew={props.isNew}
      style={style.notificarion}
    >
      <FelaComponent style={style.userInfoContainet}>
        <FelaComponent style={style.avatar}></FelaComponent>
        <FelaComponent style={style.userTextContainer}>
          <FelaComponent style={style.nameText} as={'p'}>
            {props.name}
          </FelaComponent>
          <FelaComponent style={style.skillText} as={'p'}>
            {props.skill}
          </FelaComponent>
        </FelaComponent>
      </FelaComponent>
      <FelaComponent style={style.actionContainer}>
        <FelaComponent accept={props.accept} style={style.actionText} as={'p'}>
          {props.accept ? (
            <Msg id={'web.components.ui.Notification.accept'}></Msg>
          ) : (
            <Msg id={'web.components.ui.Notification.reject'}></Msg>
          )}
        </FelaComponent>
        <FelaComponent
          style={style.dateText}
          as={'p'}
        >{`${props.time} ${props.date}`}</FelaComponent>
      </FelaComponent>
      <FelaComponent style={style.buttonsContainer}>
        {props.accept ? (
          <>
            <FelaComponent style={style.button} as={'p'}>
              <Msg id={'web.routes.User.title'}></Msg>
            </FelaComponent>
            <FelaComponent style={style.button} as={'p'}>
              <Msg id={'web.components.ui.Notification.correspondence'}></Msg>
            </FelaComponent>
          </>
        ) : (
          <>
            <FelaComponent style={style.button} as={'p'}>
              <Msg id={'web.routes.User.title'}></Msg>
            </FelaComponent>
          </>
        )}
      </FelaComponent>
    </FelaComponent>
  );
};
