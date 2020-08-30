import React from 'react';

import { Theme } from 'src/utils/fela';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';
import { MsgProps, Msg } from 'src/i18n/Msg';

type CommonProps = {
  text: MsgProps;
  disabled?: boolean;
  theme?: Theme;
};

export type ButtonLinkProps = CommonProps & {
  url: Scheme;
};

export type ButtonSubmitProps = CommonProps;
export type ButtonResetProps = CommonProps;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  url,
  text,
  disabled,
  theme,
}) => (
  <Link url={url} mode="block" disabled={disabled} theme={theme}>
    <button type="button" disabled={disabled}>
      <Msg id={text.id} values={text.values} />
    </button>
  </Link>
);

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  text,
  disabled,
}) => (
  <button type="submit" disabled={disabled}>
    <Msg id={text.id} values={text.values} />
  </button>
);

export const ButtonReset: React.FC<ButtonResetProps> = ({ text, disabled }) => (
  <button type="reset" disabled={disabled}>
    <Msg id={text.id} values={text.values} />
  </button>
);
