import React, { FC, HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { INavigationMenu } from '../../../@types/generated/contentful'
import { isIPage } from '../../../@types/IPage'
import { query } from '../../theme/mediaQueies'
import { Button } from '../../theme/Forms'
import { NavigationLink } from '../NavigationLink'
import { LinkListItem } from './LinkListItem'

interface Props {
  data: {
    href: string
    children: ReactNode
  }[]
  setDrawer?: (drawerState: boolean) => void | undefined
}

export const LinkListView: FC<HTMLAttributes<HTMLUListElement> & Props> = ({
  className,
  data,
  setDrawer,
}) => (
  <ul className={className}>
    {data &&
      data.map(({ children, href }, index) => {
        return (
          <LinkListItem key={index}>
            {!href.includes('donate') && (
              <Link href={href}>
                <NavigationLink
                  onClick={() => setDrawer !== undefined && setDrawer(false)}
                >
                  {children}
                </NavigationLink>
              </Link>
            )}
            {href.includes('donate') && (
              <Link href={href}>
                <Button large>{children}</Button>
              </Link>
            )}
          </LinkListItem>
        )
      })}
  </ul>
)

export const LinkList = styled(LinkListView)`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  ${query('sm')} {
    grid-column-start: 2;
    grid-column-end: 12;
    flex-direction: row;
    width: auto;
    align-items: center;
  }
`
