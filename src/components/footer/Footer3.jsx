import Link from 'next/link'
import React from 'react'

function Footer3() {
    return (
        <footer className="style-3">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-3 col-lg-8 col-md-12">
                            <div className="footer-item">
                                <Link href="/"><a><img alt="image" src="assets/images/bg/footer3-logo.png" /></a></Link>
                                <ul className="address-list">
                                    <li><a href="#">Add. 168/170, Avenue 01, Mirpur DOHS, Bangladesh.</a></li>
                                    <li><a href="tel:+029169852">Phone: +029169852 / +88017600000</a></li>
                                    <li><a href="mailto:info.example@gmail.com">Email: info.example@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-xl-center">
                            <div className="footer-item">
                                <h5>Importants links</h5>
                                <ul className="footer-list">
                                    <li><Link href="/live-auction"><a>All Product</a></Link></li>
                                    <li><Link href="/how-works"><a>How It Works</a></Link></li>
                                    <li><Link href="/login"><a>My Account</a></Link></li>
                                    <li><Link href="/about"><a>About Company</a></Link></li>
                                    <li><Link href="/blog"><a>Our News Feed</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-xl-center">
                            <div className="footer-item">
                                <h5>Help &amp; FAQs</h5>
                                <ul className="footer-list">
                                    <li><Link href="/product"><a>Help Center</a></Link></li>
                                    <li><Link href="/faq"><a>Customer FAQs</a></Link></li>
                                    <li><Link href="/login"><a>Terms and Conditions</a></Link></li>
                                    <li><Link href="/about"><a>Security Information</a></Link></li>
                                    <li><Link href="/blog"><a>Merchant Add Policy</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-8 col-md-12">
                            <div className="footer-item">
                                <h5>Join Newsletter</h5>
                                <p>Subscribe our newsletter to get more free design course and resource.</p>
                                <form className="mb-30">
                                    <div className="input-with-btn d-flex jusify-content-start align-items-strech">
                                        <input type="text" placeholder="Enter your email" />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                                <ul className="footer-social gap-3">
                                    <li><a href="#"><i className="bx bxl-facebook" /></a></li>
                                    <li><a href="#"><i className="bx bxl-twitter" /></a></li>
                                    <li><a href="#"><i className="bx bxl-instagram" /></a></li>
                                    <li><a href="#"><i className="bx bxl-pinterest-alt" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row d-flex align-items-center g-4">
                        <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                            <p>Copyright 2022 <a href="#">Bid Out</a> | Design By <a href="https://www.egenslab.com/" className="egns-lab">Egens Lab</a></p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                            <p className="d-sm-flex d-none">We Accepts:</p>
                            <ul className="footer-logo-list">
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay1.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay2.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay3.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay4.png" /></a></li>
                                <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay5.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer3