import { LayoutProps } from 'src/components/wrappers/layouts/types';
import { EntryLayout } from 'src/components/wrappers/layouts/EntryLayout';
import { DefaultLayout } from 'src/components/wrappers/layouts/DefaultLayout';

export type Layout = 'entry' | 'notFound' | 'project' | 'profile' | 'default';

export const layoutToComponent: {
  [key in Layout]: React.FC<LayoutProps>;
} = {
  entry: EntryLayout,
  notFound: EntryLayout,
  project: DefaultLayout,
  profile: DefaultLayout,
  default: DefaultLayout,
};
