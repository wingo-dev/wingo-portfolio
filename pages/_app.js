import Head from "next/head";
import { Fragment } from "react";
import ColorState from "../src/context/colorState";
import NavState from "../src/context/navState";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link
          type="text/css"
          media="all"
          href="css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="css/jquery.animatedheadline.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/public/css/plugins.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="css/style.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
        <title>Istanbul - Personal Portfolio</title>
      </Head>
      <NavState>
        <ColorState>
          <Component {...pageProps} />
          <PreLoader />
        </ColorState>
      </NavState>
    </Fragment>
  );
}

export default MyApp;
