import { Component } from "react";
import Head from "next/head";
import Image from 'next/image'
import Footer from "../public/components/Footer";
import Header from "../public/components/Header";

class Profile extends Component {

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
          <title>Lab 07 | Profile</title>
        </Head>
        <Header rootPath="./" />
        <main>
          <h1>My Profile</h1>
          <div>
            <div className="main-content fansy-drop-shadow">
              <div id="profile-block" className="content-block">
                <aside className="img-container">
                  <Image src="/img/get-image-hi.jpeg" alt="profile-pic" layout={"fill"} objectFit={"contain"}/>
                </aside>
                <aside>
                  <h3><i className="fas fa-address-book"></i>Links</h3>
                  <div className="f-list">
                    <aside>
                      <i className="fas fa-envelope"></i>
                      <i className="fas fa-phone-alt"></i>
                      <i className="fab fa-facebook-square"></i>
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-github"></i>
                    </aside>
                    <aside>
                      <li>apisit_rit@cmu.ac.th</li>
                      <li>(+66) 082-1866-840</li>
                      <li><a href="https://www.facebook.com/aps.khemdev" target="_blank">Apisit Ritreungroj</a></li>
                      <li><a href="https://www.instagram.com/apskhem" target="_blank">apskhem</a></li>
                      <li><a href="https://github.com/apskhem" target="_blank">apskhem</a></li>
                    </aside>
                  </div>
                </aside>
                <aside>
                  <h3><i className="fas fa-user-circle"></i>Profile</h3>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </aside>
              </div>
              <hr></hr>
              <div className="content-block">
                <h3><i className="fas fa-graduation-cap"></i>Education</h3>
                <div id="education-block">
                  <aside className="edu-content">
                    <h3 className="header-icon">Middle School</h3>
                    <small>20, May. 2013 - 25, Mar. 2016</small>
                    <div>
                      <li className="insti">Thepbodint Chiang Mai</li>
                    </div>
                  </aside>
                  <aside className="edu-content">
                    <h3 className="header-icon">High School</h3>
                    <small>10, May. 2016 - 29, Mar. 2019</small>
                    <div>
                      <li className="insti">Yupparaj Wittaylai</li>
                      <li>Sci-Math</li>
                      <li>SOMTOB PSDT</li>
                    </div>
                  </aside>
                  <aside className="edu-content">
                    <h3 className="header-icon">Bachelor Degree</h3>
                    <small>5, Aug. 2019 - Present</small>
                    <div>
                      <li className="insti">Chiang Mai University</li>
                      <li>Computer Engineering</li>
                    </div>
                  </aside>
                </div>
              </div>
              <hr></hr>
              <div className="content-block">
                <h3><i className="fas fa-tools"></i>Skills</h3>
                <div id="skills-block">
                  <aside className="skills-content">
                    <h3 className="header-icon">Languages</h3>
                    <div>
                      <li>Thai (native)</li>
                      <div className="language-bar-container">
                        <aside>
                          <div style={{ width: "100%" }}>&nbsp;&nbsp;L</div>
                        </aside>
                        <aside>
                          <div style={{ width: "100%" }}>&nbsp;&nbsp;R</div>
                        </aside>
                        <aside>
                          <div style={{ width: "100%" }}>&nbsp;&nbsp;S</div>
                        </aside>
                        <aside>
                          <div style={{ width: "100%" }}>&nbsp;&nbsp;W</div>
                        </aside>
                      </div>
                    </div>
                    <div>
                      <li>English</li>
                      <div className="language-bar-container">
                        <aside>
                          <div style={{ width: "89%" }}>&nbsp;&nbsp;L</div>
                        </aside>
                        <aside>
                          <div style={{ width: "72%" }}>&nbsp;&nbsp;R</div>
                        </aside>
                        <aside>
                          <div style={{ width: "68%" }}>&nbsp;&nbsp;S</div>
                        </aside>
                        <aside>
                          <div style={{ width: "94%" }}>&nbsp;&nbsp;W</div>
                        </aside>
                      </div>
                    </div>
                    <div>
                      <li>French</li>
                      <div className="language-bar-container">
                        <aside>
                          <div style={{ width: "25%" }}>&nbsp;&nbsp;L</div>
                        </aside>
                        <aside>
                          <div style={{ width: "67%" }}>&nbsp;&nbsp;R</div>
                        </aside>
                        <aside>
                          <div style={{ width: "40%" }}>&nbsp;&nbsp;S</div>
                        </aside>
                        <aside>
                          <div style={{ width: "60%" }}>&nbsp;&nbsp;W</div>
                        </aside>
                      </div>
                    </div>
                  </aside>
                  <aside className="skills-content">
                    <h3 className="header-icon">Sport</h3>
                    <div className="sport-container">
                      <li>Badminton</li>
                      <li>Basketball</li>
                      <li>Chess</li>
                      <li>Snooker</li>
                    </div>
                  </aside>
                  <aside className="skills-content">
                    <h3 className="header-icon">Technical</h3>
                    <small>More than 4 years of coding experience</small>
                    <div className="technical-container">
                      <li>C/C++</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>C#</li>
                      <li>Unity3D</li>
                      <li>libGDX</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>Apps Script</li>
                      <li>Express.js</li>
                      <li>React/NextJS</li>
                      <li>Vue</li>
                      <li>Rust</li>
                      <li>HTML5</li>
                      <li>UI/UX</li>
                      <li>CSS3/SCSS</li>
                      <li>MongoDB</li>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Profile;
