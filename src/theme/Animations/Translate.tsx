import { HTMLAttributes } from "react";
import styled, { css, DefaultTheme, keyframes, ThemeProps } from "styled-components";
import { rem } from "../rem";
import { translate, Translation } from "../translate";

type TranslateCoords = Record<string, Translation>

interface Props {
  duration?: number;
  animation: 'translateIn' | 'translateOut';
  translateInCoords?: TranslateCoords;
  translateOutCoords?: TranslateCoords;
}

const defaultTranslateIn = {
  '0%': {
    coord1: '0px'
  },
  '100%': {
    coord1: '100px'
  }
}

const defaultTranslateOut = {
  '100%': {
    coord1: '0px'
  },
  '0%': {
    coord1: '100px'
  }
}

const translateIn = (translateInCoords: TranslateCoords = defaultTranslateIn) =>
  keyframes`
  {
    ${
      Object.entries(translateInCoords).map(
        ([k, v]) => `${k}{ transform: ${translate(v)};}`
      ).join('')
    }
  }
  `;

const translateOut = (translateOutCoords: TranslateCoords = defaultTranslateOut) =>
  keyframes`
  {
    ${
      Object.entries(translateOutCoords).map(
        ([k, v]) => `${k}{ transform: ${translate(v)};}`
      ).join('')
    }
  }
  `;

export const animations = { translateIn, translateOut }

export const translateStyles = css<Props>`
animation: ${({ animation, translateInCoords }) => animations[animation](translateInCoords)} ${({duration = 250}) => duration}ms normal forwards ease-in-out;
`;

export const Translate = styled.div<Props & HTMLAttributes<HTMLDivElement>>`
  ${translateStyles}
`;