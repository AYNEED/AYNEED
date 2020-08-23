import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FelaComponent } from 'react-fela';

import { COLOR, GRADIENT, gradient } from 'src/constants/colors';
import { Styles, Theme } from 'src/utils/fela';
import { makeURL, Scheme } from 'src/navigation';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: Scheme;
  mode?: 'text' | 'block' | 'wrapper';
  theme?: Theme;
  isActive?: boolean;
  isDisabled?: boolean;
}

const style: Styles<'disabled' | 'gradient' | 'text' | 'block' | 'wrapper'> = {
  disabled: {
    color: COLOR.SECONDARY_400,
    fill: COLOR.SECONDARY_400,
    cursor: 'default',
    userSelect: 'none',
  },
  gradient: () => ({
    ...gradient(GRADIENT.HORIZONTAL),

    nested: {
      ':hover': {
        ...gradient(),
      },
      ':active': {
        ...gradient(),
      },
      ':focus': {
        ...gradient(),
      },
    },
  }),
  text: ({ t }: { t?: Theme }) => ({
    textDecoration: 'none',
    color: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PRIMARY_100,
    fill: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PRIMARY_100,
    transition: 'color 0.4s, fill 0.4s',

    nested: {
      ':hover': {
        color: t === 'negative' ? COLOR.SECONDARY_300 : COLOR.PRIMARY_300,
        fill: t === 'negative' ? COLOR.SECONDARY_300 : COLOR.PRIMARY_300,
      },
      ':active': {
        color: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PURPLE,
        fill: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PURPLE,
      },
      ':focus': {
        color: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PURPLE,
        fill: t === 'negative' ? COLOR.SECONDARY_200 : COLOR.PURPLE,
        outline: 'none',
      },
    },
  }),
  block: {},
  wrapper: {},
};

export const Link: React.FC<Props> = (props) => {
  if (props.isDisabled) {
    return (
      <FelaComponent style={style.disabled} as="span">
        {props.children}
      </FelaComponent>
    );
  }

  const to = makeURL(props.url);

  if (!to) {
    return null;
  }

  const newProps = {
    ...props,
    url: undefined,
    mode: undefined,
    theme: undefined,
    isActive: undefined,
    isDisabled: undefined,
  };

  return (
    <FelaComponent
      style={[
        props.mode === 'wrapper' ? style.wrapper : style.text,
        props.isActive ? style.gradient : {},
      ]}
      t={props.theme}
    >
      {({ className }) => (
        <RouterLink to={to} className={className} {...newProps}>
          {props.children}
        </RouterLink>
      )}
    </FelaComponent>
  );
};
