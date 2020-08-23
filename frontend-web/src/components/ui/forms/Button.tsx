import React from 'react';

import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';

type ButtonLinkProps = {
  url: Scheme;
};

type ButtonSubmitProps = {
  disabled?: boolean;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => (
  <Link url={url} mode="wrapper">
    <button type="button">{children}</button>
  </Link>
);

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  disabled,
  children,
}) => (
  <button type="submit" disabled={disabled}>
    {children}
  </button>
);
