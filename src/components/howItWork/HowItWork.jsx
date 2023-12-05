import Link from 'next/link'
import React from 'react'

function HowItWork() {
  return (
    <div className="how-work-section pt-120 pb-120">
  <img alt="image" src="assets/images/bg/section-bg.png" className="section-bg-top" />
  <div className="container">
    <div className="row g-4 mb-60">
      <div className="col-xl-6 col-lg-6">
        <div className="how-work-content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
          <span>01.</span>
          <h3>Register Now &amp; Start Selleing Your Things</h3>
          <p className="para">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
          <p className="para">One morning, when Gregor Samsa woke from troubled dreams, he found him self transformed in his bed into a horrible vermin.</p>
          <Link href="/signup"><a className="eg-btn btn--primary btn--md">Register Account</a></Link>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 d-flex justify-content-lg-end justify-content-center">
        <div className="how-work-img wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
          <img alt="image" src="assets/images/bg/how-work1.png" className="work-img" />
        </div>
      </div>
    </div>
    <div className="row g-4 mb-60">
      <div className="col-xl-6 col-lg-6 d-flex justify-content-lg-start justify-content-center order-lg-1 order-2">
        <div className="how-work-img wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
          <img alt="image" src="assets/images/bg/how-work2.png" className="work-img" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
        <div className="how-work-content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
          <span>02.</span>
          <h3>Select Your Item</h3>
          <p className="para">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
          <p className="para">One morning, when Gregor Samsa woke from troubled dreams, he found him self transformed in his bed into a horrible vermin.</p>
          <Link href="/live-auction"><a className="eg-btn btn--primary btn--md">Add Your Item</a></Link>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-xl-6 col-lg-6">
        <div className="how-work-content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
          <span>03.</span>
          <h3>Purcahse Items</h3>
          <p className="para">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
          <p className="para">One morning, when Gregor Samsa woke from troubled dreams, he found him self transformed in his bed into a horrible vermin.</p>
          <Link href="/live-auction"><a className="eg-btn btn--primary btn--md">Purchase Item</a></Link>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 d-flex justify-content-lg-end justify-content-center">
        <div className="how-work-img wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
          <img alt="image" src="assets/images/bg/how-work3.png" className="work-img" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default HowItWork