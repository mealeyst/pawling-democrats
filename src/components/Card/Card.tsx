import React from 'react';
import styled from 'styled-components';
import { Document } from '@contentful/rich-text-types';

import { ICardFields } from '../../../@types/generated/contentful';
import { Image } from '../Assets/Image';
import { documentToReactComponents } from '../Nodes';
import { color } from '../../theme/color';
import { spacing } from '../../theme/spacing';

export type CardProps = {
  className?: string
  fields: ICardFields
}

export const Card = styled(({className, fields: { image, title, body }}: CardProps) => {
  return (
    <div className={className}>
      { image && <Image {...image} api={{radius:'max', width: 300, focus: 'face', fit: 'fill'}}/> }
      <span>{title}</span>
      {body && documentToReactComponents(body as Document)}
    </div>
  )
})`
  background-color: ${color("primary.100")};
  padding: ${spacing(10, 10)};
`


