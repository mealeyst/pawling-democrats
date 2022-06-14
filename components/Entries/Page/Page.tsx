import React, { useState, useEffect } from 'react';
import { Document } from '@contentful/rich-text-types';
import { useParams } from 'react-router-dom';

import { Entry } from 'contentful';
import styled, { css } from 'styled-components';
import { documentToReactComponents } from '../../Nodes';
import { IPageFields } from '../../../@types/generated/contentful';
import { query } from '../../theme/mediaQueies';
import { spacing } from '../../theme/spacing';
import { getEntries } from '../../../src/services/Contentful';

type BodyProps = {
  desktopMarginTop?: boolean
}

export const Body = styled.section<BodyProps>`
  margin-left: auto;
  margin-right: auto;
  padding: ${spacing(0, 4)};
  margin-top: ${spacing(24)};
  max-width: 1440px;
  ${query('md')}{
    ${({ desktopMarginTop = true }) =>
    (desktopMarginTop ? css`margin-top: ${spacing(35)};` : css`margin-top: 0;`)}
  }
`;

export const Page = () => {
  const { slug = 'home' } = useParams();

  const [body, setBody] = useState<Document | undefined>(undefined);
  useEffect(() => {
    (async () => {
      const data = await getEntries({
        content_type: 'page',
        'fields.slug': slug === 'pawling-democrats' ? 'home' : slug,
        include: 10
      }) as Entry<IPageFields>[];
      data && setBody(data[0].fields.body as Document);
    })();
  }, [slug]);
  const desktopMarginTop = !(body?.content[0]?.nodeType === "embedded-entry-block")
  console.log(body)
  return (
    <main>
      <Body desktopMarginTop={desktopMarginTop}>
        {body && documentToReactComponents(body as Document)}
      </Body>
    </main>
  );
};
