
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../components/header'
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
        <Header slogan={data.page.slogan} sloganColor="yellow"/>
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
                    
                    <Button text="Wie Es Funktioniert" color="yellow" href="/how-it-works/"></Button>
                        
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