import React, { FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { INavigationMenu } from '../../../@types/generated/contentful';
import { isIPage } from '../../../@types/IPage';
import { query } from '../../theme/mediaQueies';
import { Button } from '../../theme/Forms';
import { NavigationLink } from '../NavigationLink';
import { LinkListItem } from './LinkListItem';

interface Props {
  data: INavigationMenu | null
  setDrawer?: (drawerState: boolean) => void | undefined
}

export const LinkListView: FC<HTMLAttributes<HTMLUListElement> & Props> = ({ className, data, setDrawer }) =>
  (
    <ul className={className}>
      {data
      && data.fields.menuItems.map((menuItem) => {
        if (isIPage(menuItem)) {
          return (
            <LinkListItem key={menuItem.sys.id}>
              {menuItem.fields.slug !== 'donate' && (
                <Link href={`/${menuItem.fields.slug}`}><NavigationLink onClick={() => (setDrawer !== undefined) && setDrawer(false)}>{menuItem.fields.title}</NavigationLink></Link>
              )}
              {menuItem.fields.slug === 'donate' && (
                <Link href={`/${menuItem.fields.slug}`}>
                  <Button large>
                    {menuItem.fields.title}
                  </Button>
                </Link>
              )}
            </LinkListItem>
          );
        }
        return null;
      })}
    </ul>
  );

export const LinkList = styled(LinkListView)`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  ${query('sm')}{
    grid-column-start: 2;
    grid-column-end: 12;
    flex-direction: row;
    width: auto;
    align-items: center;
  }
`;
