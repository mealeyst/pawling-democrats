import React, {FC, ReactElement, useEffect, useState } from 'react';
import { HamburgerButton } from './HamburgerButton';
import { MobileDrawer } from './MobileDrawer'
import { Nav } from '..';
import { CloseButton } from './CloseButton';
import { MobileDrawerHeader } from './MobileDrawerHeader';
import { translations } from '../../../theme/Animations/Translate';

interface Props {
  children?: ReactElement
}

const defaultTranslateIn = {
  'from': {
    coord1: '0px',
    coord2: '-100%'
  },
  'to': {
    coord1: '0px',
    coord2: '0px'
  }
}

const defaultTranslateOut = {
  'from': {
    coord1: '0px',
    coord2: '0px'
  },
  'to': {
    coord1: '0px',
    coord2: '-100%'
  }
}

export const MobileMenu: FC<Props> = ({children}) => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [animation, setAnimation] = useState<keyof typeof translations>('translateIn');
  useEffect(() => {
    mobileDrawer ? setAnimation('translateIn') : setAnimation('translateOut')
  }, [mobileDrawer])
  return (
    <Nav>
      <HamburgerButton onClick={() => setMobileDrawer(true)}/>
        <MobileDrawer
        animation={animation}
        show={mobileDrawer}
        translateInCoords={defaultTranslateIn}
        translateOutCoords={defaultTranslateOut}
        duration={250}>
          <MobileDrawerHeader>
            <CloseButton onClick={()=> setMobileDrawer(false) }>Close Menu</CloseButton>
          </MobileDrawerHeader>
          {children && children}
        </MobileDrawer>
    </Nav>
  )
}