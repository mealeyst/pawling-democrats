import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { useMediaQuery } from '../../theme/mediaQueies';
import { DesktopMenu } from './DesktopMenu';
import { LinkList } from './LinkList/LinkList';
import { useEntry } from '../../hooks/useEntry';
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon';

export const Navigation = () => {
  const showMobileMenu = useMediaQuery('md', false);
  const { data } = useEntry('1GjjrJGYkHlgrGltIHjrcU');
  const [drawerOpen, setDrawer] = useState(false);

  return (
    <>
      {showMobileMenu
        && (
        <MobileMenu drawerOpen={drawerOpen} setDrawer={setDrawer}>
          <LinkList data={data} setDrawer={setDrawer} />
        </MobileMenu>
        )}
      {!showMobileMenu
        && (
        <DesktopMenu>
          <Link to="/"><PawlingDemsIcon /></Link>
          <LinkList data={data} />
        </DesktopMenu>
        )}
    </>
  );
};
