import get from 'lodash/get'
import React from 'react'
import { useRouter } from 'next/router'
import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'

import {
  INavigationMenu,
  IPage,
  IPageFields,
} from '../@types/generated/contentful'
import { documentToReactComponents } from '../components/Nodes'
import ErrorPage from 'next/error'

import { getAllPagesWithSlug } from '../lib/api'
import { getEntries, getEntry } from '../lib/Contentful'
import styled, { css } from 'styled-components'
import { spacing } from '../components/theme/spacing'
import { query } from '../components/theme/mediaQueies'
import { Navigation } from '../components/Navigation'
import { Page as StyledPage } from '../components/Page/Page'
import { Footer } from '../components/Footer'
import { Body } from '../components/theme/Body'

type PageProps = {
  desktopMarginTop?: boolean
  page: IPage
  navigation: INavigationMenu
}

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

export async function getStaticProps({ params, preview = false }) {
  const navigationData = await getEntry('1GjjrJGYkHlgrGltIHjrcU', {})
  const pageData = (await getEntries({
    content_type: 'page',
    'fields.slug': params.slug === 'pawling-democrats' ? 'home' : params.slug,
    include: 10,
  })) as Entry<IPageFields>[]
  const firstElement = pageData[0].fields.body?.content[0]
  const desktopMarginTop =
    firstElement?.data.target?.sys.contentType.sys.id !== 'hero'
  return {
    props: {
      preview,
      navigation: navigationData,
      page: pageData[0] ?? null,
      desktopMarginTop,
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
