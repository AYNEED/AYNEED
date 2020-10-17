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
  RED = '#ED5432',
  PURPLE = '#9668CF',
  WHITE = '#FFFFFF',
  TRANSPARENT = 'transparent',

  // SVG Gradient links
  DEFAULT = 'url(#paint0_linear)'
}

// gradient colors
export const GRADIENT = {
  HORIZONTAL: `linear-gradient(90deg, ${COLOR.PRIMARY_100} 0%, ${COLOR.PRIMARY_300} 100%)`,
  VERTICAL_SUNSET: `linear-gradient(180deg, ${COLOR.PRIMARY_300} 0%, ${COLOR.PRIMARY_100} 100%)`,
  VERTICAL_DAWN: `linear-gradient(180deg, ${COLOR.PRIMARY_100} 0%, ${COLOR.PRIMARY_300} 100%)`,
  DEFAULT: `linear-gradient(90deg, ${COLOR.PRIMARY_400} 0%, ${COLOR.PRIMARY_500} 100%)`,
  GRAY_HORIZONTAL: `linear-gradient(90deg, ${COLOR.SECONDARY_200} 0%, ${COLOR.SECONDARY_400} 100%)`,
} as const;

export const gradient = (background?: string): {} => ({
  background: background || COLOR.TRANSPARENT,
  backgroundClip: background ? 'text' : 'border-box',
  '-webkit-background-clip': background ? 'text' : 'border-box',
  '-webkit-text-fill-color': background ? COLOR.TRANSPARENT : 'currentcolor',
});
