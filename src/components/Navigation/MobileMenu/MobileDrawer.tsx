import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { useDelayUnmount } from '../../../hooks/useDelayedUnmount';
import { Translate, translateStyles, TranslationProps, translations } from '../../../theme/Animations/Translate';
import { color } from '../../../theme/color';
import { shadow } from '../../../theme/shadow';
import { spacing } from '../../../theme/spacing';
import Portal from '../../Portal/Portal';

interface Props {
  show: boolean
}

const MobileDrawerBase: FC<Props & TranslationProps & HTMLAttributes<HTMLMenuElement>> = ({duration, show, ...props}) => {
  const shouldRenderChild = useDelayUnmount(show, duration as number);
  const menuProps = Object.assign({}, props);
  delete menuProps.translateInCoords;
  delete menuProps.translateOutCoords;
  if (shouldRenderChild) {
    return(
      <Portal id='mobile-drawer'>
        <menu {...menuProps} />
      </Portal>
    );
  }
  return null;
};

export const MobileDrawer = styled(MobileDrawerBase)`
  background-color: ${color("white.200")};
  margin: 0;
  padding: ${spacing(4)};
  box-shadow: ${shadow('shadow-2xl')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${translateStyles}
`;