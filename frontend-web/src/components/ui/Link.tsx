import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeURL, Scheme } from 'src/navigation';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: Scheme;
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
}

export const Link: React.FC<Props> = (props) => {
  const to = makeURL(props.url);

  if (!to) {
    return null;
  }

  return (
    <RouterLink to={to} {...props}>
      {props.children}
    </RouterLink>
  );
};
