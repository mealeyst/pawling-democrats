import Head from 'next/head';
import { BlueTheme } from '../components/theme/Theme';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <BlueTheme>
          <Component {...pageProps} />
        </BlueTheme>
      </>
  )
}

export default MyApp
