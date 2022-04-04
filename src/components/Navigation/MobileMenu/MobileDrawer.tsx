import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { FadeAnimation } from '../../../theme/Animations/Fade';
import { color } from '../../../theme/color';
import { spacing } from '../../../theme/spacing';
import Portal from '../../Portal/Portal';

interface Props {
  show: boolean
}

const MobileDrawerBase: FC<Props & HTMLAttributes<HTMLMenuElement>> = ({show, ...props}) =>
  <Portal id='mobile-drawer'>
    <FadeAnimation show={show}>
      <menu {...props} />
    </FadeAnimation>
  </Portal>;

export const MobileDrawer = styled(MobileDrawerBase)`
  background-color: ${color("primary.grey2")};
  margin: 0;
  padding: ${spacing(4)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`