import Image from 'next/image'
import { motion } from "framer-motion";

import LayoutSimple from '../components/layout-simple'

function HomePage({ data,options }) {
   
  const parse = require('html-react-parser');
  return (
    <>
           <LayoutSimple data={data} options={options}>
            <motion.figure initial={{  opacity: 0 }}
  animate={{ opacity: 1 }} className="featured-image mt-6" layoutId="image">
            <Image src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />
            </motion.figure>
            <div className="container xl:mx-auto xl:px-0 px-6 my-10">
                <div className="md:grid md:grid-cols-5 md:gap-x-10 lg:gap-x-20">
                    <div className="col-span-2">
                        <div className="">
                            <motion.h1 className="2xl:text-6xl xl:text-5xl text-3xl font-light">{data.title}</motion.h1>
                        </div>
                        
                    </div>
                    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="col-span-3 text-black">
                    {parse(data.content)}
                        
                    </motion.div>
                </div>
            </div>
           </LayoutSimple>
    </>
  )
}

export async function getStaticProps(context) {
  
    //context.locale
    //resolvedUrl
    const ver = Math.random()

    const res_options = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/options.json?v="+ver)
    const options = await res_options.json()

    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/home-page.json?v="+ver)
    const data = await res_data.json()

    return { props: { data,options },revalidate: 5  }
  }

export default HomePage