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
import { Page as PageData } from '../@types/generated'
import { initializeApollo } from '../lib/apolloClient'
import {
  extractNavigationLinks,
  extractPage,
  extractPageEntries,
} from '../lib/api'
import { LinkList } from '../@types/Link'
import Script from 'next/script'
type PageProps = {
  desktopMarginTop?: boolean
  page: PageData
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
