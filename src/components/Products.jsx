import React, { useEffect, useState } from "react";
import arrival from "../assets/img/gallery/arrival2.png";
import card from "../assets/img/gallery/card.svg";
import { Link } from "react-router-dom";
import ProductListing from "./ProductListing";
import Spinner from "./Spinner";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/?limit=8");
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
      <div className="new-arrival">
        <div className="container">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <div className="row">
              {products.map((product) => (
                <ProductListing key={product.id} product={product} />
              ))}
            </div>
          )}

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
