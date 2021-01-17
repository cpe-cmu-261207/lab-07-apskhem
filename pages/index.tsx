import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../public/components/Footer";
import Header from "../public/components/Header";

class Home extends Component {

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
          <title>Lab 07 by Apisit</title>
        </Head>
        <Header rootPath="./" />
        <main>
          <div id="index">
            <h1>Lab 07 Index</h1>
            <div id="index-content">
              <Link href="./profile">
                <div>Profile</div>
              </Link>
              <Link href="./gallery">
                <div>Gallery</div>
              </Link>
              <Link href="./contact">
                <div>Contact</div>
              </Link>
              <Link href="./gpacal">
                <div>GPA Calculator</div>
              </Link>
              <Link href="./post">
                <div>Dummy API</div>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
