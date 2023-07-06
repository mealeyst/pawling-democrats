import React from 'react'
import styled from 'styled-components'
import { Document } from '@contentful/rich-text-types'

import { Card as CardEntry } from '../../../@types/generated'
import { Image } from '../../Assets/Image'
import { documentToReactComponents } from '../../Nodes'
import { color } from '../../theme/color'
import { spacing } from '../../theme/spacing'
import { shadow } from '../../theme/shadow'
import { H2Styles } from '../../theme/Typography'

export type CardProps = {
  className?: string
  entry: CardEntry
}

export const Card = styled(
  ({ className, entry: { image, title, body } }: CardProps) => {
    return (
      <div className={className}>
        {image && image.url && image.description && (
          <img src={image.url} alt={image.description} />
        )}
        <span className="card-title">{title}</span>
        {body && documentToReactComponents((body.json as unknown) as Document)}
      </div>
    )
  }
)`
  background-color: ${color('primary.100')};
  border-radius: ${spacing(1)};
  padding: ${spacing(6)};
  box-shadow: ${shadow('shadow')};
  color: ${color('white.50')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing(12)};
  .card-title {
    margin: ${spacing(8, 0, 2)};
    ${H2Styles}
  }
  img {
    border-radius: 50%;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`
