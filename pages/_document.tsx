// Personalizacion de Nextjs
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        {/* favicon */}
        {/* webfont */}
        {/* styles */}
        {/* scripts */}
        </Head>
        <body className='body-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument