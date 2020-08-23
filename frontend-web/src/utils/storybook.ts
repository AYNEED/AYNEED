import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';

export const bordered = {
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: COLOR.SECONDARY_400,
};

export const card = {
  borderRadius: 8,
  width: 230,
  height: 80,
  marginTop: 10,
  marginRight: 30,
};

export const commonStyle: Styles<'thead' | 'code'> = {
  thead: {
    ...font(FONT_SIZE.M, FONT_WEIGHT.SEMIBOLD),
    textAlign: 'left',

    nested: {
      '> th': {
        paddingRight: 10,
      },
    },
  },
  code: {
    ...bordered,
    ...font(FONT_SIZE.XS, FONT_WEIGHT.REGULAR),
    display: 'inline-block',
    borderRadius: 3,
    padding: 5,
    marginTop: 10,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: COLOR.SECONDARY_500,
    whiteSpace: 'nowrap',
  },
};
