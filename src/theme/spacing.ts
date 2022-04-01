import { StyledProps, css } from 'styled-components';

import { THEME } from './Theme';
import { rem } from './rem';

type Spacings = typeof THEME['spacing'][number];

export const spacing = (...values: Spacings[]) =>
  ({ theme }: StyledProps<unknown>) => {
    const result = values.map((value) =>
      rem(theme.baseFontSize * (value * 0.25))({theme})).join(' ');
    console.log(result);
    return result;
  }
