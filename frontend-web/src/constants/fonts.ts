export enum FONT_SIZE {
  XS = '10px',
  S = '12px',
  M = '14px',
  L = '16px',
  XL = '18px',
  XXL = '24px'
}

const LineHeight: { [TKey in FONT_SIZE]: string } = {
  [FONT_SIZE.XS]: '10px',
  [FONT_SIZE.S]: '12px',
  [FONT_SIZE.M]: '14px',
  [FONT_SIZE.L]: '16px',
  [FONT_SIZE.XL]: '28px',
  [FONT_SIZE.XXL]: '24px',
};

export enum FONT_WEIGHT {
  REGULAR = 400,
  MEDIUM = 500,
  SEMIBOLD = 600,
  BOLD = 700,
}

export const font = (
  fontSize: FONT_SIZE = FONT_SIZE.M,
  fontWeight: FONT_WEIGHT = FONT_WEIGHT.REGULAR
) => ({
  fontSize,
  fontWeight,
  lineHeight: LineHeight[fontSize],
});
