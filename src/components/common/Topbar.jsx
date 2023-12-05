import Link from "next/link";
import React, { useEffect } from "react";

function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left d-flex flex-row align-items-center">
          <h6>Follow Us</h6>
          <ul className="topbar-social-list gap-2">
            <li>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
          </ul>
        </div>
        <div className="email-area">
          <h6>
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </h6>
        </div>
        <div className="topbar-right">
          <ul className="topbar-right-list">
            <li>
              <img src="assets/images/icons/flag-eng.png" alt="image" />
              <span>Language</span>
              <ul className="topbar-sublist">
                <li>
                  <img src="assets/images/icons/flag-germeny.svg" alt="image" />
                  <span>Germeny</span>
                </li>
                <li>
                  {" "}
                  <img src="assets/images/icons/flag-french.svg" alt="image" />
                  <span>French</span>
                </li>
                <li>
                  <img src="assets/images/icons/flag-bangla.svg" alt="image" />
                  <span>Bengali</span>
                </li>
              </ul>
            </li>
            <li>
              Currency
              <ul className="topbar-sublist">
                <li>
                  <a href="login.html">
                    <i className="bi bi-currency-dollar" />
                    Usd
                  </a>
                </li>
                <li>
                  <a href="register.html">
                    <i className="bi bi-currency-euro" />
                    Euro
                  </a>
                </li>
                <li>
                  <a href="register.html">
                    <i className="bi bi-currency-pound" />
                    Pound
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Topbar;
