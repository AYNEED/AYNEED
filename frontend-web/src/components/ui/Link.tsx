import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FelaComponent } from 'react-fela';

import { COLOR, GRADIENT, gradient } from 'src/constants/colors';
import { Styles } from 'src/utils/fela';
import { makeURL, Scheme } from 'src/navigation';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: Scheme;
  mode?: 'text' | 'block' | 'wrapper';
  color?: COLOR;
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
  text: ({ color }: { color?: COLOR }) => ({
    textDecoration: 'none',
    color: color || COLOR.PRIMARY_100,
    fill: color || COLOR.PRIMARY_100,
    transition: 'color 0.4s, fill 0.4s',

    nested: {
      ':hover': {
        color: COLOR.PRIMARY_300,
        fill: COLOR.PRIMARY_300,
      },
      ':active': {
        color: COLOR.PURPLE,
        fill: COLOR.PURPLE,
      },
      ':focus': {
        color: COLOR.PURPLE,
        fill: COLOR.PURPLE,
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

  return (
    <FelaComponent
      style={[
        props.mode === 'wrapper' ? style.wrapper : style.text,
        props.isActive ? style.gradient : {},
      ]}
      color={props.color}
    >
      {({ className }) => (
        <RouterLink to={to} className={className} {...props}>
          {props.children}
        </RouterLink>
      )}
    </FelaComponent>
  );
};
