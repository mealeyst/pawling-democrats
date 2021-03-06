import styled from 'styled-components'
import React, { ReactElement, useEffect, useState } from 'react'
import { HamburgerButton } from './HamburgerButton'
import { MobileDrawer } from './MobileDrawer'
import { Nav } from '..'
import { CloseButton } from './CloseButton'
import { MobileDrawerHeader } from './MobileDrawerHeader'
import { translations } from '../../theme/Animations/Translate'
import { query } from '../../theme/mediaQueies'

interface Props {
  className?: string
  children?: ReactElement
  drawerOpen?: boolean
  setDrawer: (inState: boolean) => void
}

const defaultTranslateIn = {
  from: {
    coord1: '0px',
    coord2: '-100%',
  },
  to: {
    coord1: '0px',
    coord2: '0px',
  },
}

const defaultTranslateOut = {
  from: {
    coord1: '0px',
    coord2: '0px',
  },
  to: {
    coord1: '0px',
    coord2: '-100%',
  },
}

export const MobileMenu = styled(
  ({ className, children, drawerOpen = false, setDrawer }: Props) => {
    const [animation, setAnimation] = useState<keyof typeof translations>(
      'translateIn'
    )
    useEffect(() => {
      drawerOpen ? setAnimation('translateIn') : setAnimation('translateOut')
    }, [drawerOpen])
    return (
      <Nav className={className}>
        <HamburgerButton onClick={() => setDrawer(true)} />
        <MobileDrawer
          animation={animation}
          show={drawerOpen}
          translateInCoords={defaultTranslateIn}
          translateOutCoords={defaultTranslateOut}
          duration={250}
        >
          <MobileDrawerHeader>
            <CloseButton onClick={() => setDrawer(false)}>
              Close Menu
            </CloseButton>
          </MobileDrawerHeader>
          {children && children}
        </MobileDrawer>
      </Nav>
    )
  }
)`
  display: flex;
  ${query('md')} {
    display: none;
  }
`
