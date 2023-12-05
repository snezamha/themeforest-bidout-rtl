import Link from 'next/link'
import React from 'react'

function PostCategoryWidget() {
  return (
    <div className="blog-widget-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
    <div className="top-blog">
      <div className="sidebar-widget-title">
        <h4>Post Categories</h4>
        <span />
      </div>
      <div className="blog-widget-body">
        <ul className="category-list">
          <li><Link href="#"><a><span>New Technology</span><span>01</span></a></Link></li>
          <li><Link href="#"><a><span>Network Setup</span><span>12</span></a></Link></li>
          <li><Link href="#"><a><span>Audi Car Bidding</span><span>33</span></a></Link></li>
          <li><Link href="#"><a><span>Entertainment</span><span>54</span></a></Link></li>
          <li><Link href="#"><a><span>New Technology</span><span>24</span></a></Link></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default PostCategoryWidget