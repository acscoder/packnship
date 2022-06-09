import '../styles/index.css'
import '../public/icomoon/style.css'
import { AnimateSharedLayout } from "framer-motion"
import Transition1 from "../components/transition-1"
import Transition0 from "../components/transition-0"
import Script from 'next/script';
function MyApp({ Component, pageProps }) {

  return (
    <AnimateSharedLayout>
       <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-VJ7Y8H31BR`} />
       <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VJ7Y8H31BR', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
  <Component {...pageProps} />
  <Transition0/>
  <Transition1/>
  </AnimateSharedLayout>)
}

export default MyApp
