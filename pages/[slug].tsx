import React from 'react'
import { useRouter } from 'next/router'
import { Document } from '@contentful/rich-text-types'

import { documentToReactComponents } from '../components/Nodes'
import ErrorPage from 'next/error'

import { Navigation } from '../components/Navigation'
import { Page as StyledPage } from '../components/Page/Page'
import { Footer } from '../components/Footer'
import { Body } from '../components/theme/Body'
import GET_PAGE from '../graphql/get-page.graphql'
import GET_ALL_PAGES from '../graphql/get-all-pages.graphql'
import GET_NAVIGATION from '../graphql/get-site-navigation.graphql'
import { Page as PageData, NavigationMenu } from '../@types/generated'
import { initializeApollo } from '../lib/apolloClient'
import {
  extractNavigationLinks,
  extractPage,
  extractPageEntries,
  getAllPages,
} from '../lib/api'
type PageProps = {
  desktopMarginTop?: boolean
  page: PageData
  navigation: NavigationMenu
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
        {page?.body &&
          documentToReactComponents(
            (page?.body.json as unknown) as Document,
            page.body.links
          )}
      </Body>
      <Footer />
    </StyledPage>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const client = initializeApollo()
  const page = extractPage(
    await client.query({
      query: GET_PAGE,
      variables: {
        slug: params.slug,
        preview,
      },
    })
  )
  const navigation = extractNavigationLinks(
    await client.query({
      query: GET_NAVIGATION,
      variables: {
        preview,
      },
    })
  )

  return {
    props: {
      page,
      navigation,
    },
  }
}

export async function getStaticPaths() {
  const client = initializeApollo()
  const allPages = extractPageEntries(
    await client.query({
      query: GET_ALL_PAGES,
    })
  )
  return {
    paths: allPages?.map(({ slug }) => `/${slug}`) ?? [],
    fallback: true,
  }
}
