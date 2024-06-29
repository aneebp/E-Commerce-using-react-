import React from "react";
import shopImg from "../assets/img/gallery/arrival2.png";
import cart from "../assets/img/gallery/card.svg";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Shop = () => {
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
                    <a href="#">Shop</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="category-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-60">
                <h2>Shop with us</h2>
                <p>Browse from 230 latest items</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-xl-3 col-lg-3 col-md-4 "></div> */}
            <div className="col-xl-12 col-lg-9 col-md-8">
              <div className="new-arrival new-arrival2">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <Link to="/product-details">
                      <div className="single-new-arrival mb-50 text-center">
                        <div className="popular-img">
                          <img src={shopImg} alt="" />
                          <div className="favorit-items">
                            <img src={cart} alt="" />
                          </div>
                        </div>
                        <div className="popular-caption">
                          <h3>
                            <a href="product_details.html">Knitted Jumper</a>
                          </h3>
                          <div className="rating mb-10">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span>$ 30.00</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src={shopImg} alt="" />
                        <div className="favorit-items">
                          <img src={cart} alt="" />
                        </div>
                      </div>
                      <div className="popular-caption">
                        <h3>
                          <a href="product_details.html">Knitted Jumper</a>
                        </h3>
                        <div className="rating mb-10">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>$ 30.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src={shopImg} alt="" />
                        <div className="favorit-items">
                          <img src={cart} alt="" />
                        </div>
                      </div>
                      <div className="popular-caption">
                        <h3>
                          <a href="product_details.html">Knitted Jumper</a>
                        </h3>
                        <div className="rating mb-10">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>$ 30.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src={shopImg} alt="" />
                        <div className="favorit-items">
                          <img src={cart} alt="" />
                        </div>
                      </div>
                      <div className="popular-caption">
                        <h3>
                          <a href="product_details.html">Knitted Jumper</a>
                        </h3>
                        <div className="rating mb-10">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>$ 30.00</span>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Shop;
