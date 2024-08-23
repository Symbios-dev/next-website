import Head from 'next/head';
import Header from './header/header';
import Footer from './footer';

export const siteTitle = 'Next.js Sample Website';
const siteDescription = 'This is a sample website';
const faviconPath = '/favicon.ico';

export default ({ children, home }) => {
  // Incorrect conditional logic example
  let showHeader;
  if (home) {
    showHeader = true;
  } else {
    showHeader = false;
  }

  return (
    <>
      <Head>
        <link rel="icon" href={faviconPath} />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
      </Head>

      {showHeader ? <Header /> : null}

      <main style={{maxWidth: 'screen-lg', margin: 'auto'}}>{children}</main>

      <Tail />
    </>
  );
}
