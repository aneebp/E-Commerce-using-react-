import React from "react";
import { Link } from "react-router-dom";
import detImg from "../assets/img/gallery/gallery1.png";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

const ProductDetails = () => {
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
                    <Link to="/product-details">shop</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Product Details</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="directory-details pt-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="small-tittle mb-20">
                <h2>Description</h2>
              </div>
              <div className="directory-cap mb-40">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.
                </p>
              </div>
              <div className="small-tittle mb-20">
                <h2>Image</h2>
              </div>
              <div className="gallery-img">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={detImg} className="mb-30" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="map">
                <img src="assets/img/gallery/map.png" alt="" />
              </div>
              <div className="form-wrapper pt-80">
                <div className="row ">
                  <div className="col-xl-12">
                    <div className="small-tittle mb-30">
                      <h2>Contact</h2>
                    </div>
                  </div>
                </div>
                <form id="contact-form" action="#" method="POST">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-15">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box email-icon mb-15">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-15">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Comment"
                        ></textarea>
                      </div>
                      <div className="submit-info">
                        <button className="submit-btn2" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
