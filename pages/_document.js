import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
      
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
          <script src="./js/feedback.js"></script> 
        </Head>
        <body className="h-full font-light text-base 2xl:text-xl bg-cascade transition">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}