import styled from 'styled-components';
import { color } from '../../theme/color';
import { shadow } from '../../theme/shadow';
import { spacing } from '../../theme/spacing';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${color('secondary.blue1')};
  height: ${spacing(15)};
  width: 100%;
  color: ${color("primary.grey1")};
  box-shadow: ${shadow('shadow-md')};
  position: fixed;
  top: 0;
  left: 0;
`