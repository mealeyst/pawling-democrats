import { StyledProps } from 'styled-components';
import { Theme } from './Theme';

type shadowKeys = keyof Theme['shadow'];

export const shadow = (key: shadowKeys): ({ theme }: StyledProps<unknown>) => string =>
  ({ theme }: StyledProps<unknown>) =>
    theme.shadow[key];
