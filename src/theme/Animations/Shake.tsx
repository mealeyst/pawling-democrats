import { HTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";
import { translate } from "../translate";

interface Props {
  duration?: number;
  animationCount?: string | number;
}

const shakeFrames = keyframes`
  0% {
    transform: ${translate('0px')};
  }
  39%{
    transform: ${translate('0px')};
  }
  40% {
    transform: ${translate('2px')};
  }
  45% {
    transform: ${translate('-2px')};
  }
  50% {
    transform: ${translate('0px')};
  }
  55% {
    transform: ${translate('2px')};
  }
  60% {
    transform: ${translate('-2px')};
  }
  61%{
    transform: ${translate('0px')};
  }
  100% {
    transform: ${translate('0px')};
  }
`

export const shakeStyles = css<Props>`
animation: ${shakeFrames} ${({duration = 1000}) => duration}ms normal forwards ease-in-out;
animation-iteration-count: ${({animationCount}) => animationCount};
`;

export const Shake = styled.div<Props & HTMLAttributes<HTMLDivElement>>`
  ${shakeStyles}
`;