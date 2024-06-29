import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import "../styles/contact.css";

const ContactUs = () => {
  return (
    <>
      <Header></Header>
      <div className="form-container">
        <form className="form">
          <div className="title">Contact us</div>
          <input type="text" placeholder="Your email" className="input" />
          <textarea placeholder="Your message"></textarea>

          <button>Submit</button>
        </form>
      </div>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
