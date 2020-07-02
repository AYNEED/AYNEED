import React from 'react';

import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';

type Props = {
  url: Scheme;
};

export const ButtonLink: React.FC<Props> = ({ url, children }) => (
  <Link url={url}>{children}</Link>
);
