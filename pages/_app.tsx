import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
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
MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context)

  const initialProps = {
    ...ctx,
    preview: 'CONTENTFUL_PREVIEW_ACCESS_TOKEN' in process.env,
  }
  return initialProps
}
export default MyApp
