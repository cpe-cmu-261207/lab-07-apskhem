import { Component } from "react";
import Head from "next/head";
import Footer from "../public/components/Footer";
import Header from "../public/components/Header";

class Contact extends Component {

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
          <title>Lab 07 | Contact</title>
        </Head>
        <Header rootPath="./" />
        <main>
          <h1>Contact</h1>
          <div className="main-content fansy-drop-shadow">
            <div className="content-block">
              <h3><i className="fas fa-file-contract"></i>Get In Touch</h3>
              <div className="half-grid contact-grid">
                <aside>
                  <label>Fisrt Name</label>
                  <input className="input-box" type="text" placeholder="first name"></input>
                </aside>
                <aside>
                  <label>Last Name</label>
                  <input className="input-box" type="text" placeholder="last name"></input>
                </aside>
                <aside>
                  <label>Email Address</label>
                  <input className="input-box" type="email" placeholder="email address"></input>
                </aside>
                <aside>
                  <label>Phone Number</label>
                  <input className="input-box" type="text" placeholder="phone number"></input>
                </aside>
              </div>
              <label>Comment or Message</label>
              <textarea className="comment-input" name="" id="" cols={30} rows={10} maxLength={500} placeholder="enter massage here"></textarea>
              <div className="submit-btn">Submit</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Contact;
