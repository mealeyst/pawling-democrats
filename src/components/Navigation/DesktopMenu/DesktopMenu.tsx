import React, { FC, ReactElement } from 'react';
import useScrollPosition from '@react-hook/window-scroll'
import { Nav } from '..';
import { color } from '../../../theme/color';

type DesktopNavProps = {
  className?: string,
  children?: ReactElement[]
}

export const DesktopMenu:FC<DesktopNavProps> = ({className, children }) => {
  const scrollY = useScrollPosition(60 /*fps*/);
  const scrollYTarget = 25;
  const height = scrollY < scrollYTarget ? scrollYTarget : 20
  const backgroundColor = scrollY < scrollYTarget ? 'transparent' : color("primary.400")
  const linkColor = scrollY < scrollYTarget ? color("black.400") : color("white.50")
  return (
    <Nav className={className} height={height} backgroundColor={backgroundColor} linkColor={linkColor}>
      <section>{children && children}</section>
    </Nav>
  )
}