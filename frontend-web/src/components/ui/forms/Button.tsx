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
  fontStyle: 'normal',
  width: '100%',
  height: '100%',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'uppercase',
  background: `${COLOR.WHITE}`,
  borderRadius: '8px',
  mixBlendMode: 'lighten',
})

const buttonRule: PropsStyle = () => ({
  position: 'relative',
  height: '50px',
  minWidth: '200px',
  padding: '2px',
  borderRadius: '8px',
  cursor: 'pointer',
  background: `${GRADIENTS.HORIZONTAL}`,

  ':hover': {
    background: `${COLOR.PRIMARY_300}`,
    '> p' : {
      color: `${COLOR.PRIMARY_300}`,
    }
  },

  ':active': {
    background: `${COLOR.PRIMARY_200}`,
    '> p' : {
      color: `${COLOR.PRIMARY_200}`,
    }
  }
})


export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => {
  const { css } = useFela()
  const buttonLink: React.RefObject<HTMLDivElement> = React.createRef()

  
  return(
    <Link url={url} >
      <div className={css(buttonRule)} ref={buttonLink}>
        <p className={css(textRule)}>{children}</p>
      </div>
    </Link>
  )
};


export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  disabled,
  children,
}) => (
  <button type="submit" disabled={disabled}>
    {children}
  </button>
);
