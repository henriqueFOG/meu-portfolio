import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(){
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Portfólio de Francisco Henrique Oliveira Gonçalves" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
