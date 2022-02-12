
import { motion } from "framer-motion"
import Image from 'next/image'
export default function GridTeam1({ data }) {
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
        {data.data_grid.members.map(function(member){
          
          return (<>
          <div className="border-[3px] p-7 border-black my-5 text-base">
          <div className="inline-flex w-full">
          <motion.figure initial={{  opacity: 0 }} animate={{ opacity: 1 }} className="w-52 grow-0 mr-10" layoutId="image">
          <Image src={member.thumbnail.url} width={member.thumbnail.width} height={member.thumbnail.height} layout="responsive" />
          </motion.figure>
            <div className="grow">
              <h4 className="font-medium text-2xl">{member.name}</h4>
              <p className="font-medium mb-2">{member.role}</p>
              <p className="text-black">{member.description}</p>
              <div className="font-medium inline-flex">
                <div className="mr-10 my-4"><span className="icon-mail"></span>{member.email}</div>
              <div className="my-4"><span className="icon-mobile"></span>{member.phone_number}</div>
              </div>
            </div>
          </div>
          </div>
          </>)
        })}          
  </>
  )
}