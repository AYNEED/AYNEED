import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useFela } from 'react-fela';

import { makeURL, Scheme } from 'src/navigation';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: Scheme;
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
}

const linkStyle: object = () => ({
  textDecoration: 'none',
});

export const Link: React.FC<Props> = (props) => {
  const to = makeURL(props.url);
  const { css } = useFela();

  if (!to) {
    return null;
  }

  return (
    <RouterLink to={to} className={css(linkStyle)} {...props}>
      {props.children}
    </RouterLink>
  );
};
