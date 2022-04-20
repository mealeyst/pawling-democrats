import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../../theme/color';
import { up } from '../../theme/mediaQueies';
import { rem } from '../../theme/rem';

export const NavigationLink = styled(Link)`
  color: ${color("primary.grey9")};
  text-transform: uppercase;
  text-decoration: none;

  ${up('sm')`
    color: ${color('primary.grey1')};
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
    &:hover{
      color: ${color('primary.grey3')};
      &::before{
        background-color: ${color('primary.grey3')};
      }
    }
  `}
`