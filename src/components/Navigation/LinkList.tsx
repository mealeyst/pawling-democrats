import { Entry } from "contentful";
import React, { FC, HTMLAttributes } from "react";
import { INavigationMenuFields } from '../../../@types/generated/contentful';
import { isIPage } from '../../../@types/IPage';


interface Props {
  data: Entry<INavigationMenuFields> | null
}

export const LinkList: FC<HTMLAttributes<HTMLUListElement> & Props> = ({ data, ...props }) => {
  data && console.log(data.fields.menuItems)
  return (
    <ul {...props}>
      {data && data.fields.menuItems.map((menuItem) => {
        if (isIPage(menuItem)) {
          return (
          <li>
            <a href={menuItem.fields.slug}>{menuItem.fields.title}</a>
          </li>
        )
        }
      })}
    </ul>
  )
}