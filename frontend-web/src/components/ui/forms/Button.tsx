import React from 'react';

import { Theme } from 'src/utils/fela';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';

type CommonProps = {
  disabled?: boolean;
  theme?: Theme;
  children?: JSX.Element;
};

export type ButtonLinkProps = CommonProps & {
  url: Scheme;
};

export type ButtonSubmitProps = CommonProps;
export type ButtonResetProps = CommonProps;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  url,
  disabled,
  theme,
  children,
}) => (
  <Link url={url} mode="wrapper" disabled={disabled} theme={theme}>
    <button type="button" disabled={disabled}>{children}</button>
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

export const ButtonReset: React.FC<ButtonResetProps> = ({
  disabled,
  children,
}) => (
  <button type="reset" disabled={disabled}>
    {children}
  </button>
);
