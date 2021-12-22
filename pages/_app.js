import '../styles/globals.css';
import nProgress from 'nprogress';
import '../styles/nProgress.css';
import Router from 'next/router';
import Page from '../components/Page';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
