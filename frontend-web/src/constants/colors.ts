export enum COLOR {
  // primary colors
  PRIMARY_100 = '#015496',
  PRIMARY_200 = '#047CAC',
  PRIMARY_300 = '#09BCCF',
  PRIMARY_400 = '#C6EBEF',
  PRIMARY_500 = '#E7F3F5',

  // secondary colors
  SECONDARY_100 = '#334D6E',
  SECONDARY_200 = '#86A3C6',
  SECONDARY_300 = '#C7D9EB',
  SECONDARY_400 = '#E4E9F0',
  SECONDARY_500 = '#FAFBFC',

  // others colors
  ERROR = '#ED5432',
  WHITE = '#FFFFFF',
  TRANSPARENT = 'transparent',

  RED = '#EB5757', // check if it needs to be removed
}

// gradient colors
export const GRADIENTS = {
  HORIZONTAL: `linear-gradient(90deg, ${COLOR.PRIMARY_100} 0%, #09BDD0 100%)`,
  VERTICAL_SUNSET: `linear-gradient(180deg, #09BDD0 0%, ${COLOR.PRIMARY_100} 100%)`,
  VERTICAL_DAWN: `linear-gradient(180deg, ${COLOR.PRIMARY_100} 0%, #09BDD0 100%)`,
  DEFAULT: `linear-gradient(90deg, ${COLOR.PRIMARY_400} 0%, ${COLOR.PRIMARY_500} 100%)`,
} as const;
