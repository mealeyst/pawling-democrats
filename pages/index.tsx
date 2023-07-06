import React from 'react'
import { useRouter } from 'next/router'
import { Document } from '@contentful/rich-text-types'

import { documentToReactComponents } from '../components/Nodes'
import ErrorPage from 'next/error'

import { Navigation } from '../components/Navigation'
import { Page as StyledPage } from '../components/Page/Page'
import { Footer } from '../components/Footer'
import { Body } from '../components/theme/Body'
import { NavigationMenu, Page as PageResponse } from '../@types/generated'
import GET_PAGE from '../graphql/get-page.graphql'
import GET_NAVIGATION from '../graphql/get-site-navigation.graphql'
import { initializeApollo } from '../lib/apolloClient'
import { extractNavigationLinks, extractPage } from '../lib/api'

type PageProps = {
  desktopMarginTop?: boolean
  page: PageResponse
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
          documentToReactComponents(page.body.json, page.body?.links)}
      </Body>
      <Footer />
    </StyledPage>
  )
}

export async function getStaticProps({ preview = false }) {
  console.log('HOME PREVIEW MODE', preview)
  const apolloClient = initializeApollo()

  const page = extractPage(
    await apolloClient.query({
      query: GET_PAGE,
      variables: {
        slug: 'home',
        preview,
      },
    })
  )
  const navigation = extractNavigationLinks(
    await apolloClient.query({
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
