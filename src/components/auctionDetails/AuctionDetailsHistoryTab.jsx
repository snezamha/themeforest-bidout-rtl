import Link from 'next/link'
import React from 'react'

function AuctionDetailsHistoryTab() {
  return (
    <div className="col-lg-8">
    <ul className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active details-tab-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link details-tab-btn" id="pills-bid-tab" data-bs-toggle="pill" data-bs-target="#pills-bid" type="button" role="tab" aria-controls="pills-bid" aria-selected="false">Biding History</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link details-tab-btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Other Auction</button>
      </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <div className="describe-content">
          <h4>How can have anything you ant in life if you ?</h4>
          <p className="para">If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to create and capture value. The market is open for players in every kind of field. Are you a collector.</p>
          <p className="para">But getting your own auction site up and running has always required learning complex coding langua ges, or hiring an expensive design firm for thousands of dollars and months of work.</p>
          <ul className="describe-list">
            <li><a href="#">Amet consectetur adipisicing elit. Maxime reprehenderit quaerat, velit rem atque vel impedit!  Expensive Design.</a></li>
            <li><a href="#">Consectetur adipisicing elit. Maxime reprehenderit quaerat</a></li>
            <li><a href="#">Fuga magni veritatis ad temporibus atque adipisci nisi rerum...</a></li>
          </ul>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-bid" role="tabpanel" aria-labelledby="pills-bid-tab">
        <div className="bid-list-area">
          <ul className="bid-list">
            <li>
              <div className="row d-flex align-items-center">
                <div className="col-7">
                  <div className="bidder-area">
                    <div className="bidder-img">
                      <img alt="image" src="assets/images/bg/bidder1.png" />
                    </div>
                    <div className="bidder-content">
                      <a href="#"><h6>Robart FOX</h6></a>
                      <p>24.50 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <div className="bid-time">
                    <p>4 Hours Ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row d-flex align-items-center">
                <div className="col-7">
                  <div className="bidder-area">
                    <div className="bidder-img">
                      <img alt="image" src="assets/images/bg/bidder2.png" />
                    </div>
                    <div className="bidder-content">
                      <a href="#"><h6>Jane Cooper</h6></a>
                      <p>224.5 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <div className="bid-time">
                    <p>5 Hours Ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row d-flex align-items-center">
                <div className="col-7">
                  <div className="bidder-area">
                    <div className="bidder-img">
                      <img alt="image" src="assets/images/bg/bidder3.png" />
                    </div>
                    <div className="bidder-content">
                      <a href="#"><h6>Guy Hawkins</h6></a>
                      <p>34.5 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <div className="bid-time">
                    <p>6 Hours 45 minutes Ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row d-flex align-items-center">
                <div className="col-7">
                  <div className="bidder-area">
                    <div className="bidder-img">
                      <img alt="image" src="assets/images/bg/bidder1.png" />
                    </div>
                    <div className="bidder-content">
                      <a href="#"><h6>Robart FOX</h6></a>
                      <p>24.50 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <div className="bid-time">
                    <p>4 Hours Ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row d-flex align-items-center">
                <div className="col-7">
                  <div className="bidder-area">
                    <div className="bidder-img">
                      <img alt="image" src="assets/images/bg/bidder2.png" />
                    </div>
                    <div className="bidder-content">
                      <a href="#"><h6>Robart FOX</h6></a>
                      <p>24.50 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <div className="bid-time">
                    <p>4 Hours Ago</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>                            
        </div>
      </div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <div className="row d-flex justify-content-center g-4">
          <div className="col-lg-6 col-md-4 col-sm-10">
            <div className="eg-card auction-card1">
              <div className="auction-img">
                <img alt="image" src="assets/images/bg/live-auc1.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer1">
                    <h4><span id="hours1">05</span>H : <span id="minutes1">52</span>M : <span id="seconds1">32</span>S</h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="assets/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4><Link href="/auction-details"><a>Brand New royal Enfield 250 CC For Sale</a></Link></h4>
                <p>Bidding Price : <span>$85.9</span> </p>
                <div className="auction-card-bttm">
                  <Link href="/auction-details"><a className="eg-btn btn--primary btn--sm">Place a Bid</a></Link>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                    </ul>
                    <div>
                      <a href="#" className="share-btn"><i className="bx bxs-share-alt" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-10">
            <div className="eg-card auction-card1 wow fadeInDown">
              <div className="auction-img">
                <img alt="image" src="assets/images/bg/live-auc2.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer2">
                    <h4><span id="hours2">05</span>H : <span id="minutes2">52</span>M : <span id="seconds2">32</span>S</h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="assets/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4><Link href="/auction-details"><a>Wedding Special Exclusive Cupple Ring (S2022)</a></Link></h4>
                <p>Bidding Price : <span>$85.9</span> </p>
                <div className="auction-card-bttm">
                  <Link href="/auction-details"><a className="eg-btn btn--primary btn--sm">Place a Bid</a></Link>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                    </ul>
                    <div>
                      <a href="#" className="share-btn"><i className="bx bxs-share-alt" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AuctionDetailsHistoryTab