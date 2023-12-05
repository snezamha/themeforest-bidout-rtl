import Link from 'next/link'
import React from 'react'
import blogData from "../../data/blog/home1blog.json"
function Home1Blog() {
    return (
        <div className="recent-news-section pt-120 pb-120">
            <img alt="image" src="assets/images/bg/section-bg.png" className="img-fluid section-bg" />
            <img alt="image" src="assets/images/icons/dot-circle.svg" className="dot-circle" />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="section-title1">
                            <h2>Our Recent News</h2>
                            <p className="mb-0">Explore on the world&apos;s best &amp; largest Bidding marketplace with our beautiful Bidding
                                products. We want to be a part of your smile, success and future growth.</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center g-4">
                    {
                        blogData.map((data) => {
                            const { id, title, authorImage, authorName, date, image, commentNumber } = data
                            return (
                                <div key={id} className="col-md-6 col-sm-10">
                                    <div className="single-blog-style1 wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <div className="blog-img">
                                            <Link href="#"><a className="blog-date"><i className="bi bi-calendar-check" />{date}</a></Link>
                                            <img alt="image" src={image} />
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="/blog-details"><a>{title}</a></Link></h5>
                                            <div className="blog-meta">
                                                <div className="author">
                                                    <img alt="image" src={authorImage} />
                                                    <Link href="/blog"><a className="author-name">{authorName}</a></Link>
                                                </div>
                                                <div className="comment">
                                                    <img alt="image" src="assets/images/icons/comment-icon.svg" />
                                                    <Link href="#"><a className="comment">{commentNumber} Comments</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Home1Blog