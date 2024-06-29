import { Link } from "react-router-dom";
import cartIMG from "../assets/img/gallery/card.svg";
function Header() {
  return (
    <>
      <header>
        <div className="header-area ">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="header-left d-flex align-items-center">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>

                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <Link to="/shop">shop</Link>
                        </li>
                        <li>
                          <Link to="/about-us">About</Link>
                        </li>

                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-right1 d-flex align-items-center">
                  <div className="header-social d-none d-md-block">
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

                  <div className="search d-none d-md-block">
                    <ul className="d-flex align-items-center">
                      <li className="mr-15">
                        <div className="nav-search search-switch">
                          <i className="ti-search"></i>
                        </div>
                      </li>
                      <li>
                        <div className="card-stor">
                          <img src={cartIMG} alt="" />
                          {/* <span>0</span> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
