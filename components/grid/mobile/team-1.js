
import { motion } from "framer-motion"
import Image from 'next/image'
export default function GridTeam1Mobile({ data,index }) {
  const parse = require('html-react-parser');
  return (
    <>
    
    <div className="text-3xl my-3 text-white">
              <strong
                className={
                  "font-bold pr-2 text-" + data.background_color + "-800"
                }
              >
                0{index}
              </strong>
              {data.page_title}
            </div>
        
        {data.thumbnail[0] &&
            <motion.figure initial={{  opacity: 0 }}
            animate={{ opacity: 1 }} className="featured-image mb-6" layoutId="image">
        <Image src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />
        </motion.figure>
          }
          {data.title && <motion.h1 className="xl:text-4xl text-2xl mb-3 font-light">{data.title}</motion.h1>}
          {data.content && <div className="text-black">{parse(data.content)}</div>}
        {data.data_grid.members.map(function(member,index){
          return (
          <div className="border-[3px] p-7 border-black my-5 text-base" key={"member_1_"+index.toString()}>
          <div className="md:inline-flex block w-full items-center">
          <figure initial={{  opacity: 0 }} animate={{ opacity: 1 }} className="w-52 mb-3 sm:min-w-[220px] min-w-[110px] grow-0 mr-10" >
          <Image src={member.thumbnail.url} width={member.thumbnail.width} height={member.thumbnail.height} layout="responsive" />
          </figure>
            <div className="grow">
              <h4 className="font-medium text-2xl">{member.name}</h4>
              <p className="font-medium mb-2">{member.role}</p>
              <p className="text-black">{member.description}</p>
              <div className="font-medium md:inline-flex">
                <div className="mr-10 mt-4"><span className="icon-mail mr-2"></span>{member.email}</div>
                <div className="md:mt-4 mt-2"><span className="icon-mobile mr-2"></span>{member.phone_number}</div>
              </div>
            </div>
          </div>
          </div>
          )
        })}          
  </>
  )
}