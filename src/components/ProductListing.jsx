import React from "react";
import arrival from "../assets/img/gallery/arrival2.png";
import card from "../assets/img/gallery/card.svg";
import { Link } from "react-router-dom";

const ProductListing = ({ product }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <Link to={`/product-details/${product.id}`}>
          <div
            className="single-new-arrival mb-50 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <div className="popular-img">
              <img src={product.image} alt="" />
              <div className="favorit-items">
                <img src={card} alt="" />
              </div>
            </div>
            <div className="popular-caption">
              <h3>
                <a href="product_details.html">{product.title}</a>
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
    </>
  );
};

export default ProductListing;
