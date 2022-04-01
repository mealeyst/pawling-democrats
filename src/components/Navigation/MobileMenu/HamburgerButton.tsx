import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { spacing } from '../../../theme/spacing';
import { color } from '../../../theme/color';

export const HambugerButtonBase: FC<HTMLAttributes<HTMLButtonElement>>  = (props) =>
  <button {...props}>
    <FontAwesomeIcon icon={faBars} size="lg" />
  </button>;

export const HamburgerButton = styled(HambugerButtonBase)`
  color: ${color("primary.grey1")};
  height: ${spacing(11)};
  width: ${spacing(11)};
  background-color: transparent;
  border: none;
`