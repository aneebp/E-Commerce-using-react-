import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ab1 from "../assets/img/gallery/about1.png";
import ab2 from "../assets/img/gallery/about2.png";

const About = () => {
  return (
    <>
      <Header></Header>
      <div className="page-notification">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">about</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>Our Story</h2>
                <p className="pera">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-img pb-bottom">
                <img src={ab1} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>Journey start from</h2>
                <p className="pera">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-img pb-bottom">
                <img src={ab2} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>2020</h2>
                <p className="pera">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-items">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular1.png" alt="" />
                  <div className="img-cap">
                    <span>Glasses</span>
                  </div>
                  <div className="favorit-items">
                    <a href="#" className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular2.png" alt="" />
                  <div className="img-cap">
                    <span>Watches</span>
                  </div>
                  <div className="favorit-items">
                    <a href="#" className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular3.png" alt="" />
                  <div className="img-cap">
                    <span>Jackets</span>
                  </div>
                  <div className="favorit-items">
                    <a href="#" className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular4.png" alt="" />
                  <div className="img-cap">
                    <span>Clothes</span>
                  </div>
                  <div className="favorit-items">
                    <a href="#" className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
