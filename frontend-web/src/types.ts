import { COLOR } from 'src/constants/colors';

export type IconBaseProps = {
  fill?: COLOR;
  width?: number;
  height?: number;
  filled?: boolean;
};

export type IconPropsWithFilled = IconBaseProps & {
  filled?: boolean;
};
