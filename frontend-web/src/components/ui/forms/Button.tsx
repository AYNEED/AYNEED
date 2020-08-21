import React from 'react';
// import { FelaComponent } from 'react-fela';
import { useFela } from 'react-fela';

import { PropsStyle } from 'src/utils/fela';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';
import { COLOR, GRADIENTS } from 'src/constants/colors';

type ButtonLinkProps = {
  url: Scheme;
};

type ButtonSubmitProps = {
  disabled?: boolean;
};

const textRule: PropsStyle = () => ({
  width: '100%',
  height: '100%',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'uppercase',
  background: `${COLOR.WHITE}`,
  borderRadius: '6px',
  mixBlendMode: 'lighten',
});

const buttonRule: PropsStyle = () => ({
  position: 'relative',
  height: '50px',
  minWidth: '200px',
  padding: '2px',
  borderRadius: '8px',
  background: `${GRADIENTS.HORIZONTAL}`,
  cursor: 'pointer',

  ':hover': {
    background: `${COLOR.PRIMARY_300}`,
    '> div': {
      color: `${COLOR.PRIMARY_300}`,
    },
  },

  ':active': {
    background: `${COLOR.PRIMARY_200}`,
    '> div': {
      color: `${COLOR.PRIMARY_200}`,
    },
  },
});

export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => {
  const { css } = useFela();
  const buttonLink: React.RefObject<HTMLDivElement> = React.createRef();

  return (
    <Link url={url}>
      <div className={css(buttonRule)} ref={buttonLink}>
        <div className={css(textRule)}>{children}</div>
      </div>
    </Link>
  );
};

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  disabled,
  children,
}) => (
  <button type="submit" disabled={disabled}>
    {children}
  </button>
);
