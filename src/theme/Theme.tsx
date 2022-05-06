import React, { FC, ReactChild } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { color } from './color';
import { Join, PathsToStringProps } from './types';

export const THEME = {
  baseFontSize: 16,
  breakpoints: {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200,
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
      '50': 'hsl(219, 66%, 54%)',
      '100': 'hsl(219, 61%, 47%)',
      '200': 'hsl(219, 66%, 40%)',
      '300': 'hsl(219, 70%, 34%)',
      '400': 'hsl(219, 75%, 28%)',
    },
    black: {
      '50': 'hsl(240, 1%, 23%)',
      '100': 'hsl(0, 0%, 21%)',
      '200': 'hsl(220, 3%, 17%)',
      '300': 'hsl(240, 5%, 15%)',
      '400': 'hsl(228, 8%, 12%)'
    },
    grey: {
      '50': 'hsl(240, 0%, 53%)',
      '100': 'hsl(240, 0%, 47%)',
      '200': 'hsl(230, 3%, 40%)',
      '300': 'hsl(233, 5%, 33%)',
      '400': 'hsl(235, 9%, 26%)'
    },
    white: {
      '50': 'hsl(216, 33%, 97%)',
      '100': 'hsl(220, 21%, 95%)',
      '200': 'hsl(220, 24%, 90%)',
      '300': 'hsl(220, 24%, 85%)',
      '400': 'hsl(218, 22%, 80%)'
    },
  },
  fonts: {
    robotoSlab: '\'Roboto Slab\', serif',
  },
  shadow: {
    'shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    'shadow-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    'shadow-none': '0 0 #0000'
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
  ]
};

export type Theme = typeof THEME;

export type ColorSetKey = keyof Theme['colors'];

export type ColorSet<T extends ColorSetKey = ColorSetKey> = Theme['colors'][T];

export type ColorKey<T extends ColorSet = ColorSet> = T extends ColorSet
    ? keyof T
    : never;

export type ColorPath = Join<PathsToStringProps<Theme['colors']>, '.'>;

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
    interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  html {
    font-family: 'Ubuntu', sans-serif;
    height: 100vh;
  }
  body {
    min-height: 100vh;
    margin: 0;
    overscroll-behavior: none;
  }
  hr {
    width: 100%;
    background-color: ${color('secondary.50')};
    height: 1px;
    border: none;
  }
`;

interface Props {
  children: ReactChild
}

export const BlueTheme: FC<Props> = ({ children }) =>
  (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
