import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="favicon.ico"/>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js"/>
        </body>
      </Html>
    )
  }
}

export default MyDocument