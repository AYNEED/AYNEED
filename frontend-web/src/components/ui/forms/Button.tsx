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

// const styles: Styles<'border' | 'text'> = {
//   border: {
//     position: 'relative',
//     height: '50px',
//     minWidth: '200px',
//     padding: '2px',
//     background: `${GRADIENTS.HORIZONTAL} !important`,
//     // color: 
//     borderRadius: '8px',

//     ':hover': {
//       background: `${COLOR.PRIMARY_300}`,
//       color: `${COLOR.PRIMARY_300}`
//     }
//   },
//   text: {

//   }
// };


const buttonRule: PropsStyle = () => ({
  position: 'relative',
  height: '50px',
  minWidth: '200px',
  padding: '2px',
  backgroundColor: COLOR.WHITE,
  border: '2px solid',
  borderImageSlice: 1,
  borderImageSource: `${GRADIENTS.HORIZONTAL}`,
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

  ':hover': {
    borderImageSource: `${COLOR.PRIMARY_300}`,
    color: `${COLOR.PRIMARY_300}`
  }
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
      <div className={css(buttonRule)} ref={buttonLink}>
        {children}
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
