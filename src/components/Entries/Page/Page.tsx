import React, { HTMLAttributes } from 'react';
import { Document } from '@contentful/rich-text-types';
import { useParams } from 'react-router-dom';

import { documentToReactComponents } from '../../Nodes';
import { useEntries } from '../../../hooks/useEntries';
import { Navigation } from '../../Navigation';
import { UsePromisedState } from '../../../hooks/usePromised';
import { Entry } from 'contentful';
import { IPageFields } from '../../../../@types/generated/contentful';
import styled from 'styled-components';
import { up } from '../../../theme/mediaQueies';
import { spacing } from '../../../theme/spacing';


export const Body = styled.section`
  margin: ${spacing(20, 4, 4)};
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // gap: ${spacing(3)};
  // > * {
  //   grid-column: span 4;
  // }
  // ${up('md')`
  //   grid-template-columns: repeat(12, 1fr);
  //   > * {
  //     grid-column: span 12;
  //   }
  // `}
`

export const Page = () => {
  const { slug = 'home' } = useParams();
  const { data, error, isLoading, } = useEntries({
    'content_type': 'page',
    'fields.slug[in]': slug
  }) as UsePromisedState<Entry<IPageFields>[]>;
  const shouldRender = !isLoading && data
  return (
    <main>
      <Navigation />
      <Body>
        {shouldRender && documentToReactComponents(data[0].fields.body as Document)}
      </Body>
    </main>
  )
}