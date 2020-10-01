import { COLOR } from 'src/constants/colors';

export type LayoutStyleProps = {
  backgroundColor: COLOR;
};

export type LayoutProps = LayoutStyleProps & {
  title: JSX.Element | null;
  navExpanded?: boolean;
};
