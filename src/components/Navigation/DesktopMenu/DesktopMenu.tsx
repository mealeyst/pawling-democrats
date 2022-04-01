import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Nav } from '..';

interface Props {
  children?: ReactElement
}

export const DesktopMenu:FC<Props> = ({className, children }) => {
  return (
    <Nav className={className}>
      {children && children}
    </Nav>
  )
}