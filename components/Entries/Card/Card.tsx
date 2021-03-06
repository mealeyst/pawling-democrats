import React from 'react'
import styled from 'styled-components'
import { Document } from '@contentful/rich-text-types'

import { ICardFields } from '../../../@types/generated/contentful'
import { Image } from '../../Assets/Image'
import { documentToReactComponents } from '../../Nodes'
import { color } from '../../theme/color'
import { spacing } from '../../theme/spacing'
import { shadow } from '../../theme/shadow'
import { H2Styles } from '../../theme/Typography'

export type CardProps = {
  className?: string
  fields: ICardFields
}

export const Card = styled(
  ({ className, fields: { image, title, body } }: CardProps) => {
    return (
      <div className={className}>
        {image && (
          <Image
            {...image}
            api={{ width: 300, height: 300, focus: 'face', fit: 'fill' }}
          />
        )}
        <span className="card-title">{title}</span>
        {body && documentToReactComponents(body as Document)}
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
  ${Image} {
    border-radius: 50%;
    width: 100%;
    display: flex;
  }
`
