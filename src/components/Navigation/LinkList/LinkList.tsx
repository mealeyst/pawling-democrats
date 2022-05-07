import { Entry } from "contentful";
import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { INavigationMenuFields } from '../../../../@types/generated/contentful';
import { isIPage } from '../../../../@types/IPage';
import { up } from "../../../theme/mediaQueies";
import { NavigationLink } from "../NavigationLink";
import { LinkListItem } from "./LinkListItem";


interface Props {
  data: Entry<INavigationMenuFields> | null
}



export const LinkListView: FC<HTMLAttributes<HTMLUListElement> & Props> = ({ data, ...props }) => {
  return (
    <ul {...props}>
      {data && data.fields.menuItems.map((menuItem) => {
        if (isIPage(menuItem)) {
          return (
          <LinkListItem key={menuItem.sys.id}>
            <NavigationLink to={`/${menuItem.fields.slug}`}>{menuItem.fields.title}</NavigationLink>
          </LinkListItem>
        )
        }
      })}
    </ul>
  )
}

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
`