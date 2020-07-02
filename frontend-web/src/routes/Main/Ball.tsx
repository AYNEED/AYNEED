import React from 'react';

import { MsgProps, Msg } from 'src/i18n/Msg';

type Props = MsgProps;

export const Ball: React.FC<Props> = ({ id, values, children }) => (
  <div>
    {children}

    <Msg id={id} values={values} />
  </div>
);
