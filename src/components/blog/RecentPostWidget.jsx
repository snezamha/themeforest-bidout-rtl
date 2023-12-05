import Link from 'next/link'
import React from 'react'

function RecentPostWidget() {
  return (
    <div className="blog-widget-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
    <div className="blog-category">
      <div className="sidebar-widget-title">
        <h4>Recent Post</h4>
        <span />
      </div>
      <div className="blog-widget-body">
        <ul className="recent-post">
          <li className="single-post">
            <div className="post-img">
              <Link href="/blog-details"><a><img alt="image" src="assets/images/blog/recent-feed1.png" /></a></Link>
            </div>
            <div className="post-content">
              <span>January 31, 2022</span>
              <h6><Link href="/blog-details"><a>Grant Distributions Conti nu to Incr Ease.</a></Link>
              </h6>
            </div>
          </li>
          <li className="single-post">
            <div className="post-img">
              <Link href="/blog-details"><a><img alt="image" src="assets/images/blog/recent-feed2.png" /></a></Link>
            </div>
            <div className="post-content">
              <span>February 21, 2022</span>
              <h6><Link href="/blog-details"><a>Seminar for Children to Learn About.</a></Link></h6>
            </div>
          </li>
          <li className="single-post">
            <div className="post-img">
              <Link href="/blog-details"><a><img alt="image" src="assets/images/blog/recent-feed3.png" /></a></Link>
            </div>
            <div className="post-content">
              <span>March 22, 2022</span>
              <h6><Link href="/blog-details"><a>Education and teacher for all African
                  Children.</a></Link></h6>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default RecentPostWidget