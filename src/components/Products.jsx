import React from "react";
import arrival from "../assets/img/gallery/arrival2.png";
import card from "../assets/img/gallery/card.svg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="new-arrival">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div
                className="section-tittle mb-60 text-center wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".2s"
              >
                <h2>Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <Link to="/product-details">
                <div
                  className="single-new-arrival mb-50 text-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  <div className="popular-img">
                    <img src={arrival} alt="" />
                    <div className="favorit-items">
                      <img src={card} alt="" />
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

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div className="popular-img">
                  <img src={arrival} alt="" />
                  <div className="favorit-items">
                    <img src={card} alt="" />
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

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div className="popular-img">
                  <img src={arrival} alt="" />
                  <div className="favorit-items">
                    <img src={card} alt="" />
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

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div className="popular-img">
                  <img src={arrival} alt="" />
                  <div className="favorit-items">
                    <img src={card} alt="" />
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

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div className="popular-img">
                  <img src={arrival} alt="" />
                  <div className="favorit-items">
                    <img src={card} alt="" />
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
          <div className="row justify-content-center">
            <div className="room-btn">
              <Link to="/shop" className="border-btn">
                Browse More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
