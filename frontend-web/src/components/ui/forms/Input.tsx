import React from 'react';
import { useIntl } from 'react-intl';

import { MsgProps, msg } from 'src/i18n/Msg';
import { Tooltip } from 'src/components/ui/Tooltip';

type Props = {
  name: string;
  type: 'email' | 'password' | 'text';
  value: string;
  error?: string;
  required?: boolean;
  onChange: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  placeholder: MsgProps;
};

export const Input: React.FC<Props> = ({
  name,
  type,
  value,
  error,
  required,
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
        required={required}
        onChange={onChange}
        placeholder={msg(intl, placeholder)}
      />

      {!!error && (
        <Tooltip text={error}>
          <div />
        </Tooltip>
      )}
    </>
  );
};
