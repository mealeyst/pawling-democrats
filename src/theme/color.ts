
import { StyledProps } from 'styled-components';
import _get from 'lodash.get';
import { Theme, ColorPath } from './Theme';
import { GetFieldType } from './types';

const getColor = <T extends ColorPath>(
  theme: Theme,
  colorPath: ColorPath,
): GetFieldType<Theme['colors'], T> =>
    _get(theme.colors, colorPath);

  export const color = <T extends ColorPath>(colorPath: T) =>
  ({ theme }: StyledProps<unknown>) =>
    getColor<T>(theme, colorPath);
