
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import Button from '../components/button'

function HomePage({ data }) {
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
                                <h2 className="text-3xl font-normal text-yellow">{data.page.slogan}</h2>  
                            </div>
                        </div>
                        <div className="py-10 lg:inline-flex lg:items-center">
                            <div className="float-right inline-flex items-center">
                                <div className="text-black font-bold uppercase text-lg lg:text-2xl">
                                <Link href="/" locale="de"><a>DE</a></Link>/<Link href="/" locale="en"><a>EN</a></Link></div>
                                <Link href="/wie-es-funktioniert"><a className="xl:ml-10 ml-5 block xl:w-24 w-12"><img src="./images/faltplan-weiss.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <article className="featured-image mt-6">
            <Image src={data.page.thumbnail[0]} width={data.page.thumbnail[1]} height={data.page.thumbnail[2]} layout="responsive" />
            </article>
            <div className="container w-fit lg:w-full lg:mx-auto mx-6 my-10">
                <div className="md:grid md:grid-cols-5 md:gap-x-10 lg:gap-x-20">
                    <div className="col-span-2">
                        <div className="">
                            <h2 className="xl:text-6xl text-3xl font-light ">{data.page.title}</h2>
                        </div>
                        
                    </div>
                    <div className="col-span-3 text-black">
                    {parse(data.page.content)}
                    
                    <Button text="Wie Es Funktioniert" color="yellow" href="/wie-es-funktioniert"></Button>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
    
    <Footer address={data.options.address} email={data.options.email} hotline={data.options.hotline}/>
    </>
  )
}

export async function getStaticProps(context) {
  
    //context.locale
    //resolvedUrl
   
    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+"?lang="+context.locale)
    const data = await res_data.json()

    return { props: { data },revalidate: 5  }
  }

export default HomePage