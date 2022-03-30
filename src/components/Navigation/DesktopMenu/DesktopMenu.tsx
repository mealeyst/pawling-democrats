import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Nav } from '..';

interface Props {
  children?: ReactElement
}

export const DesktopMenuBase:FC<Props> = ({className, children }) => {
  return (
    <Nav className={className}>
      {children && children}
    </Nav>
  )
}

export const DesktopMenu = styled(DesktopMenuBase)`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0;
  }
`