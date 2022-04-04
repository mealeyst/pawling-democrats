import React, {FC, ReactElement, useState } from 'react';
import { HamburgerButton } from './HamburgerButton';
import { MobileDrawer } from './MobileDrawer'
import { Nav } from '..';
import { CloseButton } from './CloseButton';
import { MobileDrawerHeader } from './MobileDrawerHeader';

interface Props {
  children?: ReactElement
}

export const MobileMenu: FC<Props> = ({children}) => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  return (
    <Nav>
      <HamburgerButton onClick={() => setMobileDrawer(true)}/>
        <MobileDrawer show={mobileDrawer}>
          <MobileDrawerHeader>
            <CloseButton onClick={()=> setMobileDrawer(false) }>Close Menu</CloseButton>
          </MobileDrawerHeader>
          {children && children}
        </MobileDrawer>
    </Nav>
  )
}