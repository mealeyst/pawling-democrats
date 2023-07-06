import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { BlueTheme } from '../components/theme/Theme'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('pageProps', pageProps)
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
  console.log('INITIAL PROPS', initialProps)
  return initialProps
}
export default MyApp
