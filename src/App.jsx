import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFount";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/about-us" element={<About></About>}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
