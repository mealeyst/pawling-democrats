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
  data && console.log(data.fields.menuItems)
  return (
    <ul {...props}>
      {data && data.fields.menuItems.map((menuItem) => {
        if (isIPage(menuItem)) {
          return (
          <LinkListItem>
            <NavigationLink href={menuItem.fields.slug}>{menuItem.fields.title}</NavigationLink>
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
    flex-direction: row;
    justify-content: space-around;
  `}
`