import { Link } from 'react-router-dom';
import styled, { css, DefaultTheme, StyledProps, ThemeProps } from 'styled-components';
import { color } from '../../theme/color';
import { up } from '../../theme/mediaQueies';
import { rem } from '../../theme/rem';
import { shadow } from '../../theme/shadow';
import { spacing } from '../../theme/spacing';

type NavProps = {
  backgroundColor?: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  linkColor?: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  height?: number
}

export const Nav = styled.nav<StyledProps<NavProps>>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  height: ${({height = 15}) => spacing(height)};
  grid-template-rows: auto;
  width: 100%;
  background-color: ${({ backgroundColor = color("primary.400")}) => backgroundColor};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.4s ease-in-out;
  a, a:visited {
    color: ${({ linkColor = color("primary.50")}) => linkColor};
  }
  @media (min-width: ${({theme}) => rem(theme.breakpoints['sm'])}) {
    padding: ${spacing(0, 4)};
  }
`