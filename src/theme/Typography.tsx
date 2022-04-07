import styled from "styled-components";
import { up } from "./mediaQueies";
import { rem } from "./rem";

export const TitleLarge = styled.h1`
  font-size: ${rem(40)};
  line-height: ${rem(56)};
  letter-spacing: -${rem(1)};
  font-weight: 700;
  text-transform: uppercase;
  ${up('md')`
    font-size: ${rem(56)};
    line-height: ${rem(72)};
  `}
`;

export const Title = styled.h1`
  font-size: ${rem(32)};
  line-height: ${rem(44)};
  font-weight: 700;
  text-transform: uppercase;
  ${up('md')`
    font-size: ${rem(40)};
    line-height: ${rem(56)};
    letter-spacing: -${rem(1)};
  `}
`;


export const TitleSmall = styled.h1`
font-size: ${rem(24)};
line-height: ${rem(34)};
font-weight: 700;
text-transform: uppercase;
${up('md')`
  font-size: ${rem(28)};
  line-height: ${rem(38)};
`}
`;