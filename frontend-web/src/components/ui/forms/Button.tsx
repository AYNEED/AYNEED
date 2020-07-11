import React from 'react';
import { FelaComponent } from 'react-fela';
import { useFela } from 'react-fela';

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

const styles: Styles<'text'> = {
  text: {
    color: COLOR.PRIMARY_500,
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    zIndex: 10,
  },
};

const buttonRule: object = () => ({
  position: 'relative',
  height: 50,
  width: '100%',
  backgroundColor: COLOR.TRANSPARENT,
  border: `2px solid ${COLOR.PRIMARY_500}`,
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  overflow: 'hidden',
})

const rippleHover: string = ("position: absolute; width: 100px; height: 100px; borderRadius: 10px; background: linear-gradient(0deg, #D4EFDF 28.02%, rgba(212, 239, 223, 0) 100%); animation: .5s rippleExpand ease-out; zIndex: 5;")

// const keyframe: string = (`
//   @keyframes rippleExpand{
//     0% { transform: scale(0); opacity: 1; }
//     100% { transform: scale(var(--scale)); opacity: 0; }
//   }
// `)

export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children }) => {
  const { css } = useFela()

  const buttonLink: React.RefObject<HTMLDivElement> = React.createRef()

  const onMouseOverHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {

    if (buttonLink.current !== null) {
      const y: string | number = event.pageY - buttonLink.current.offsetTop
      const x: string | number = event.pageX - buttonLink.current.offsetLeft
      const w: any = buttonLink.current.offsetWidth / 2
      
      const ripple: HTMLElement = document.createElement('span')
      ripple.setAttribute('style', rippleHover)
      ripple.style.top = y + "px"
      ripple.style.left = x + "px"
      ripple.style.setProperty('--scale', w);
      
      buttonLink.current.appendChild(ripple)
    
      setTimeout(() => {
        if (ripple !== null && ripple.parentNode !== null) {
          ripple.parentNode.removeChild(ripple)
        }
      }, 500)
    }
  }


  return(
    <Link onMouseOver={onMouseOverHandler} url={url}>
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
