import React from 'react';
import { useIntl } from 'react-intl';

import { MsgProps, msg } from 'src/i18n/Msg';
import { Tooltip } from 'src/components/ui/Tooltip';
import { ExclamationPoint } from 'src/components/icons/ExclamationPoint';

type Props = {
  name: string;
  type: 'email' | 'password' | 'text';
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler;
  placeholder: MsgProps;
};

export const Input: React.FC<Props> = ({
  name,
  type,
  value,
  error,
  onChange,
  placeholder,
}) => {
  const intl = useIntl();

  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={msg(intl, placeholder)}
      />

      {!!error && (
        <Tooltip text={msg(intl, { id: error as MsgProps['id'] })}>
          <ExclamationPoint />
        </Tooltip>
      )}
    </>
  );
};
