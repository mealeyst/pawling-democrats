import React, { FC } from 'react';
import { MobileMenu } from './MobileMenu';
import { useMediaQuery } from '../../theme/mediaQueies';
import { DesktopMenu } from './DesktopMenu';
import { LinkList } from './LinkList/LinkList';
import { useEntry } from '../../hooks/useEntry';
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const showMobileMenu = useMediaQuery('sm', false);
  const { data } = useEntry('1GjjrJGYkHlgrGltIHjrcU')
  
  return (
    <>
      {showMobileMenu &&
        <MobileMenu>
          <LinkList data={data} />
        </MobileMenu>
      }
      {!showMobileMenu &&
        <DesktopMenu>
          <Link to="/"><PawlingDemsIcon /></Link>
          <LinkList data={data} />
        </DesktopMenu>
      }
    </>
  )
}