import styled from "styled-components";
import { color } from "../../theme/color";
import { spacing } from "../../theme/spacing";

export const Button = styled.button`
  position: relative;
  background-color: ${color("white.50")};
  color: ${color("grey.400")};
  border-radius: ${spacing(2)};
  padding: ${spacing(2, 3)};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  &:after {
    display: block;
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: ${spacing(2)};
    transition: opacity 0.25s ease-in-out;
    opacity: 0;
    box-shadow: 0px 0px 0px 2px  ${color("primary.400")}, 0px 0px 0px 4px  ${color("white.50")};
  }
  &:active::after, &:focus::after {
    opacity: 1;
  }
`