
import { motion } from "framer-motion"
import Image from 'next/image'
export default function GridTeamFriends({ data }) {
  const parse = require('html-react-parser');
  return (
    <>
     
        {data.thumbnail[0] &&
            <motion.figure initial={{  opacity: 0 }}
            animate={{ opacity: 1 }} className="featured-image mb-6" layoutId="image">
        <Image src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />
        </motion.figure>
          }
          {data.title && <motion.h1 className="xl:text-4xl text-3xl mb-3 font-light">{data.title}</motion.h1>}
          {data.content && <div className="text-black">{parse(data.content)}</div>}

          <div className="item_group w-full mt-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
           
          {data.data_grid.items && data.data_grid.items.map(function(item,index){
          return (
          
          <div className="border-[3px] p-7 border-black text-base text-center relative" key={"friend_"+index}>
              <figure className="mx-auto h-full inline-flex items-center">
              <Image src={item.image.url} width={item.image.width/2} height={item.image.height/2} layout="fixed" />
              </figure>
              <div className="text-left bg-aqua-700 absolute p-5  top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-700 h-full">
                <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                <p className="mb-5 font-base leading-4">{parse(item.content)}</p>
                </div>    
            </div>
          
          )
        })}   
         </div>
            </div>   
  </>
  )
}