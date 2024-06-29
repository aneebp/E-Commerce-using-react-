import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const AboutUs = () => {
  return (
    <section className="collection section-bg2 section-padding30 section-over1 ml-15 mr-15">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="single-question text-center">
              <h2
                className="wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".1s"
              >
                collection houses our first-ever
              </h2>
              <Link
                to="/about-us"
                className="btn wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".4s"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
