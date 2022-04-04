import React, { FC, ReactChild } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
      grey1: 'rgb(248, 249, 250)',
      grey2: 'rgb(233, 236, 239)',
      grey3: 'rgb(222, 226, 230)',
      grey4: 'rgb(206, 212, 218)',
      grey5: 'rgb(173, 181, 189)',
      grey6: 'rgb(108, 117, 125)',
      grey7: 'rgb(73, 80, 87)',
      grey8: 'rgb(52, 58, 64)',
      grey9: 'rgb(33, 37, 41)',
    },
    secondary: {
      blue1: 'rgb(47, 102, 144)',
      blue2: 'rgb(58, 124, 165)',
      blue3: 'rgb(22, 66, 91)',
      blue4: 'rgb(129, 195, 215)',
      cream: 'rgb(217, 220, 214)',
    },
  },
  fonts: {
    robotoSlab: '\'Roboto Slab\', serif',
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
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  html {
    font-family: 'Ubuntu', sans-serif;
    height: 100vh;
  }
  body {
    min-height: 100vh;
    margin: 0;
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
