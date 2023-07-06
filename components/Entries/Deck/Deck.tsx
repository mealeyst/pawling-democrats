import React from 'react'
import styled from 'styled-components'

import { Deck as DeckEntry } from '../../../@types/generated'
import { spacing } from '../../theme/spacing'
import { Card } from '../Card/Card'
import { query } from '../../theme/mediaQueies'

export type CardProps = {
  className?: string
  entry: DeckEntry
}

export const Deck = styled(
  ({ className, entry: { cardsCollection } }: CardProps) => {
    return (
      <div className={className}>
        {cardsCollection?.items.map((card) => {
          return <Card entry={card} key={card?.sys.id} />
        })}
      </div>
    )
  }
)`
  display: grid;
  ${query('md')} {
    grid-template-columns: repeat(
      ${(props: CardProps): number => props.entry.columns || 1},
      1fr
    );
    gap: ${spacing(4)};
    margin-left: auto;
    margin-right: auto;
  }
  &:not(:last-child) {
    margin-bottom: ${spacing(14)};
  }
`
