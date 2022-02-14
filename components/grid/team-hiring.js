
import { motion } from "framer-motion"
import Image from 'next/image'
export default function GridTeamHiring({ data }) {
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
          <div className="grid md:grid-cols-3 gap-5 mt-10">
          {data.data_grid.jobs &&data.data_grid.jobs.map(function(job,index){
          return (<>
          <div className="border-[3px] p-5 border-black text-base" key={"job_"+index}>
              
            <div></div>
              <div>      
              <h4 className="font-medium text-lg">{job.title}</h4>
              <p className="mb-2">{job.sub_title}</p>
              <p className="text-black">{job.description}</p>

              <a href="#" className="font-semibold">Apply Now</a>
              </div>
          </div>
        
          </>)
        })} 
        </div>      
  </>
  )
}