import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { useIntl } from 'react-intl';
import { FelaComponent } from 'react-fela';

import { MsgProps, Msg, msg } from 'src/i18n/Msg';
import { Tooltip } from 'src/components/ui/Tooltip';
import { ExclamationPoint } from 'src/components/icons/old_design/ExclamationPoint';
import { CheckPoint } from 'src/components/icons/interactions/CheckPoint';
import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { COLOR } from 'src/constants/colors';

interface CommonProps {
  name: string;
  icon?: JSX.Element;
  onChange: React.ChangeEventHandler;
  className?: string;
  disabled?: boolean;
}

export interface InputProps extends CommonProps {
  value: string;
  error?: string;
  placeholder: MsgProps;
  maxLength?: number;
}

export interface InputTextProps extends InputProps {
  mode: 'display' | 'orig';
}

export interface InputCheckabeProps extends CommonProps {
  value: string;
  label: MsgProps;
  checked?: boolean;
}

const style: Styles<
  'inputOrig' | 'inputCheckable' | 'inputSwitch' | 'inputText' | 'inputSearch'
> = {
  inputSearch: {
    display: 'flex',
    flexDirection: 'row',
    flex: 2,
  },
  inputOrig: ({
    error,
    disabled,
  }: {
    error?: string | undefined;
    disabled?: boolean;
  }) => ({
    '-webkit-transition': 'border 0.5s ease',
    '-moz-transition': 'border 0.5s ease',
    '-o-transition': 'border 0.5s ease',
    transition: 'border 0.5s ease',
    display: 'flex',
    width: '250px',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom:
      !!error === true
        ? `2px solid ${COLOR.RED} !important`
        : `2px solid ${!disabled ? COLOR.SECONDARY_200 : COLOR.SECONDARY_400}`,
    userSelect: disabled ? 'none' : 'auto',
    nested: {
      '> input': {
        ...font(FONT_SIZE.S, FONT_WEIGHT.REGULAR),
        flex: 2,
        height: '25px',
        border: 'none',
        outline: 'none',
        background: COLOR.WHITE,
        color: COLOR.SECONDARY_200,
      },
      ':hover': {
        color: COLOR.SECONDARY_300,
        borderBottom: `2px solid ${COLOR.SECONDARY_300}`,
        nested: {
          '> input::placeholder': {
            color: COLOR.SECONDARY_300,
          },
        },
      },
      ':active': {
        color: COLOR.SECONDARY_100,
        borderBottom: `2px solid ${COLOR.SECONDARY_400}`,
        nested: {
          '> input::placeholder': {
            color: COLOR.SECONDARY_100,
          },
        },
      },
      ':focus': {
        color: COLOR.SECONDARY_200,
        borderBottom: `2px solid ${COLOR.SECONDARY_200}`,
      },
    },
  }),
  inputText: ({
    disabled,
    mode,
  }: {
    disabled?: boolean;
    mode?: 'orig' | 'display';
  }) => ({
    '-webkit-transition': 'border 0.5s ease',
    '-moz-transition': 'border 0.5s ease',
    '-o-transition': 'border 0.5s ease',
    transition: 'border 0.5s ease',

    display: 'flex',
    width: '505px',
    height: '131px',
    border: !disabled
      ? mode !== 'display'
        ? `1px solid ${COLOR.SECONDARY_200}`
        : 'none'
      : 'none',
    boxSizing: 'border-box',
    nested: {
      '> textarea': {
        ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
        padding: !disabled ? (mode !== 'display' ? '5px' : 'none') : 'none',
        flex: 2,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        resize: 'none',
        color: !disabled ? COLOR.SECONDARY_100 : COLOR.SECONDARY_400,
        background: !disabled ? 'none' : COLOR.WHITE,
      },
      '> textarea::placeholder': {
        color: COLOR.SECONDARY_200,
      },
      '> textarea:hover::placeholder':
        mode !== 'display'
          ? {
              color: COLOR.SECONDARY_300,
            }
          : {},
      ':hover':
        mode !== 'display'
          ? {
              color: COLOR.SECONDARY_300,
              borderColor: COLOR.SECONDARY_300,
            }
          : {},
      ':focus':
        mode !== 'display'
          ? {
              borderBottom: `2px solid ${COLOR.SECONDARY_400}`,
            }
          : {},
    },
  }),
  inputSwitch: ({ disabled }: { disabled?: boolean }) => ({
    disabledOrig: {
      borderColor: COLOR.SECONDARY_400 + ' !important',
      userSelect: 'none',
    },
    nested: {
      '>label>input': {
        '-webkit-transition': 'background-position 0.5s ease, border 0.5s ease',
        '-moz-transition': 'background-position 0.5s ease, border 0.5s ease',
        '-o-transition': 'background-position 0.5s ease, border 0.5s ease',
        transition: 'background-position 0.5s ease, border 0.5s ease',

        '-webkit-appearance': 'none',
        '-ms-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        width: '40px',
        height: '24px',
        border: `2px solid ${COLOR.SECONDARY_400}`,
        borderRadius: '12px',
        boxSizing: 'border-box',
        outline: 'none',
        backgroundImage: `url('data:image/svg+xml, ${encodeURIComponent(
          `<svg fill="${
            !disabled ? COLOR.PRIMARY_300 : COLOR.SECONDARY_400
          }" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="8" /></svg>`
        )}')`,
        backgroundRepeat: 'no-repeat',
        nested: {
          ':hover': {
            borderColor: COLOR.SECONDARY_300,
            cursor: 'pointer',
            outline: 'none',
          },
          ':checked': {
            backgroundPositionX: '16px',
          },
        },
      },
    },
  }),
  inputCheckable: ({
    type,
    disabled,
  }: {
    disabled?: boolean;
    type?: 'checkbox' | 'radio' | 'switch';
  }) => ({
    nested: {
      '>label>input': {
        '-webkit-transition': 'background 0.5s ease, border 0.5s ease',
        '-moz-transition': 'background 0.5s ease, border 0.5s ease',
        '-o-transition': 'background 0.5s ease, border 0.5s ease',
        transition: 'background 0.5s ease, border 0.5s ease',

        '-webkit-appearance': 'none',
        '-ms-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        width: type === 'switch' ? '40px' : '24px',
        height: '24px',
        border: `2px solid ${COLOR.SECONDARY_400}`,
        borderRadius: type === 'checkbox' ? '2px' : '12px',
        boxSizing: 'border-box',
        outline: 'none',
        nested: {
          ':hover':
            type === 'checkbox'
              ? {
                  borderColor: COLOR.SECONDARY_300,
                  cursor: 'pointer',
                  outline: 'none',
                  backgroundImage: `url('data:image/svg+xml, ${encodeURIComponent(
                    ReactDOMServer.renderToStaticMarkup(
                      <CheckPoint fill={COLOR.SECONDARY_400} />
                    )
                  )}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }
              : {
                  borderColor: COLOR.SECONDARY_300,
                  cursor: 'pointer',
                  outline: 'none',
                  backgroundImage: `url('data:image/svg+xml, ${encodeURIComponent(
                    `<svg fill="${COLOR.SECONDARY_400}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><circle cx="10.25" cy="10.25" r="8" /></svg>`
                  )}')`,
                  backgroundRepeat: 'no-repeat',
                },
          ':checked':
            type === 'checkbox'
              ? {
                  borderColor: COLOR.SECONDARY_300,
                  backgroundImage: `url('data:image/svg+xml, ${encodeURIComponent(
                    ReactDOMServer.renderToStaticMarkup(
                      <CheckPoint
                        fill={
                          !disabled ? COLOR.PRIMARY_300 : COLOR.SECONDARY_400
                        }
                      />
                    )
                  )}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  outline: 'none',
                }
              : {
                  backgroundImage: `url('data:image/svg+xml, ${encodeURIComponent(
                    `<svg fill="${
                      !disabled ? COLOR.PRIMARY_300 : COLOR.SECONDARY_400
                    }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><circle cx="10.25" cy="10.25" r="8" /></svg>`
                  )}')`,
                  backgroundRepeat: 'no-repeat',
                  outline: 'none',
                },
        },
      },
    },
  }),
};

const Input: React.FC<
  InputProps & {
    type: 'password' | 'text' | 'search';
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
  disabled,
}) => {
  const intl = useIntl();

  return (
    <FelaComponent
      disabled={disabled}
      error={error}
      style={
        !className
          ? type === 'search'
            ? style.inputSearch
            : style.inputOrig
          : {}
      }
    >
      {icon}
      <input
        disabled={disabled}
        className={className}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={msg(intl, placeholder)}
      />
      {!!error && <ExclamationPoint />}
      {!!error && <Tooltip text={msg(intl, { id: error as MsgProps['id'] })} />}
    </FelaComponent>
  );
};

const InputChecable: React.FC<
  InputCheckabeProps & {
    type: 'checkbox' | 'radio' | 'switch' | 'search';
  }
> = ({ name, type, value, label, checked, onChange, className, disabled }) => {
  return (
    <FelaComponent
      type={type}
      disabled={disabled}
      style={
        !className
          ? type === 'switch'
            ? style.inputSwitch
            : style.inputCheckable
          : {}
      }
    >
      <label className={className}>
        <input
          name={name}
          type={type === 'switch' ? 'checkbox' : type}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label && <Msg id={label.id} values={label.values} />}
      </label>
    </FelaComponent>
  );
};

export const InputTextArea: React.FC<InputTextProps> = ({
  name,
  mode,
  value,
  error,
  onChange,
  placeholder,
  maxLength,
  disabled,
}) => {
  const intl = useIntl();
  return (
    <FelaComponent
      mode={mode}
      disabled={disabled}
      error={error}
      style={style.inputText}
    >
      <textarea
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={msg(intl, placeholder)}
      />
    </FelaComponent>
  );
};

export const InputSearch: React.FC<InputProps> = (props) => (
  <Input {...props} type="search" />
);

export const InputText: React.FC<InputProps> = (props) => (
  <Input {...props} type="text" />
);

export const InputEmail: React.FC<InputProps> = (props) => (
  <Input {...props} type="text" />
);

export const InputPassword: React.FC<InputProps> = (props) => (
  <Input {...props} type="password" />
);

export const InputCheckbox: React.FC<InputCheckabeProps> = (props) => (
  <InputChecable {...props} type="checkbox" />
);

export const InputRadio: React.FC<InputCheckabeProps> = (props) => (
  <InputChecable {...props} type="radio" />
);

export const InputSwitch: React.FC<InputCheckabeProps> = (props) => (
  <InputChecable {...props} type="switch" />
);
