import React from 'react'

function BlogComment() {
  return (
    <div className="blog-comment">
    <div className="blog-widget-title">
      <h4>Comments (03)</h4>
      <span />
    </div>
    <ul className="comment-list mb-50">
      <li>
        <div className="comment-box">
          <div className="comment-header d-flex justify-content-between align-items-center">
            <div className="author d-flex flex-wrap">
              <img alt="image" src="assets/images/blog/comment1.png" />
              <h5><a href="#">Leslie Waston</a></h5><span className="commnt-date"> April 6, 2022 at 3:54 am</span>
            </div>    
            <a href="#" className="commnt-reply"><i className="bi bi-reply" /></a>
          </div>
          <div className="comment-body">
            <p className="para">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral, butcher     pabst put a bird on it meditation austin.</p>
          </div>
        </div>
        <ul className="comment-reply">
          <li>
            <div className="comment-box">
              <div className="comment-header d-flex justify-content-between align-items-center">
                <div className="author d-flex flex-wrap">
                  <img alt="image" src="assets/images/blog/comment2.png" />
                  <h5><a href="#">Robert Fox</a></h5><span className="commnt-date"> April 6, 2022 at 3:54 am</span>
                </div>    
                <a href="#" className="commnt-reply"><i className="bi bi-reply" /></a>
              </div>
              <div className="comment-body">
                <p className="para">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral, butcher     pabst put a bird on it meditation austin.</p>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div className="comment-box">
          <div className="comment-header d-flex justify-content-between align-items-center">
            <div className="author d-flex flex-wrap">
              <img alt="image" src="assets/images/blog/comment3.png" />
              <h5><a href="#">William Harvey</a></h5><span className="commnt-date"> April 6, 2022 at 3:54 am</span>
            </div>    
            <a href="#" className="commnt-reply"><i className="bi bi-reply" /></a>
          </div>
          <div className="comment-body">
            <p className="para">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral, butcher     pabst put a bird on it meditation austin.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default BlogComment