import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { BlueTheme } from '../components/theme/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <BlueTheme>
        <Component {...pageProps} />
      </BlueTheme>
    </>
  )
}

export default MyApp
