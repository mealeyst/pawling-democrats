import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { spacing } from '../../theme/spacing';
import { color } from '../../theme/color';
import { ScreenReaderOnly } from '../../Accessibility/ScreenReaderOnly';

export const CloseButtonBase: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) =>
  (
    <button {...props}>
      <FontAwesomeIcon icon={faX} size="lg" />
      <ScreenReaderOnly>{children}</ScreenReaderOnly>
    </button>
  );

export const CloseButton = styled(CloseButtonBase)`
  color: ${color('grey.400')};
  height: ${spacing(11)};
  width: ${spacing(11)};
  background-color: transparent;
  border: none;
  margin-left: auto;
`;
