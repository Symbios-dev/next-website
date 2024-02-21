import Head from 'next/head';
import Header from './header/header';
import Footer from './footer';

// Repeated code and poor readability
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

  // Repeated code: Meta tags are similar and could be optimized
  // Poor readability: Inline styling and lack of spacing make it hard to read
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

      <Footer />

      {/* Repeated Footer for demonstration of repeated code */}
      <Footer />
    </>
  );
}
