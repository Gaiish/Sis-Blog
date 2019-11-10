import App from "next/app";
import Head from "next/head";
import React from "react";

import firebase from "firebase/app";
import config from "../config";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // initialize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Gaflo - blog</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
