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

import { getAllPagesWithSlug, getPage, getSiteNavigation } from '../lib/api'
import { getEntries, getEntry } from '../lib/Contentful'
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

export async function getStaticProps({ params, preview = true }) {
  const navigation = (await getSiteNavigation(preview)) ?? []
  const { page } = await getPage(params.slug, preview)
  const firstElement = page.body?.content[0]
  const desktopMarginTop =
    firstElement?.data.target?.sys.contentType.sys.id !== 'hero'
  return {
    props: {
      preview,
      navigation,
      page,
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
