import React from 'react';
import { FelaComponent } from 'react-fela';
import { useFela } from 'react-fela';

import { Styles, PropsStyle } from 'src/utils/fela';
import { Link } from 'src/components/ui/Link';
import { Scheme } from 'src/navigation';
import { COLOR, GRADIENTS } from 'src/constants/colors';



type ButtonLinkProps = {
  url: Scheme;
};

type ButtonSubmitProps = {
  disabled?: boolean;
};

const styles: Styles<'border' | 'text'> = {
  border: {
    position: 'relative',
    height: '50px',
    minWidth: '200px',
    padding: '2px',
    background: `${GRADIENTS.HORIZONTAL} !important`,
    // color: 
    borderRadius: '8px',

    ':hover': {
      background: `${COLOR.PRIMARY_300}`,
      color: `${COLOR.PRIMARY_300}`
    }
  },
  text: {

  }
};


const buttonRule: PropsStyle = () => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  padding: '2px',
  backgroundColor: COLOR.WHITE,
  // border: '2px solid',
  // borderColor: 'linear-gradient(180deg, #09BDD0 0%, #015496 100%)',
  borderRadius: '8px',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'uppercase',
  cursor: 'pointer',
})


export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => {
  const { css } = useFela()
  const buttonLink: React.RefObject<HTMLDivElement> = React.createRef()


  const tabHandler = () => {
    if (buttonLink.current !== null) {
      buttonLink.current.style.borderColor = `${COLOR.PRIMARY_200}`
      buttonLink.current.style.color = `${COLOR.PRIMARY_200}`
    }
  }
  
  return(
    <Link url={url} onMouseDown={tabHandler}>
      <FelaComponent style={styles.border}>
        <div className={css(buttonRule)} ref={buttonLink}>
          <FelaComponent style={styles.text}>
            {children}
          </FelaComponent>
        </div>
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
