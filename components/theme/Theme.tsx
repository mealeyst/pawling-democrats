import React, { FC, ReactChild } from 'react'
import { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import { color } from './color'
import { spacing } from './spacing'
import { Join, PathsToStringProps } from './types'

const minWidthQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`

export const THEME = {
  baseFontSize: 16,
  breakpoints: {
    sm: minWidthQuery(480),
    md: minWidthQuery(768),
    lg: minWidthQuery(1024),
    xl: minWidthQuery(1200),
  },
  colors: {
    primary: {
      '50': 'hsl(218, 47%, 34%)',
      '100': 'hsl(218, 53%, 29%)',
      '200': 'hsl(219, 59%, 24%)',
      '300': 'hsl(219, 66%, 20%)',
      '400': 'hsl(218, 74%, 15%)',
    },
    secondary: {
      '50': 'rgba(0, 255, 255, 1)',
      '100': 'rgba(0, 227, 255, 1)',
      '200': 'rgba(0, 198, 255, 1)',
      '300': 'rgba(0, 170, 255, 1)',
      '400': 'rgba(0, 142, 255, 1)',
      '500': 'rgba(0, 113, 255, 1)',
      '600': 'rgba(0, 85, 255, 1)',
      '700': 'rgba(0, 57, 255, 1)',
      '800': 'rgba(0, 28, 255, 1)',
      '900': 'rgba(0, 0, 255, 1)',
    },
    black: {
      '50': 'hsl(240, 1%, 23%)',
      '100': 'hsl(0, 0%, 21%)',
      '200': 'hsl(220, 3%, 17%)',
      '300': 'hsl(240, 5%, 15%)',
      '400': 'hsl(228, 8%, 12%)',
    },
    grey: {
      '50': 'hsl(240, 0%, 53%)',
      '100': 'hsl(240, 0%, 47%)',
      '200': 'hsl(230, 3%, 40%)',
      '300': 'hsl(233, 5%, 33%)',
      '400': 'hsl(235, 9%, 26%)',
    },
    white: {
      '50': 'hsl(216, 33%, 97%)',
      '100': 'hsl(220, 21%, 95%)',
      '200': 'hsl(220, 24%, 90%)',
      '300': 'hsl(220, 24%, 85%)',
      '400': 'hsl(218, 22%, 80%)',
    },
  },
  fonts: {
    robotoSlab: "'Roboto Slab', serif",
  },
  shadow: {
    'shadow-sm': '0 1px 2px 0 hsl(218, 74%, 15%)',
    shadow: '0 1px 3px 0 hsl(218, 74%, 15%), 0 1px 2px -1px hsl(218, 74%, 15%)',
    'shadow-md':
      '0 4px 6px -1px hsl(218, 74%, 15%), 0 2px 4px -2px hsl(218, 74%, 15%)',
    'shadow-lg':
      '0 10px 15px -3px hsl(218, 74%, 15%), 0 4px 6px -4px hsl(218, 74%, 15%)',
    'shadow-xl':
      '0 20px 25px -5px hsl(218, 74%, 15%), 0 8px 10px -6px hsl(218, 74%, 15%)',
    'shadow-2xl': '0 25px 50px -12px hsl(218, 74%, 15%)',
    'shadow-inner': 'inset 0 2px 4px 0 hsl(218, 74%, 15%)',
    'shadow-none': '0 0 #0000',
  },
  spacing: [
    0,
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    72,
    80,
    96,
  ],
}

export type Theme = typeof THEME

export type ColorSetKey = keyof Theme['colors']

export type ColorSet<T extends ColorSetKey = ColorSetKey> = Theme['colors'][T]

export type ColorKey<T extends ColorSet = ColorSet> = T extends ColorSet
  ? keyof T
  : never

export type ColorPath = Join<PathsToStringProps<Theme['colors']>, '.'>

export type BreakpointPath = Join<PathsToStringProps<Theme['breakpoints']>, '.'>

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
  interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
    height: 100vh;
  }
  body {
    min-height: 100vh;
    margin: 0;
    overscroll-behavior: none;
    display: grid;
    grid-template-rows: 1fr auto;
  }
  hr {
    width: 100%;
    background-color: ${color('grey.50')};
    height: 1px;
    border: none;
  }
  ${THEME.spacing.map(
    (space) =>
      css`
        .mt-${space} {
          margin-top: ${spacing(space)};
        }
        .ml-${space} {
          margin-left: ${spacing(space)};
        }
        .mr-${space} {
          margin-right: ${spacing(space)};
        }
        .mb-${space} {
          margin-bottom: ${spacing(space)};
        }
        .pt-${space} {
          padding-top: ${spacing(space)};
        }
        .pl-${space} {
          padding-left: ${spacing(space)};
        }
        .pr-${space} {
          padding-right: ${spacing(space)};
        }
        .pb-${space} {
          padding-bottom: ${spacing(space)};
        }
      `
  )}
`

interface Props {
  children: ReactChild | JSX.Element[]
}

export const BlueTheme: FC<Props> = ({ children }) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
