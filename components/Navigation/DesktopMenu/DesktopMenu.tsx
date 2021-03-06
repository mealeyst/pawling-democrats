import React, { ReactElement } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { Nav } from '..'
import { color } from '../../theme/color'
import styled from 'styled-components'
import { query } from '../../theme/mediaQueies'

type DesktopNavProps = {
  className?: string
  children?: ReactElement[]
}

export const DesktopMenu = styled(
  ({ className, children }: DesktopNavProps) => {
    const scrollY = useScrollPosition(60 /* fps */)
    const scrollYTarget = 25
    const height = scrollY < scrollYTarget ? scrollYTarget : 20
    const backgroundColor =
      scrollY < scrollYTarget ? 'transparent' : color('primary.400')
    const linkColor =
      scrollY < scrollYTarget ? color('primary.400') : color('white.50')
    const buttonColors =
      scrollY < scrollYTarget
        ? {
            color: color('primary.400'),
            backgroundColor: color('white.50'),
            borderColor: color('primary.400'),
            hover: {
              color: color('white.50'),
              backgroundColor: color('primary.400'),
              borderColor: color('primary.400'),
            },
          }
        : {
            color: color('white.50'),
            backgroundColor: color('primary.400'),
            borderColor: color('white.50'),
            hover: {
              color: color('primary.400'),
              backgroundColor: color('white.50'),
              borderColor: color('white.50'),
            },
          }
    return (
      <Nav
        className={className}
        height={height}
        backgroundColor={backgroundColor}
        buttonColors={buttonColors}
        linkColor={linkColor}
      >
        <section>{children && children}</section>
      </Nav>
    )
  }
)`
  display: none;
  ${query('md')} {
    display: flex;
  }
`
