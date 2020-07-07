import React from 'react';

type Props = {
  text: JSX.Element | string;
  children: JSX.Element;
};

export const Tooltip: React.FC<Props> = ({ text, children }) => (
  <div>
    <div>{text}</div>

    {children}
  </div>
);
