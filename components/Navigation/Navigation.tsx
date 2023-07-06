import React, { useState } from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { LinkList } from './LinkList/LinkList'
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon'
import styled from 'styled-components'
import { LinkList as ILinkList } from '../../@types/Link'

interface NavigationProps {
  className?: string
  navigation: ILinkList
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
