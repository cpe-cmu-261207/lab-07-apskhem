import { Component } from "react";
import Head from "next/head";
import Footer from "../public/components/Footer";
import Header from "../public/components/Header";

class Gallery extends Component {

  public readonly imgs = [
    "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images-na.ssl-images-amazon.com/images/I/516rLmDTj2L.jpg",
    "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://scx2.b-cdn.net/gfx/news/hires/2014/0318_cogsci-grades-orig.jpg",
    "https://i.imgflip.com/3mym0p.png",
    "https://i.pinimg.com/736x/cd/91/a8/cd91a8a30cf16872c2121427cbb0eab4.jpg",
    "https://i.pinimg.com/originals/a5/21/30/a5213041209095060cd2c94e460d0e5f.jpg",
    "https://recruiterflow.com/blog/wp-content/uploads/2017/10/stackoverflow.png",
    "https://i2.wp.com/bangkokmusiccity.com/wp-content/uploads/2019/10/Earth-Patravee-1.jpg",
    "https://wallpapercave.com/wp/wp1852922.jpg",
    "https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/08/06/paradoxbig_feature.jpeg",
    "https://goqii.com/blog/wp-content/uploads/Minimalist-Living-Why-Less-is-More-1024x682.jpg"
  ];

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
          <title>Lab 07 | Gallery</title>
        </Head>
        <Header rootPath="./" />
        <main>
          <h1>My Gallery</h1>
          <div className="main-content fansy-drop-shadow">
            <div className="content-block">
              <h3><i className="fas fa-images"></i>Interesting Gallery</h3>
              <table style={{ tableLayout: "fixed", width: "100%" }}>
                <tr>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[0]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Cappuccino</h3>
                      <li>My favorite caffeine drinking.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[1]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Cats</h3>
                      <li>My favorite animal, because they're cute.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[2]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Coding</h3>
                      <li>My everyday life.</li>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[3]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Artificial intelligence</h3>
                      <li>My field of interesting in programming.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container wide">
                      <img src={this.imgs[4]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Investment & Finance</h3>
                      <li>Current things which I'm interested.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[5]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>IU</h3>
                      <li>My favorite Korean singer.</li>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[6]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Start-Up</h3>
                      <li>The K-series which I currently watched.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[7]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Stack Overflow</h3>
                      <li>Asked for algorithm hw solution.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[8]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Earth Patravee</h3>
                      <li>My favorite Thai singer.</li>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[9]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Badminton</h3>
                      <li>My favorite sport.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[10]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Paradox Interactive</h3>
                      <li>My favorite game producer.</li>
                    </div>
                  </td>
                  <td>
                    <div className="gallery-img-container">
                      <img src={this.imgs[11]} alt="A nice pic"></img>
                    </div>
                    <div>
                      <h3>Minimalism</h3>
                      <li>My favorite design; less but expensive.</li>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Gallery;
