import { useMediaQuery as useReactHookMediaQuery } from '@react-hook/media-query';
import {
  css,
  StyledProps,
  Interpolation,
  DefaultTheme,
  ThemedStyledProps,
  useTheme
} from 'styled-components';

import { Theme } from './Theme';
import { rem } from './rem';

type BreakpointPath = keyof Theme['breakpoints'];

export const between = <Props extends Record<string, unknown>>(smaller: BreakpointPath, larger: BreakpointPath) =>
  (
    template: TemplateStringsArray,
    ...values: Interpolation<ThemedStyledProps<Props, DefaultTheme>>[]
  ) =>
    ({ theme }: StyledProps<unknown>) => {
      if (theme.breakpoints[smaller] > theme.breakpoints[larger]) {
        throw new Error(
          `Argument ${smaller} should be of a smaller breakpoint than ${larger}`,
        );
      } else {
        return css`@media (min-width:${rem(
          theme.breakpoints[smaller],
        )}) and (max-width:${rem(theme.breakpoints[larger])}) { {
              ${css<Props>(template, ...values)}
          }
      `;
      }
    };
export const down = <Props extends Record<string, unknown>>(breakpoint: BreakpointPath) =>
  (
    template: TemplateStringsArray,
    ...values: Interpolation<ThemedStyledProps<Props, DefaultTheme>>[]
  ) =>
    ({ theme }: StyledProps<unknown>) =>
      css`
          @media (max-width: ${rem(theme.breakpoints[breakpoint])}) {
              ${css<Props>(template, ...values)}
          }
      `;

export const up = <Props extends Record<string, unknown>>(breakpoint: BreakpointPath) =>
  (
    template: TemplateStringsArray,
    ...values: Interpolation<ThemedStyledProps<Props, DefaultTheme>>[]
  ) =>
    ({ theme }: StyledProps<unknown>) =>
      css`
          @media (min-width: ${rem(theme.breakpoints[breakpoint])}) {
              ${css<Props>(template, ...values)}
          }
      `;
export const useMediaQuery = <Props extends Record<string, unknown>>(breakpoint: BreakpointPath, minWidth = true) => {
    const theme = useTheme()
    const query = minWidth ?  `(min-width: ${rem(theme.breakpoints[breakpoint])({theme})})` : `(max-width: ${rem(theme.breakpoints[breakpoint])({theme})})`;
    return useReactHookMediaQuery(query)
  };