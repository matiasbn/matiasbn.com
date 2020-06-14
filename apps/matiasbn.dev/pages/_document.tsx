import React, { ReactElement } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '@atoms/GlobalStyle';

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <App {...props} /> <GlobalStyle />
        </>
      )
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content={`width=device-width, initial-scale=1`}
          />
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
