
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../components/footer'


function HomePage({ options,content }) {
    const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const parse = require('html-react-parser');
  return (
    <>
    <section id="main-content" className="2xl:h-full min-h-full bg-green text-white sm:p-10 p-5 ">
        <div className="border-4 border-black min-h-full">
            <header className="header border-b-[3px] border-black">
                <div className="container w-[auto] lg:w-full lg:mx-auto mx-6">
                    <div className="grid xl:grid-cols-5 xl:gap-x-10 grid-cols-2 gap-x-2">
                        <div className="logo py-10 inline-flex items-center ">
                        <Link href="/">
                            <a className="text-6xl"><span className="icon-logo"></span></a>
                        </Link>
                        </div>
                        <div className="col-span-3 xl:block hidden">
                            <div className="py-10 pl-16 border-l-[3px] border-black h-full inline-flex items-center">
                                <h2 className="text-3xl font-normal text-yellow">{content.slogan}</h2>  
                            </div>
                        </div>
                        <div className="py-10 lg:inline-flex lg:items-center">
                            <div className="float-right inline-flex items-center">
                                <div className="text-black font-bold uppercase text-lg lg:text-2xl">
                                <Link href="/" locale="de"><a>DE</a></Link>/<Link href="/" locale="en"><a>EN</a></Link></div>
                                <a className="xl:ml-10 ml-5 block xl:w-24 w-12" href="https://packnship.digitalonda.com/demo/how-it-works/"><img src="./images/faltplan-weiss.svg" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <article className="featured-image mt-6">
            <Image src={content.thumbnail[0]} width={content.thumbnail[1]} height={content.thumbnail[2]} layout="responsive" />
            </article>
            <div className="container w-fit lg:w-full lg:mx-auto mx-6 my-10">
                <div className="md:grid md:grid-cols-5 md:gap-x-10 lg:gap-x-20">
                    <div className="col-span-2">
                        <div className="">
                            <h2 className="xl:text-6xl text-3xl font-light ">{content.title}</h2>
                        </div>
                        
                    </div>
                    <div className="col-span-3 text-black">
                    {parse(content.content)}
                        <a className="btn btn-simple text-yellow font-semibold inline-flex py-3 mt-3" href="https://packnship.digitalonda.com/demo/how-it-works/"><span>Wie Es Funktioniert</span> <img className="ml-5" src="./images/arrow-icon.svg" width="26" height="12"/></a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
    
    <Footer address={options.address} email={options.email} hotline={options.hotline}/>
    </>
  )
}

export async function getStaticProps(context) {
  
    //context.locale
    //resolvedUrl
    const res_option = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+'/wp-content/themes/onda/data/options.json')
    const options = await res_option.json()
  
    const res_content = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+"?lang="+context.locale)
    const content = await res_content.json()

    return { props: { options,content } }
  }

export default HomePage