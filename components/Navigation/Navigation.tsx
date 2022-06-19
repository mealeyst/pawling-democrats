import React, { useState } from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { LinkList } from './LinkList/LinkList'
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon'
import { INavigationMenu } from '../../@types/generated/contentful'
import styled from 'styled-components'

interface NavigationProps {
  className?: string
  navigation: INavigationMenu
}

export const Navigation = styled(
  ({ className, navigation }: NavigationProps) => {
    const [drawerOpen, setDrawer] = useState(false)
    return (
      <div className={className}>
        <MobileMenu drawerOpen={drawerOpen} setDrawer={setDrawer}>
          <LinkList data={navigation} setDrawer={setDrawer} />
        </MobileMenu>
        <DesktopMenu>
          <Link href="/">
            <a>
              <PawlingDemsIcon />
            </a>
          </Link>
          <LinkList data={navigation} />
        </DesktopMenu>
      </div>
    )
  }
)`
  grid-area: header;
`
