import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";

function Header() {
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  const currentRouter = router.pathname;
  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "pages":
        return { activeMenu: "pages" };
      case "news":
        return { activeMenu: "news" };
      case "brows":
        return { activeMenu: "brows" };
      case "itwork":
        return { activeMenu: "itwork" };
      case "about":
        return { activeMenu: "about" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }
  /*-----------searchbar full screen events-----------*/ 
  const hanldeSearchFullScreen = () => {
    if (search === false || search === 0) {
      setSearch(1);
      console.log(search);
    } else {
      setSearch(false);
    }
  };
  /*-----------mobile menu events-----------*/ 
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };
  /*-----------Sticky Menu Area-----------*/ 
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /*----------- Method that will fix header after a specific scrollable -----------*/
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };

  return (
    <>
      <div className={search === 1 ? "mobile-search slide" : "mobile-search"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div
                className={
                 
                  currentRouter === "/"
                    ? "search-cross-btn style-1"
                    : currentRouter === "/index2"
                    ? "search-cross-btn style-2"
                    : currentRouter === "/index3"
                    ? "search-cross-btn style-3"
                    : "search-cross-btn style-1"
                }
                onClick={hanldeSearchFullScreen}
              >
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={
          currentRouter === "/"
            ? "header-area style-1"
            : currentRouter === "/index2"
            ? "header-area style-2"
            : currentRouter === "/index3"
            ? "header-area style-3"
            : "header-area style-1"
        }
      >
        <div className="header-logo">
          <Link href="/">
            <a>
              <img
                alt="image"
                src={
                   /*diffrent page base logo*/ 
                  currentRouter === "/"
                    ? "assets/images/bg/header-logo.png"
                    : currentRouter === "/index2"
                    ? "assets/images/bg/header-logo2.png"
                    : currentRouter === "/index3"
                    ? "assets/images/bg/header3-logo.png"
                    : "assets/images/bg/header-logo.png"
                }
              />
            </a>
          </Link>
        </div>
        <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link href="/">
                <a>
                  <img
                    alt="image"
                    src={
                       /*diffrent page base logo*/ 
                      currentRouter === "/"
                        ? "assets/images/bg/header-logo.png"
                        : currentRouter === "/index2"
                        ? "assets/images/bg/header-logo2.png"
                        : currentRouter === "/index3"
                        ? "assets/images/bg/header3-logo.png"
                        : "assets/images/bg/header-logo.png"
                    }
                  />
                </a>
              </Link>
            </div>
            <div className="menu-close-btn" onClick={handleSidbarMenu}>
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <ul className="menu-list">
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "homeOne" })}
            >
              <Link href="#">
                <a
                  className={
                    currentRouter === "/" ||
                    currentRouter === "/index2" ||
                    currentRouter === "/index3"
                      ? "drop-down active"
                      : "drop-down desable"
                  }
                >
                  Home
                </a>
              </Link>
              <i
                className={
                  state.activeMenu === "homeOne"
                    ? "bx bx-minus dropdown-icon"
                    : "bx bx-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "homeOne"
                    ? "submenu d-block"
                    : "submenu d-xl-block d-none"
                }
              >
                <li>
                  <Link href="/">
                    <a className={currentRouter === "/" ? "active" : "desible"}>
                      Home 1
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/index2">
                    <a
                      className={
                        currentRouter === "/index2" ? "active" : "desible"
                      }
                    >
                      Home 2
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/index3">
                    <a
                      className={
                        currentRouter === "/index3" ? "active" : "desible"
                      }
                    >
                      Home 3
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={currentRouter === "/about" ? "active" : "desable"}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/how-works">
                <a
                  className={
                    currentRouter === "/how-works" ? "active" : "desable"
                  }
                >
                  How It Works
                </a>
              </Link>
            </li>
            <li>
              <Link href="/live-auction">
                <a
                  className={
                    currentRouter === "/live-auction" ? "active" : "desable"
                  }
                >
                  Browse Product
                </a>
              </Link>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "news" })}
            >
              <Link href="#">
                <a
                  className={
                    currentRouter === "/blog" ||
                    currentRouter === "/blog-details"
                      ? "drop-down active"
                      : "drop-down desable"
                  }
                >
                  News
                </a>
              </Link>
              <i
                className={
                  state.activeMenu === "news"
                    ? "bx bx-minus dropdown-icon"
                    : "bx bx-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "news"
                    ? "submenu d-block"
                    : "submenu d-xl-block d-none "
                }
              >
                <li>
                  <Link href="/blog">
                    <a
                      className={
                        currentRouter === "/blog" ? "active" : "desible"
                      }
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <a
                      className={
                        currentRouter === "/blog-details" ? "active" : "desible"
                      }
                    >
                      Blog Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "pages" })}
            >
              <Link href="#">
                <a
                  className={
                    currentRouter === "/auction-details" ||
                    currentRouter === "/login" ||
                    currentRouter === "/faq" ||
                    currentRouter === "/dashboard" ||
                    currentRouter === "/signup"
                      ? "drop-down active"
                      : "drop-down desable"
                  }
                >
                  Pages
                </a>
              </Link>
              <i
                className={
                  state.activeMenu === "pages"
                    ? "bx bx-minus dropdown-icon"
                    : "bx bx-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "pages"
                    ? "submenu d-block"
                    : "submenu d-xl-block d-none "
                }
              >
                <li>
                  <Link href="/auction-details">
                    <a
                      className={
                        currentRouter === "/auction-details" ? "active" : "desible"
                      }
                    >
                      Auction Details
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a
                      className={
                        currentRouter === "/faq" ? "active" : "desible"
                      }
                    >
                      Faq
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
                    <a
                      className={
                        currentRouter === "/dashboard" ? "active" : "desible"
                      }
                    >
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a
                      className={
                        currentRouter === "/login" ? "active" : "desible"
                      }
                    >
                      Login
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <a
                      className={
                        currentRouter === "/signup" ? "active" : "desible"
                      }
                    >
                      Sign Up
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/404">
                    <a>404</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    currentRouter === "/contact" ? "active" : "desible"
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          {/* mobile-search-area */}
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form mb-5">
              <div className="input-with-btn d-flex flex-column">
                <input type="text" placeholder="Search here..." />
                <button
                  type="submit"
                  className={
                    currentRouter === "/"
                      ? "eg-btn btn--primary btn--sm"
                      : currentRouter == "/index2"
                      ? "eg-btn btn--primary2 btn--sm"
                      : currentRouter === "/index3"
                      ? "eg-btn btn--primary3 btn--sm"
                      : "eg-btn btn--primary btn--sm"
                  }
                >
                  Search
                </button>
              </div>
            </form>
            <div className="hotline two">
              <div className="hotline-info">
                <span>Click To Call</span>
                <h6>
                  <a href="tel:347-274-8816">+347-274-8816</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        {currentRouter === "/index2" ? (
          <div className="nav-right d-flex align-items-center">
            <div className="search-btn" onClick={hanldeSearchFullScreen}>
              <i className="bi bi-search"></i>
            </div>
            <Link href="/join-merchant">
              <a className="join-btn">Join Merchant</a>
            </Link>
            <div className="eg-btn btn--primary2 header-btn">
              <Link href="/dashboard">
                <a>My Account</a>
              </Link>
            </div>
            <div
              className="mobile-menu-btn d-lg-none d-block"
              onClick={handleSidbarMenu}
            >
              <i className="bx bx-menu"></i>
            </div>
          </div>
        ) : (
          <div className="nav-right d-flex align-items-center">
            <div className="hotline d-xxl-flex d-none">
              <div className="hotline-icon">
                <img alt="image" src="assets/images/icons/header-phone.svg" />
              </div>
              <div className="hotline-info">
                <span>Click To Call</span>
                <h6>
                  <a href="tel:347-274-8816">+347-274-8816</a>
                </h6>
              </div>
            </div>
            <div className="search-btn" onClick={hanldeSearchFullScreen}>
              <i className="bi bi-search" />
            </div>
            <div
              className={
                currentRouter === "/"
                  ? "eg-btn btn--primary header-btn"
                  : currentRouter === "/index2"
                  ? "eg-btn btn--primary2 header-btn"
                  : currentRouter === "/index3"
                  ? "eg-btn btn--primary3 header-btn"
                  : "eg-btn btn--primary header-btn"
              }
            >
              <Link href="/login">My Account</Link>
            </div>
            <div
              className="mobile-menu-btn d-lg-none d-block"
              onClick={handleSidbarMenu}
            >
              <i className="bx bx-menu" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
