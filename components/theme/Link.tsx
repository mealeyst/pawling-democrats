import styled from 'styled-components'
import { color } from './color'

export const Link = styled.a`
  color: ${color('secondary.300')};
  text-decoration: none;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${color('secondary.400')};
  }
`
