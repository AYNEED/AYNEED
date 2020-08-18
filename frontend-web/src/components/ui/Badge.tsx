import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  value: JSX.Element | number;
  borderColor: COLOR.WHITE | COLOR.TRANSPARENT;
  backgroundColor: COLOR.PRIMARY_500 | COLOR.ERROR | COLOR.TRANSPARENT;
  position: 'leftCenter' | 'rightCenter' | 'rightBottom';
};

export const Badge: React.FC<Props> = ({
  value,
  borderColor,
  backgroundColor,
  position,
  children,
}) => {
  const dot = <div style={{ borderColor, backgroundColor }}>{value}</div>;

  return (
    <div>
      {position === 'leftCenter' && dot}
      {children}
      {position !== 'leftCenter' && dot}
    </div>
  );
};
