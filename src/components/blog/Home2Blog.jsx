import Link from 'next/link';
import React from 'react';
import reectNewsData from "../../data/blog/blog.json";
function Home2Blog() {
    return (
        <div className="recent-news-section pt-120 pb-120">
            <img alt="image" src="assets/images/bg/section-bg2.png" className="img-fluid section-bg2" />
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
                        reectNewsData.slice(0,3).map((data) => {
                            const { id, date, image, title, authorName, autohrImage, commentNumber, description } = data;
                            return (
                                <div key={id} className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
                                    <div className="single-blog-style2 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                        <div className="blog-img">
                                            <Link href="#"><a className="blog-date"><i className="bi bi-calendar-check" />{date}</a></Link>
                                            <img alt="image" src={image} />
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="/blog-details">{title}
                                            </Link></h5>
                                            <div className="blog-meta">
                                                <div className="author">
                                                    <img alt="image" src={autohrImage} />
                                                    <Link href="/blog-details"><a className="author-name">{authorName}</a></Link>
                                                </div>
                                                <div className="comment">
                                                    <img alt="image" src="assets/images/icons/comment-icon.svg" />
                                                    <Link href="#"><a className="comment">{commentNumber} Comments</a></Link>
                                                </div>
                                            </div>
                                            <p className="para">{description}</p>
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

export default Home2Blog