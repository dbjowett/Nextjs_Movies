import '../styles/globals.css';
import nProgress from 'nprogress';
import '../styles/nProgress.css';
import Router from 'next/router';
import Page from '../components/layout/Page';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Head>
        <title>Movies</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
