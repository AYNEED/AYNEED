import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useFela } from 'react-fela';

import { PropsStyle } from 'src/utils/fela';
import { makeURL, Scheme } from 'src/navigation';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: Scheme;
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
}

const linkStyle: PropsStyle = () => ({
  textDecoration: 'none',
});

export const Link: React.FC<Props> = (props) => {
  const to = makeURL(props.url);
  const { css } = useFela();

  if (!to) {
    return null;
  }

  const newProps = {
    ...props,
    url: undefined,
  };

  return (
    <RouterLink to={to} className={css(linkStyle)} {...newProps}>
      {props.children}
    </RouterLink>
  );
};
