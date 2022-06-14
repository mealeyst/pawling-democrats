import React, { useState } from 'react';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { LinkList } from './LinkList/LinkList';
import { useEntry } from '../hooks/useEntry';
import { PawlingDemsIcon } from '../Icons/PawlingDemsIcon';
import { INavigationMenu } from '../../@types/generated/contentful';

interface NavigationProps {
  navigation: INavigationMenu
}

export const Navigation = ({ navigation }: NavigationProps) => {

  const [drawerOpen, setDrawer] = useState(false);
    return (
      <>
          <MobileMenu drawerOpen={drawerOpen} setDrawer={setDrawer}>
            <LinkList data={navigation} setDrawer={setDrawer} />
          </MobileMenu>
          <DesktopMenu>
            <Link href="/"><a><PawlingDemsIcon /></a></Link>
            <LinkList data={navigation} />
          </DesktopMenu>
      </>
    );
};