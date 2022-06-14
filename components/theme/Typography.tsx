import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { query } from './mediaQueies';
import { rem } from './rem';

export type TypographyProps = ThemedStyledProps<Record<string, unknown>, DefaultTheme> & {
  bold?: 'normal' | 'normal'
  italic?: 'normal' | 'italic'
  underline?: 'none' | 'underline'
}

export const Bold = styled.span`
  font-weight: bold;
`;

export const Italic = styled.span`
  font-style: italic;
`;

export const Underline = styled.span`
  text-decoration: unerline;
`;

export const TitleStyles = css<TypographyProps>`
  font-size: ${rem(40)};
  line-height: ${rem(56)};
  letter-spacing: -${rem(1)};
  font-weight: ${({ bold = 'normal' }) =>
    (bold === 'normal' ? 500 : 700)};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
  text-transform: uppercase;
  ${query('md')}{
    font-size: ${rem(56)};
    line-height: ${rem(72)};
  }
  ${Bold} {
    font-weight: 700;
  }
`

export const Title = styled.h1<TypographyProps>`
  ${TitleStyles}
`;

export const H1Styles = css<TypographyProps>`
font-size: ${rem(32)};
line-height: ${rem(44)};
font-weight: ${({ bold = 'normal' }) =>
  (bold === 'normal' ? 500 : 700)};
text-decoration: ${({ underline = 'none' }) =>
  underline};
font-style: ${({ italic = 'normal' }) =>
  italic};
text-transform: uppercase;
${query('md')}{
  font-size: ${rem(40)};
  line-height: ${rem(56)};
  letter-spacing: -${rem(1)};
}
${Bold} {
  font-weight: 700;
}
`;

export const H1 = styled.h1<TypographyProps>`
  ${H1Styles}
`;

export const H2Styles = css<TypographyProps>`
font-size: ${rem(24)};
  line-height: ${rem(34)};
  font-weight: ${({ bold = 'normal' }) =>
    (bold === 'normal' ? 500 : 700)};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
  text-transform: uppercase;
  ${query('md')}{
    font-size: ${rem(28)};
    line-height: ${rem(38)};
  }
  ${Bold} {
    font-weight: 700;
  }
`

export const H2 = styled.h2<TypographyProps>`
  ${H2Styles}
`;

export const H3 = styled.h3<TypographyProps>`
  font-size: ${rem(24)};
  line-height: ${rem(34)};
  font-weight: ${({ bold = 'normal' }) =>
    (bold === 'normal' ? 500 : 700)};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
  text-transform: uppercase;
  ${query('md')}{
    font-size: ${rem(18)};
    line-height: ${rem(24)};
  }
  ${Bold} {
    font-weight: 700;
  }
`;

export const H4 = styled.h4<TypographyProps>`
  font-size: ${rem(18)};
  line-height: ${rem(24)};
  font-weight: ${({ bold = 'normal' }) =>
    (bold === 'normal' ? 500 : 700)};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
  text-transform: uppercase;
  ${query('md')}{
    font-size: ${rem(16)};
    line-height: ${rem(18)};
  }
  ${Bold} {
    font-weight: 700;
  }
`;

export const H5 = styled.h5<TypographyProps>`
  font-size: ${rem(13)};
  line-height: ${rem(16)};
  font-weight: ${({ bold = 'normal' }) =>
    (bold === 'normal' ? 500 : 700)};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
  font-weight: 700;
  text-transform: uppercase;
  ${Bold} {
    font-weight: 700;
  }
`;

export const H6 = styled.h6<TypographyProps>`
  font-size: ${rem(10)};
  line-height: ${rem(16)};
  font-weight: ${({ bold = 'normal' }) =>
    (bold === 'normal' ? 500 : 700)};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
  text-transform: uppercase;
  ${Bold} {
    font-weight: 700;
  }
`;

export const P = styled.p<TypographyProps>`
  font-size: ${rem(16)};
  line-height: ${rem(18)};
  font-weight: ${({ bold = 'normal' }) =>
    bold};
  text-decoration: ${({ underline = 'none' }) =>
    underline};
  font-style: ${({ italic = 'normal' }) =>
    italic};
`;
