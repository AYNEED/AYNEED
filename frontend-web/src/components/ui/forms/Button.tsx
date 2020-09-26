import React, { useRef, useEffect, useState } from 'react';
import { FelaComponent } from 'react-fela';

import { Styles, Theme } from 'src/utils/fela';
import { COLOR, gradient, GRADIENT } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';
import { MsgProps, Msg } from 'src/i18n/Msg';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: MsgProps;
  mode: 'origin' | 'text' | 'social' | 'icon' | 'link' | 'navigation';
  disabled?: boolean;
  theme?: Theme;
  type?: 'submit' | 'reset' | undefined;
}

export type ButtonLinkProps = Props & {
  url: Scheme;
};

export type ButtonProps = Props;

const style: Styles<
  | 'origButton'
  | 'textButton'
  | 'disabledOrigin'
  | 'disabledText'
  | 'block'
  | 'wrapper'
  | 'textMark'
  | 'navMark'
> = {
  origButton: {
    ...font(FONT_SIZE.L, FONT_WEIGHT.SEMIBOLD),
    borderRadius: '6px',
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.WHITE,
    border: 'none',
    outline: 'none',
    padding: '3px',
    mixBlendMode: 'screen',
    cursor: 'pointer',
  },
  textButton: ({ mode, text }: { mode?: string; text?: boolean }) => ({
    ...font(FONT_SIZE.M, FONT_WEIGHT.MEDIUM),
    transition: 'color 0.4s, fill 0.4s',
    height: '24px',
    width: mode === 'navigation' && text ? '236px' : 'auto',
    border: 'none',
    outline: 'none',
    background: COLOR.TRANSPARENT,
    color: COLOR.SECONDARY_200,
    fill: COLOR.PRIMARY_300,
    cursor: 'pointer',
    nested: {
      ':hover': {
        color: COLOR.PRIMARY_300,
        fill: COLOR.PRIMARY_300,
      },
      ':active': {
        color: mode === 'text' ? COLOR.PRIMARY_100 : COLOR.PRIMARY_200,
        fill: COLOR.PRIMARY_200,
      },
      ':focus': {
        ...gradient(
          mode === ('text' || 'navigation')
            ? GRADIENT.HORIZONTAL
            : COLOR.PRIMARY_100
        ),
        fill: COLOR.PRIMARY_100,
        nested: {
          '> div': {
            backgroundImage: GRADIENT.HORIZONTAL,
          },
        },
      },
    },
  }),
  disabledOrigin: {
    background: COLOR.SECONDARY_400 + ' !important',
    cursor: 'default !important',
    userSelect: 'none',
  },
  disabledText: {
    color: COLOR.SECONDARY_400 + ' !important',
    fill: COLOR.SECONDARY_400 + ' !important',
    cursor: 'default !important',
    userSelect: 'none',
  },
  block: ({ mode }: { mode?: string }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: mode !== 'navigation' ? 'center' : 'none',
    nested:
      mode === 'text' || mode === 'navigation'
        ? {
            '> *': {
              margin: '0 10px',
            },
          }
        : {
            '> *': {
              margin: '0 7px',
            },
          },
  }),
  wrapper: ({ t }: { t?: Theme }) => ({
    transition: 'background 0.4s',
    borderRadius: '8px',
    background: t === 'negative' ? COLOR.SECONDARY_200 : GRADIENT.HORIZONTAL,
    padding: '2px',
    width: '250px',
    height: '50px',
    nested: {
      ':hover': {
        background: t === 'negative' ? COLOR.SECONDARY_300 : COLOR.PRIMARY_300,
      },
      ':active': {
        background: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PRIMARY_200,
      },
      ':focus': {
        background: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PRIMARY_200,
      },
    },
  }),
  textMark: ({ width }: { width?: string }) => ({
    width: width,
    position: 'absolute',
    borderRadius: '2px',
    marginTop: '10px',
    height: '2px',
    backgroundImage: COLOR.TRANSPARENT,
    transition: 'background-image 0.5s',
  }),
  navMark: {
    height: '24px',
    width: '4px',
    marginLeft: 'auto',
    background: `${COLOR.PRIMARY_300} !important`,
    borderRadius: '3px 0px 0px 3px',
  },
};

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => (
  <Link url={props.url} mode="wrapper">
    <Button {...props} />
  </Link>
);

export const Button: React.FC<ButtonProps> = (props) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (textRef.current?.offsetWidth) {
      setWidth(textRef.current?.offsetWidth);
    }
  }, [textRef]);

  const ButtonComponent = (
    <FelaComponent
      mode={props.mode}
      text={!!props.text}
      style={[
        props.mode === 'origin'
          ? style.origButton
          : props.mode === 'text' || props.mode === 'navigation'
          ? style.textButton
          : {},
        props.children ? style.block : {},
        props.disabled && props.mode !== 'origin' ? style.disabledText : {},
      ]}
    >
      {({ className }) => (
        <button
          className={className}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={props.disabled}
        >
          {props.children}
          {props.text && (
            <span ref={textRef}>
              <Msg id={props.text.id} values={props.text.values} />
            </span>
          )}
          {props.text && !props.children && (
            <FelaComponent style={style.textMark} width={width}></FelaComponent>
          )}
          {props.mode === 'navigation' && focused && props.text && (
            <FelaComponent style={style.navMark}></FelaComponent>
          )}
        </button>
      )}
    </FelaComponent>
  );

  return (
    <FelaComponent
      style={[
        props.mode === 'origin' ? style.wrapper : {},
        props.disabled && props.mode === 'origin' ? style.disabledOrigin : {},
      ]}
      t={props.theme}
    >
      {ButtonComponent}
    </FelaComponent>
  );
};
