
import { motion } from "framer-motion"
import Image from 'next/image'
export default function GridTeam2({ data }) {
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
          <div className="grid md:grid-cols-3 gap-5 mx-auto xl:max-w-[90%]">
          {data.data_grid.members &&data.data_grid.members.map(function(member){
          return (<>
          <div className="border-[3px] p-7 border-black text-base text-center">
          
            <figure className="w-28 mx-auto mb-3" layoutId="image">
            <Image src={member.thumbnail.url} width={member.thumbnail.width} height={member.thumbnail.height} layout="responsive" />
            </figure>
            
              <h4 className="font-medium text-xl">{member.name}</h4>
              <p className="font-medium mb-1">{member.role}</p>
              <p className="mb-5">{member.description}</p>
<div><span className="icon-mail mx-2"></span><span className="icon-mobile mx-2"></span></div>
              <div className="font-medium hidden">
                <div className="mr-10 mt-2"><span className="icon-mail mr-2"></span>{member.email}</div>
                <div className="mt-2"><span className="icon-mobile mr-2"></span>{member.phone_number}</div>
              </div>
            
          </div>
        
          </>)
        })} 
        </div>
  </>
  )
}