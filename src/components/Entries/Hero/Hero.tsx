import React from 'react';
import styled, { css } from 'styled-components';
import { Document } from '@contentful/rich-text-types';

import { IHeroFields } from '../../../../@types/generated/contentful';
import { documentToReactComponents } from '../../Nodes';
import { fetchAssetURL, getAspectRatio } from '../../Assets/utils';

type HeroProps = {
  className?: string
  fields: IHeroFields
}

export const Hero = styled(({ className, fields }: HeroProps) =>
  (
    <div className={className}>
      <section>
        {fields.contentRegion && documentToReactComponents(fields.contentRegion as Document)}
      </section>
    </div>
  ))`
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
  background-image: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 55%, rgba(0,0,0,0) 100%), url(${({ fields: { heroImage } }) =>
    heroImage && fetchAssetURL(heroImage)});
  padding-top: ${({ fields: { heroImage } }) =>
    heroImage && getAspectRatio(heroImage)}%;
  background-size: cover;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 1440px;
    transform: translateX(-50%);
    margin: 0 auto;
  }
`;
