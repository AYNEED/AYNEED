import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';
import { COLOR } from 'src/constants/colors';

type ButtonLinkProps = {
  url: Scheme;
};

type ButtonSubmitProps = {
  disabled?: boolean;
};

const styles: Styles<'button' | 'text'> = {
  button: {
    position: 'relative',
    height: 50,
    width: '100%',
    backgroundColor: COLOR.TRANSPARENT,
    border: `2px solid ${COLOR.PRIMARY_500}`,
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.PRIMARY_500,
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
  },
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => {
  const onMouseOverHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    // const x = 

    console.log(event.pageX)
    // console.log(linkRef.offsetTop)
  }

  return(
    <Link onMouseOver={onMouseOverHandler} url={url}>
      <FelaComponent style={styles.button}>
        <FelaComponent style={styles.text}>{children}</FelaComponent>
      </FelaComponent>
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
