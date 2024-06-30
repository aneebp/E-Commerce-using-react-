import React, { useEffect, useState } from "react";
import arrival from "../assets/img/gallery/arrival2.png";
import card from "../assets/img/gallery/card.svg";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ProductListing from "../components/ProductListing";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("fetching failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
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
            {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default Shop;
