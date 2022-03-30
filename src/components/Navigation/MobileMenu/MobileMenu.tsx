import React, {FC, ReactElement, useState } from 'react';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileDrawer } from './MobileDrawer'
import { Nav } from '..';

interface Props {
  children?: ReactElement
}

export const MobileMenu: FC<Props> = ({children}) => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  return (
    <Nav>
      <MobileMenuButton onClick={() => setMobileDrawer(true)}/>
      {mobileDrawer &&
        <MobileDrawer>
          <button onClick={()=> setMobileDrawer(false) }>Close Menu</button>
          {children && children}
        </MobileDrawer>
      }
    </Nav>
  )
}