import React, { FC, HTMLAttributes, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../../../theme/color';
import Portal from '../../Portal/Portal';

const MobileDrawerBase: FC<HTMLAttributes<HTMLMenuElement>> = (props) =>
  <Portal id='mobile-drawer'>
    <menu {...props} />
  </Portal>;

export const MobileDrawer = styled(MobileDrawerBase)`
  border: 1px solid red;
  background-color: ${color("primary.grey2")};
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`