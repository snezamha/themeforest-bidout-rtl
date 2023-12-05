import Link from 'next/link';
import React from 'react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination
} from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([ Pagination, Autoplay, EffectFade]);
function Banner1() {
    const bennarSlider= {
        slidesPerView: "auto",
        speed: 2500,
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
          crossFade: true,
        },
        autoplay:{
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".hero-one-pagination",
          clickable: true,
          
        }
      }
  return (
    <div className="hero-area hero-style-one">
  <div className="hero-main-wrapper position-relative">
    <Swiper {...bennarSlider} className="swiper banner1">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="slider-bg-1">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10">
                  <div className="banner1-content">
                    <span>Welcome To Auction House</span>
                    <h1>Build, sell &amp; collect digital items.</h1>
                    <p>Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam
                      dapibus on erat in dolor posuere, none hendrerit lectus ornare.
                      Suspendisse sit amet turpina sagittis, ultrices dui et, aliquam none hendrerit lectus.
                    </p>
                    <Link href="/live-auction"><a className="eg-btn btn--primary btn--lg">Start Exploring</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slider-bg-2">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10">
                  <div className="banner1-content">
                    <span>Welcome To Auction House</span>
                    <h2>Purchase Dream Product &amp; Try.</h2>
                    <p>Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam
                      dapibus on erat in dolor posuere, none hendrerit lectus ornare.
                      Suspendisse sit amet turpina sagittis, ultrices dui et, aliquam none hendrerit lectus.
                    </p>
                    <Link href="/live-auction"><a className="eg-btn btn--primary btn--lg">Start Exploring</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
    <div className="hero-one-pagination d-flex justify-content-center flex-column align-items-center gap-3" />
  </div>
</div>

  )
}

export default Banner1