/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect } from 'react';
import Head from 'next/head';
import App from 'next/app';
import { AppProvider } from '@store';

export default class extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Hello!</title>
        </Head>
        <AppProvider>
          <Component {...pageProps} key={router.route} />
        </AppProvider>
      </>
    );
  }
}
