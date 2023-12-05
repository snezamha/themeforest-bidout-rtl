import React from 'react';
import "swiper/css/autoplay";
import upCommingLiveAuctionData from "../../data/upCommingAuction/upCommingAuction.json";
// import Swiper core and required modules
import Link from 'next/link';
import SwiperCore, {
  Autoplay,
  Navigation
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from '../common/Counter';
SwiperCore.use([Navigation, Autoplay]);
function UpCommingLiveAuction1() {

  const upcomingSlider = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: '.coming-prev1',
      prevEl: '.coming-next1',
    },

    breakpoints: {
      280: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },

    }
  }

  return (
    <div className="upcoming-seciton pb-120">
      <img alt="image" src="assets/images/bg/section-bg.png" className="img-fluid section-bg" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>Up Comming Auction</h2>
              <p className="mb-0">Explore on the world&apos;s best &amp; largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <Swiper {...upcomingSlider} className="swiper upcoming-slider">
            <div className="swiper-wrapper">
              {
                upCommingLiveAuctionData.map((data) => {
                  const { id, home1AuthorImg, home1AuthorName, home1category, home1Image, home1Title, price } = data
                  return (
                    <SwiperSlide key={id} className="swiper-slide">
                      <div className="eg-card c-feature-card1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <div className="auction-img">
                          <img alt="image" src={home1Image} />
                          <div className="auction-timer2 gap-lg-3 gap-md-2 gap-1" id="timer7">
                            <Counter formate="counter2" />
                          </div>
                          <div className="author-area2">
                            <div className="author-name">
                              <span>by @{home1AuthorName}</span>
                            </div>
                            <div className="author-emo">
                              <img alt="image" src={home1AuthorImg} />
                            </div>
                          </div>
                        </div>
                        <div className="c-feature-content">
                          <div className="c-feature-category">{home1category}</div>
                          <Link href="/auction-details">
                            <a><h4>{home1Title}</h4></a>
                          </Link>
                          <p>Bidding Price : <span>${price}</span></p>
                          <div className="auction-card-bttm">
                            <Link href="/auction-details"><a className="eg-btn btn--primary btn--sm">View
                              Details</a></Link>
                            <div className="share-area">
                              <ul className="social-icons d-flex">
                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li>
                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                              </ul>
                              <div>
                                <div className="share-btn"><i className="bx bxs-share-alt" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }


            </div>
          </Swiper>
          <div className="slider-bottom d-flex justify-content-between align-items-center">
            <Link href="/live-auction"><a className="eg-btn btn--primary btn--md">View ALL</a></Link>
            <div className="swiper-pagination style-3 d-lg-block d-none" />
            <div className="slider-arrows coming-arrow d-flex gap-3">
              <div className="coming-prev1 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
              <div className="coming-next1 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UpCommingLiveAuction1