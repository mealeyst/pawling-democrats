import React from 'react';
import { MobileMenu } from './MobileMenu';
import { usePromised } from '../../hooks/usePromised';
import { client } from '../../services/Contentful';
import { useMediaQuery } from '../../theme/mediaQueies';
import { DesktopMenu } from './DesktopMenu';
import { LinkList } from './LinkList';
import { INavigationMenuFields } from '../../../@types/generated/contentful';
import { Entry } from 'contentful';
export const Navigation = () => {
  const showMobileMenu = useMediaQuery('sm', false);
  const { data, error, isLoading } = usePromised((): Promise<Entry<INavigationMenuFields>> => client.getEntry('1GjjrJGYkHlgrGltIHjrcU'));
  
  return (
    <>
      {showMobileMenu &&
        <MobileMenu>
          <LinkList data={data} />
        </MobileMenu>
      }
      {!showMobileMenu &&
        <DesktopMenu>
          <LinkList data={data} />
        </DesktopMenu>
      }
    </>
  )
}