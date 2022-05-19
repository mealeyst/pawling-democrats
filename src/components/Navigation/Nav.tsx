import styled, { DefaultTheme, StyledProps, ThemeProps } from 'styled-components';
import { color } from '../../theme/color';
import { rem } from '../../theme/rem';
import { spacing } from '../../theme/spacing';
import { Button } from '../Forms/Button';
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon';
import { NavigationLink } from './NavigationLink';

type ButtonColors = {
  color: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  backgroundColor: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  borderColor: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  hover: {
    color: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
    backgroundColor: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
    borderColor: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  }
}

type NavProps = {
  backgroundColor?: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  buttonColors?: ButtonColors,
  linkColor?: string | (({ theme }: ThemeProps<DefaultTheme>) => string),
  height?: number
}

export const Nav = styled.nav<StyledProps<NavProps>>`
  display: flex;
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
  section {
    max-width: 1440px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  ${PawlingDemsIcon}, ${NavigationLink}, ${NavigationLink}:visited {
    color: ${({ linkColor = color("primary.50")}) => linkColor};
  }
  ${Button} {
    color: ${({buttonColors}) => (buttonColors && buttonColors.color) ? buttonColors.color : color("primary.400")};
    background-color: ${({buttonColors}) => (buttonColors && buttonColors.backgroundColor) ? buttonColors.backgroundColor : color("white.50")};
    border-color: ${({buttonColors}) => (buttonColors && buttonColors.borderColor) ? buttonColors.borderColor : color("primary.400")};
    &:hover {
      color: ${({buttonColors}) => (buttonColors && buttonColors.hover && buttonColors.hover.color) ? buttonColors.hover.color : color("white.50")};
      background-color: ${({buttonColors}) => (buttonColors && buttonColors.hover && buttonColors.hover.backgroundColor) ? buttonColors.hover.backgroundColor : color("primary.400")};
      border-color: ${({buttonColors}) => (buttonColors && buttonColors.hover && buttonColors.hover.borderColor) ? buttonColors.hover.borderColor : color("primary.400")};
    }
  }
  @media (min-width: ${({theme}) => rem(theme.breakpoints['sm'])}) {
    padding: ${spacing(0, 4)};
    a {
      display: flex;
      align-items: center;
    }
  }
`