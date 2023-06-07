import styled from 'styled-components'
import { color } from '../theme/color'
import { query } from '../theme/mediaQueies'
import { rem } from '../theme/rem'

export const NavigationLink = styled.a`
  text-decoration: none;
  color: ${color('primary.400')};
  ${query('sm')} {
    position: relative;
    padding-bottom: ${rem(2)};
    transition: color, 0.25s ease-in-out;
    &:before {
      position: absolute;
      content: '';
      display: flex;
      height: ${rem(2)};
      width: 100%;
      bottom: 0;
      left: 0;
      transition: background-color, 0.25s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      color: ${color('primary.100')};
      &::before {
        background-color: ${color('white.400')};
      }
    }
  }
`
