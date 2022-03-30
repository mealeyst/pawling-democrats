import styled from 'styled-components';
import { color } from '../../theme/color';
import { spacing } from '../../theme/spacing';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${color('secondary.blue1')};
  height: ${spacing(15)};
  width: 100%;
`