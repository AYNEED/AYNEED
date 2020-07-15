import React from 'react';
import { useIntl } from 'react-intl';

import { MsgProps, Msg, msg } from 'src/i18n/Msg';
import { Tooltip } from 'src/components/ui/Tooltip';
import { ExclamationPoint } from 'src/components/icons/ExclamationPoint';

interface CommonProps {
  name: string;
  onChange: React.ChangeEventHandler;
}

interface InputProps extends CommonProps {
  type: 'email' | 'password' | 'text';
  value: string;
  error?: string;
  placeholder: MsgProps;
}

interface InputCheckboxProps extends CommonProps {
  value: boolean;
  label: MsgProps;
}

export const Input: React.FC<InputProps> = ({
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

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
  name,
  value,
  label,
  onChange,
}) => (
  <label>
    <input name={name} type="checkbox" checked={value} onChange={onChange} />

    <Msg id={label.id} values={label.values} />
  </label>
);
