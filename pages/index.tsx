import React from 'react'
import { useRouter } from 'next/router'
import { Document } from '@contentful/rich-text-types'
import Head from 'next/head'
import { Entry } from 'contentful'

import {
  INavigationMenu,
  IPage,
  IPageFields,
} from '../@types/generated/contentful'
import { documentToReactComponents } from '../components/Nodes'
import ErrorPage from 'next/error'

import { getEntry } from '../lib/Contentful'
import styled, { css } from 'styled-components'
import { spacing } from '../components/theme/spacing'
import { query } from '../components/theme/mediaQueies'
import { Navigation } from '../components/Navigation'
import { Page as StyledPage } from '../components/Page/Page'
import { Footer } from '../components/Footer'

type PageProps = {
  desktopMarginTop?: boolean
  page: IPage
  navigation: INavigationMenu
}

type BodyProps = {
  desktopMarginTop?: boolean
}

export const Body = styled.section<BodyProps>`
  margin-left: auto;
  margin-right: auto;
  padding: ${spacing(0, 4)};
  margin-top: ${spacing(24)};
  max-width: 1440px;
  ${query('md')} {
    ${({ desktopMarginTop = true }) =>
      desktopMarginTop
        ? css`
            margin-top: ${spacing(35)};
          `
        : css`
            margin-top: 0;
          `}
  }
`

export default function Page({
  desktopMarginTop,
  page,
  navigation,
}: PageProps) {
  const router = useRouter()
  if (!router.isFallback && !page) {
    return (
      <>
        <ErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <StyledPage>
      <Navigation navigation={navigation} />
      <Body desktopMarginTop={desktopMarginTop}>
        {page?.fields?.body &&
          documentToReactComponents(page?.fields?.body as Document)}
      </Body>
      <Footer />
    </StyledPage>
  )
}

export async function getStaticProps({ preview = false }) {
  const navigationData = await getEntry('1GjjrJGYkHlgrGltIHjrcU', {})
  const pageData = (await getEntry(
    '2Ar9gUgcFgu8mUXQ8TXCqI',
    {}
  )) as Entry<IPageFields>
  console.log()
  const desktopMarginTop =
    Object.keys(pageData.fields.body?.content[0].data).length !== 0
      ? !(
          pageData.fields.body?.content[0]?.data.target.sys.contentType.sys
            .id === 'hero'
        )
      : true
  return {
    props: {
      preview,
      navigation: navigationData,
      page: pageData ?? null,
      desktopMarginTop,
    },
  }
}
