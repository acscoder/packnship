import '../styles/index.css'
import '../public/icomoon/style.css'
import { AnimateSharedLayout } from "framer-motion"
import Transition1 from "../components/transition-1"
import Transition0 from "../components/transition-0"

function MyApp({ Component, pageProps }) {

  return (
    <AnimateSharedLayout>
  <Component {...pageProps} />
  <Transition0/>
  <Transition1/>
  </AnimateSharedLayout>)
}

export default MyApp
