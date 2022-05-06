import React, { HTMLAttributes, useState, useEffect } from 'react';
import { Document } from '@contentful/rich-text-types';
import { useParams } from 'react-router-dom';

import { documentToReactComponents } from '../../Nodes';
import { Entry } from 'contentful';
import { IPageFields } from '../../../../@types/generated/contentful';
import styled from 'styled-components';
import { up } from '../../../theme/mediaQueies';
import { spacing } from '../../../theme/spacing';
import { getEntries } from '../../../services/Contentful';

export const Body = styled.section`
  margin: ${spacing(20, 4, 4)};
  ${up('sm')`
    margin: ${spacing(35, 4, 4)};
  `}
`

export const Page = () => {
  const { slug = 'home' } = useParams();
  
  const [body, setBody] = useState<Document | undefined>(undefined);
  useEffect(() => {
    (async () => {
      const data = await getEntries({
        'content_type': 'page',
        'fields.slug': slug
      }) as Entry<IPageFields>[];
      data && setBody(data[0].fields.body as Document)
    })();
  }, [slug]);
  return (
    <main>
      <Body>
        {body && documentToReactComponents(body as Document)}
      </Body>
    </main>
  )
}