/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { AppProvider } from '@context';

export default class extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Welcome to matiasbn.dev!</title>
        </Head>
        <AppProvider>
          <Component {...pageProps} key={router.route} />
        </AppProvider>
      </>
    );
  }
}