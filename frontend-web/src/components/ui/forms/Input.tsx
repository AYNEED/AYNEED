import React from 'react';
import { useIntl } from 'react-intl';

import { MsgProps, Msg, msg } from 'src/i18n/Msg';
import { Tooltip } from 'src/components/ui/Tooltip';
import { ExclamationPoint } from 'src/components/icons/ExclamationPoint';

interface CommonProps {
  name: string;
  icon?: JSX.Element;
  onChange: React.ChangeEventHandler;
  className?: string;
}

interface InputProps extends CommonProps {
  value: string;
  error?: string;
  placeholder: MsgProps;
  maxLength?: number;
}

interface InputCheckabeProps extends CommonProps {
  value: string;
  label: MsgProps;
  checked?: boolean;
}

const Input: React.FC<
  InputProps & {
    type: 'password' | 'text';
  }
> = ({
  name,
  icon,
  type,
  value,
  error,
  onChange,
  placeholder,
  maxLength,
  className,
}) => {
  const intl = useIntl();

  return (
    <>
      {icon}

      <input
        className={className}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
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

const InputChecable: React.FC<
  InputCheckabeProps & {
    type: 'checkbox' | 'radio';
  }
> = ({ name, type, value, label, checked, onChange, className }) => (
  <label className={checked === true ? className : ''}>
    <input
      name={name}
      type={type}
      value={value}
      checked={checked}
      onChange={onChange}
    />

    <Msg id={label.id} values={label.values} />
  </label>
);

export const InputText: React.FC<InputProps> = (props) => (
  <Input {...props} type="text" />
);

export const InputEmail: React.FC<InputProps> = InputText;

export const InputPassword: React.FC<InputProps> = (props) => (
  <Input {...props} type="password" />
);

export const InputCheckbox: React.FC<InputCheckabeProps> = (props) => (
  <InputChecable {...props} type="checkbox" />
);

export const InputRadio: React.FC<InputCheckabeProps> = (props) => (
  <InputChecable {...props} type="radio" />
);
