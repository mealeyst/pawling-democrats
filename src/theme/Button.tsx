import styled, { css } from "styled-components";
import { color } from "./color";
import { rem } from "./rem";
import { spacing } from "./spacing";

export const ButtonTextStyles = css`
font-size: ${rem(16)};
line-height: ${rem(18)};
text-transform: uppercase;
font-weight: 700;
`

export const Button = styled.button`
  background-color: transparent;
  border: ${rem(2)} solid ${color("secondary.blue2")};
  color: ${color("secondary.blue2")};
  height: ${rem(50)};
  padding: ${spacing(2, 4)};
  ${ButtonTextStyles}
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${color("secondary.blue2")};
    border: ${rem(2)} solid ${color("secondary.blue2")};
    color: ${color("primary.grey1")};
  }

  &:disabled {
    background-color: ${color("primary.grey4")};
    border: ${rem(2)} solid ${color("secondary.blue2")};
    color: ${color("primary.grey1")};
  }
`