import { ThemeProps, DefaultTheme } from 'styled-components'

export type Coordinate =
  | string
  | (({ theme }: ThemeProps<DefaultTheme>) => string)

export const translate = (coord1: Coordinate, coord2?: Coordinate): string => {
  if (coord2) {
    return `translate(${coord1}, ${coord2})`
  }
  return `translate(${coord1})`
}
