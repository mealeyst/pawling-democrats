import { Entry } from 'contentful';
import React, { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { INavigationMenuFields } from '../../../../@types/generated/contentful';
import { isIPage } from '../../../../@types/IPage';
import { up } from '../../../theme/mediaQueies';
import { Button } from '../../../theme/Forms';
import { NavigationLink } from '../NavigationLink';
import { LinkListItem } from './LinkListItem';

interface Props {
  data: Entry<INavigationMenuFields> | null
}

export const LinkListView: FC<HTMLAttributes<HTMLUListElement> & Props> = ({ className, data }) =>
  (
    <ul className={className}>
      {data
      && data.fields.menuItems.map((menuItem) => {
        if (isIPage(menuItem)) {
          return (
            <LinkListItem key={menuItem.sys.id}>
              {menuItem.fields.slug !== 'donate' && (
                <NavigationLink to={`/${menuItem.fields.slug}`}>{menuItem.fields.title}</NavigationLink>
              )}
              {menuItem.fields.slug === 'donate' && (
                <Button as={Link} to={`/${menuItem.fields.slug}`} large>
                  {menuItem.fields.title}
                </Button>
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
  ${up('sm')`
    grid-column-start: 2;
    grid-column-end: 12;
    flex-direction: row;
    width: auto;
    align-items: center;
  `}
`;
