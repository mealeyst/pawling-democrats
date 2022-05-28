import React from 'react';
import styled from 'styled-components';
import { Document } from '@contentful/rich-text-types';

import { ICardFields, IDeckFields } from '../../../../@types/generated/contentful';
import { Image } from '../../Assets/Image';
import { color } from '../../../theme/color';
import { spacing } from '../../../theme/spacing';
import { shadow } from '../../../theme/shadow';
import { H2Styles } from '../../../theme/Typography';
import { Card } from '../Card/Card';

export type CardProps = {
  className?: string
  fields: IDeckFields
}

export const Deck = styled(({className, fields: { cards }}: CardProps) => {
  return (
    <div className={className}>
      {cards?.map((card) => {
        console.log(card)
        return ( <Card {...card} /> )
      })}
    </div>
  )
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing(4)};
`


