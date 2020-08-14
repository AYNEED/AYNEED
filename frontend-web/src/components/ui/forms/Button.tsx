import React from 'react';
import { FelaComponent } from 'react-fela';
import { useFela } from 'react-fela';

import { Styles, PropsStyle } from 'src/utils/fela';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';
import { COLOR } from 'src/constants/colors';


type ButtonLinkProps = {
  url: Scheme;
};

type ButtonSubmitProps = {
  disabled?: boolean;
};

const styles: Styles<'text'> = {
  text: {
    // color: COLOR.PRIMARY_500,
    color: 'linear-gradient(90deg, #015496 0%, #09BDD0 100%) !important',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
  },
};

const buttonRule: PropsStyle = () => ({
  position: 'relative',
  height: '50px',
  width: '200px',
  backgroundColor: COLOR.TRANSPARENT,
  border: '2px solid',
  borderColor: 'linear-gradient(180deg, #09BDD0 0%, #015496 100%)',
  borderRadius: '8px',
  // border: `2px solid ${COLOR.PRIMARY_500}`,
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    border: `2px solid ${COLOR.PRIMARY_300}`,
    color: `${COLOR.PRIMARY_300}`
  }
})


export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => {
  const { css } = useFela()
  const buttonLink: React.RefObject<HTMLDivElement> = React.createRef()


  const onMouseDownHandler = () => {
    if (buttonLink.current !== null) {
      buttonLink.current.style.borderColor = `${COLOR.PRIMARY_200}`
      buttonLink.current.style.color = `${COLOR.PRIMARY_200}`
    }
  }
  
  return(
    <Link url={url} onMouseDown={onMouseDownHandler}>
      <div className={css(buttonRule)} ref={buttonLink}>
        <FelaComponent style={styles.text}>{children}</FelaComponent>
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
