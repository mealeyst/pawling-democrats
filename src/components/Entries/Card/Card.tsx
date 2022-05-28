import React from 'react';
import styled from 'styled-components';
import { Document } from '@contentful/rich-text-types';

import { ICardFields } from '../../../../@types/generated/contentful';
import { Image } from '../../Assets/Image';
import { documentToReactComponents } from '../../Nodes';
import { color } from '../../../theme/color';
import { spacing } from '../../../theme/spacing';
import { shadow } from '../../../theme/shadow';
import { H2Styles } from '../../../theme/Typography';

export type CardProps = {
  className?: string
  fields: ICardFields
}

export const Card = styled(({className, fields: { image, title, body }}: CardProps) => {
  return (
    <div className={className}>
      { image && <Image {...image} api={{width: 300, focus: 'face', fit: 'fill'}}/> }
      <span className="card-title">{title}</span>
      {body && documentToReactComponents(body as Document)}
    </div>
  )
})`
  background-color: ${color("primary.100")};
  padding: ${spacing(8)};
  color: ${color("white.50")};
  border-radius: ${spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadow("shadow-md")};
  .card-title{
    margin: ${spacing(8, 0, 2)};
    ${H2Styles}
  }
  ${Image} {
    border-radius: 50%;
    width: 100%;
    display: flex;
  }
`


