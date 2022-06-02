import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { LinkList } from './LinkList/LinkList';
import { useEntry } from '../../hooks/useEntry';
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon';
import { INavigationMenu } from '../../../@types/generated/contentful';
import { THEME } from '../../theme/Theme';
import { useMediaQuery } from '@react-hook/media-query';

export const Navigation = () => {
  const { data } = useEntry('1GjjrJGYkHlgrGltIHjrcU');
  const [drawerOpen, setDrawer] = useState(false);
  if (data !== null) {
    const navMenu = data as INavigationMenu
    return (
      <>
          <MobileMenu drawerOpen={drawerOpen} setDrawer={setDrawer}>
            <LinkList data={navMenu} setDrawer={setDrawer} />
          </MobileMenu>
          <DesktopMenu>
            <Link to="/"><PawlingDemsIcon /></Link>
            <LinkList data={navMenu} />
          </DesktopMenu>
      </>
    );
  }
  return null
};
