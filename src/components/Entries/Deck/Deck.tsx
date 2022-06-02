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
import { query } from '../../../theme/mediaQueies';

export type CardProps = {
  className?: string
  fields: IDeckFields
}

export const Deck = styled(({className, fields: { cards }}: CardProps) => {
  return (
    <div className={className}>
      {cards?.map((card) => {
        return ( <Card {...card} /> )
      })}
    </div>
  )
})`
  display: grid;
  ${query('md')} {
    grid-template-columns: repeat(${(props: CardProps): number => props.fields.columns}, 1fr);
    gap: ${spacing(4)};
    margin-left: auto;
    margin-right: auto;
  }
  &:not(:last-child) {
    margin-bottom: ${spacing(14)};
  }
`


