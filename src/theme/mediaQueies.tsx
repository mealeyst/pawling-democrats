import { StyledProps } from 'styled-components';
import _get from 'lodash.get';
import { Theme, BreakpointPath } from './Theme';
import { GetFieldType } from './types';

const getBreakpoint = <T extends BreakpointPath>(
  theme: Theme,
  brekpointPath: BreakpointPath,
): GetFieldType<Theme['breakpoints'], T> =>
    _get(theme.colors, brekpointPath);

  export const query = <T extends BreakpointPath>(colorPath: T) =>
  ({ theme }: StyledProps<unknown>) =>
  getBreakpoint<T>(theme, colorPath);