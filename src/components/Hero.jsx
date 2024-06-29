import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid">
      <div className="slider-area">
        <div className="header-right2 d-flex align-items-center">
          <div className="header-social  d-block d-md-none">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://bit.ly/sai4ull">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>

          <div className="search d-block d-md-none">
            <ul className="d-flex align-items-center">
              <li className="mr-15">
                <div className="nav-search search-switch">
                  <i className="ti-search"></i>
                </div>
              </li>
              <li>
                <div className="card-stor">
                  <img src="../assets/img/gallery/card.svg" alt="" />
                  <span>0</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="slider-active dot-style">
          <div className="single-slider slider-bg1 hero-overly slider-height d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero__caption">
                    <h1>fashion changing always</h1>
                    <Link to="/shop" className="btn">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
