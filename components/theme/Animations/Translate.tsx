import { HTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { translate, Coordinate } from '../translate';

interface Translation {
  coord1: Coordinate,
  coord2?: Coordinate
}

export type TranslateCoords = Record<string, Translation>

export interface TranslationProps {
  duration?: number;
  animation: 'translateIn' | 'translateOut';
  translateInCoords?: TranslateCoords;
  translateOutCoords?: TranslateCoords;
}

const defaultTranslateIn = {
  '0%': {
    coord1: '0px',
  },
  '100%': {
    coord1: '100px',
  },
};

const defaultTranslateOut = {
  '100%': {
    coord1: '0px',
  },
  '0%': {
    coord1: '100px',
  },
};

export const translateIn = (translateInCoords: TranslateCoords = defaultTranslateIn) =>
  keyframes`
  {
    ${
  Object.entries(translateInCoords).map(
    ([k, v]) =>
      `${k}{ transform: ${translate(v.coord1, v.coord2)};}`,
  ).join('')
}
  }
  `;

export const translateOut = (translateOutCoords: TranslateCoords = defaultTranslateOut) =>
  keyframes`
  {
    ${
  Object.entries(translateOutCoords).map(
    ([k, v]) =>
      `${k}{ transform: ${translate(v.coord1, v.coord2)};}`,
  ).join('')
}
  }
  `;

export const translations = { translateIn, translateOut };

export const translateStyles = css<TranslationProps>`
animation: ${({ animation = 'translateIn', translateInCoords, translateOutCoords }) =>
    (animation === 'translateIn' ? translations[animation](translateInCoords) : translations[animation](translateOutCoords))} ${({ duration = 250 }) =>
  duration}ms normal forwards ease-in-out;
`;

export const Translate = styled.div<TranslationProps & HTMLAttributes<HTMLDivElement>>`
  ${translateStyles}
`;
