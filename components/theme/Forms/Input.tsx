import styled from 'styled-components';
import { color } from '../color';
import { spacing } from '../spacing';

type InputProps = {
  secondary?: boolean
}

export const Input = styled.input<InputProps>`
  background-color: ${color('primary.200')};
  color: ${color('white.50')};
  border: ${spacing(0.5)} solid ${color('white.400')};
  height: ${spacing(10)};
  min-width: ${spacing(60)};
  padding: ${spacing(2, 3)};
  box-sizing: border-box;
  outline: none;
  transition: border 0.25s ease-in-out;

  &:focus {
    border: ${spacing(0.5)} solid ${color('white.50')};
  }
`;
