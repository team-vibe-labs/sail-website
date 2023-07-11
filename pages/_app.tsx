import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Sailed</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/blob.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/blob2.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/blob3.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/asterisk.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/heart.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/star.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/new-doodle.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/sailed-logo.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/p1.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/p2.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r1.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r2.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r3.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r4.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r5.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r6.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r7.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r8.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r9.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://d1zzqqpsok2fq2.cloudfront.net/r10.png"
          as="image"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
