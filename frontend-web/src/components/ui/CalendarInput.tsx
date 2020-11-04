import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Calendar } from 'src/components/icons/interactions/Calendar';

export type Props = {
  disabled: boolean;
};

const style: Styles<'container'> = {
  container: ({ disabled }: { disabled: boolean }) => ({
    display: 'flex',
    flexDirection: 'column',
    nested: {
      '>div>input': {
        flex: 1,
        border: 'none',
        outline: 'none',
        ...font(FONT_SIZE.L, FONT_WEIGHT.REGULAR),
        color: COLOR.SECONDARY_200,
        backgroundColor: COLOR.WHITE,
      },
      '>div>svg': {
        width: '18px',
        height: '18px',
      },
      '>div': {
        display: 'flex',
        alignItems: 'center',
      },
      ':after': {
        content: '" "',
        display: 'block',
        width: '100%',
        height: '2px',
        backgroundColor: disabled ? COLOR.SECONDARY_400 : COLOR.SECONDARY_200,
      },
      ':hover': {
        nested: {
          '>div>input': {
            color: COLOR.SECONDARY_300,
          },
          ':after': {
            backgroundColor: disabled
              ? COLOR.SECONDARY_400
              : COLOR.SECONDARY_300,
          },
        },
      },
    },
  }),
};

export const CalendarInput: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isHover, setIsHover] = React.useState(false);

  const inputOnChange = (event: any) => {
    if (event.target.value.length <= 8) {
      if (event.target.value.length <= 3) {
        setInputValue(
          parseInt(event.target.value.replace(/(\d{2})(\d)/g, '$1 $2'))
            .toString()
            .match(/[0-9/]/g)
            ? parseInt(event.target.value[0] + event.target.value[1]) <= 12
              ? event.target.value.replace(/(\d{2})(\d)/g, '$1  $2')
              : inputValue
            : ''
        );
      } else {
        setInputValue(
          parseInt(event.target.value.replace(/(\d{2})(\d)/g, '$1 $2'))
            .toString()
            .match(/[0-9/]/g)
            ? parseInt(event.target.value[4] + event.target.value[5]) <= 12
              ? event.target.value.replace(/(\d{2})(\d)/g, '$1  $2')
              : inputValue
            : ''
        );
      }
    } else {
      setInputValue(event.target.value.replace(/(\d{4})(\d)/g, '$1  $2'));
    }
  };

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <FelaComponent disabled={props.disabled} style={style.container}>
        <div>
          <input
            placeholder="00 / 00 / 0000"
            type="text"
            disabled={props.disabled}
            maxLength={12}
            value={inputValue}
            onChange={inputOnChange}
          />
          <Calendar
            fill={
              props.disabled
                ? COLOR.SECONDARY_400
                : isHover
                ? COLOR.PRIMARY_300
                : COLOR.SECONDARY_200
            }
          ></Calendar>
        </div>
      </FelaComponent>
    </div>
  );
};
