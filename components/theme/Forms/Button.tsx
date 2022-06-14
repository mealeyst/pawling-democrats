import styled from 'styled-components';
import { color } from '../color';
import { spacing } from '../spacing';

type ButtonProps = {
  secondary?: boolean
  large?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;
  background-color: ${({ secondary = false }) =>
    (!secondary ? color('white.50') : color('primary.200'))};
  color: ${({ secondary = false }) =>
    (!secondary ? color('primary.400') : color('white.50'))};
  border-color: ${({ secondary = false }) =>
    (!secondary ? color('primary.200') : color('white.200'))};
  border-width: ${spacing(0.5)};
  border-style: solid;
  padding: ${({ large = false }) =>
    (large ? spacing(4, 4) : spacing(2, 3))};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.25s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  &:focus {
    outline: none;
    border-color: ${({ secondary = false }) =>
    (!secondary ? color('primary.400') : color('white.50'))};
  }
  &:hover {
    background-color: ${({ secondary = false }) =>
    (!secondary ? color('primary.400') : color('white.50'))};
    color: ${({ secondary = false }) =>
    (!secondary ? color('white.50') : color('primary.400'))};
    border-color: ${({ secondary = false }) =>
    (!secondary ? color('white.50') : color('primary.400'))};
  }
`;
