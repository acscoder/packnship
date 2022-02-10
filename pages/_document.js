import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
      
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
         
        </Head>
        <body className="h-full font-light text-base lg:text-xl bg-green">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
