import React from 'react'
import styled from 'styled-components'
import { Document } from '@contentful/rich-text-types'

import { IHeroFields } from '../../../@types/generated/contentful'
import { documentToReactComponents } from '../../Nodes'
import { fetchAssetURL, getAspectRatio } from '../../Assets/utils'
import { H1, TitleStyles } from '../../theme/Typography'
import { color } from '../../theme/color'
import { spacing } from '../../theme/spacing'
import { query } from '../../theme/mediaQueies'

type HeroProps = {
  className?: string
  fields: IHeroFields
}

export const Hero = styled(({ className, fields }: HeroProps) => (
  <div className={className}>
    <div className="layout-region">
      <section className="hero-content">
        {fields.contentRegion &&
          documentToReactComponents(fields.contentRegion as Document)}
      </section>
    </div>
  </div>
))`
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: ${spacing(10)};
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
  background-image: linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.75) 40%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.75) 40%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${({ fields: { heroImage } }) => heroImage && fetchAssetURL(heroImage)});
  padding-top: ${({ fields: { heroImage } }) =>
    heroImage && getAspectRatio(heroImage)}%;
  background-size: cover;
  ${query('md')} {
    margin-bottom: ${spacing(20)};
  }
  .layout-region {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 1440px;
    transform: translateX(-50%);
    margin: 0 auto;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: span 10;
    grid-row-start: 1;
    grid-row-end: 11;
    justify-content: center;
    margin: ${spacing(0, 4)};
    ${query('md')} {
      grid-column-start: 1;
      grid-column-end: span 8;
      grid-row-start: 2;
      grid-row-end: span 6;
    }
    ${H1} {
      ${query('md')} {
        ${TitleStyles}
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      color: ${color('primary.400')};
    }
  }
`
