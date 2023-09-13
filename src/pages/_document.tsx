import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-color-mode="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&family=Inter&family=Montserrat:wght@600;700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body style={{ backgroundColor: '#000' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
