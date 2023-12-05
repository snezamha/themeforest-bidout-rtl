import { useEffect } from "react";

import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/style.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min");
  }, []);
  return   <>
     
  <Component {...pageProps} />
  <Script id="wow" src="/js/wow.min.js"></Script>
  <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
</>;
}

export default MyApp;
