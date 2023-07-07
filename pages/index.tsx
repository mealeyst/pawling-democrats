import React from 'react'
import { useRouter } from 'next/router'

import { documentToReactComponents } from '../components/Nodes'
import ErrorPage from 'next/error'

import { Navigation } from '../components/Navigation'
import { Page as StyledPage } from '../components/Page/Page'
import { Footer } from '../components/Footer'
import { Body } from '../components/theme/Body'
import { Page as PageResponse } from '../@types/generated'
import GET_PAGE from '../graphql/get-page.graphql'
import GET_NAVIGATION from '../graphql/get-site-navigation.graphql'
import { initializeApollo } from '../lib/apolloClient'
import { extractNavigationLinks, extractPage } from '../lib/api'
import { LinkList } from '../@types/Link'
import Script from 'next/script'

type PageProps = {
  desktopMarginTop?: boolean
  page: PageResponse
  navigation: LinkList
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
      {' '}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CETBKZ91KC"
      />
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CETBKZ91KC');
          `}
      </Script>
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
