import { useRouter } from 'next/router'
import { Document } from '@contentful/rich-text-types';
import Head from 'next/head'
import { Entry } from 'contentful';

import { IPageFields } from '../@types/generated/contentful';
import { documentToReactComponents } from '../components/Nodes';
import ErrorPage from 'next/error'

import { getPage, getAllPagesWithSlug } from '../lib/api'
import { getEntries, getEntry } from "../lib/Contentful"
import styled, { css } from 'styled-components';
import { spacing } from '../components/theme/spacing';
import { query } from '../components/theme/mediaQueies';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

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

export default function Page({ page, navigation, preview }) {
  const router = useRouter()
  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
    <Navigation navigation={navigation} />
    <Body>
      {page?.fields?.body && documentToReactComponents(page?.fields?.body as Document)}
    </Body>
    <Footer />
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const navigationData = await getEntry('1GjjrJGYkHlgrGltIHjrcU', {})
  const pageData = await getEntries({
    content_type: 'page',
    'fields.slug': params.slug === 'pawling-democrats' ? 'home' : params.slug,
    include: 10
  }) as Entry<IPageFields>[];

  return {
    props: {
      preview,
      navigation: navigationData,
      page: pageData[0] ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug()
  return {
    paths: allPages?.map(({ slug }) => `/${slug}`) ?? [],
    fallback: true,
  }
}
