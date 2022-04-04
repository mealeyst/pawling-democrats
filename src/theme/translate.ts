import { css, ThemeProps, DefaultTheme, StyledProps } from 'styled-components';

export interface Translation {
  coord1: string | (({ theme }: ThemeProps<DefaultTheme>) => string);
  coord2?: string | (({ theme }: ThemeProps<DefaultTheme>) => string);
}

export const translate = ({coord1, coord2}: Translation) => {
  if(coord2) {
    return `translate(${coord1}, ${coord2})`;
  }
  return `translate(${coord1})`;
}
