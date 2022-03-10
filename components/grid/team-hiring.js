
import { motion } from "framer-motion"
import Image from 'next/image'
import Head from 'next/head'
import Slider from "react-slick"
import getStranslatedString from '../../lib/string'

export default function GridTeamHiring({ data }) {
  const parse = require('html-react-parser');
  let jobs = [[]]
  let jobs_tem = 0
  if(data.data_grid.jobs.length>6){
  data.data_grid.jobs.forEach(async (job,index) => {
    if(index>0&&index%6==0){
      jobs_tem++
      jobs[jobs_tem] = []  
    }
    jobs[jobs_tem].push(job) 
  })}else{
    jobs[0] = data.data_grid.jobs
  }
  const slider_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slide:"> div",
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <>   
     <Head>
     <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
     </Head>  
        {data.thumbnail[0] &&
            <motion.figure initial={{  opacity: 0 }}
            animate={{ opacity: 1 }} className="featured-image mb-6" layoutId="image">
        <Image src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />
        </motion.figure>
          }
          {data.title && <motion.h1 className="xl:text-4xl text-2xl mb-3 font-light">{data.title}</motion.h1>}
          {data.content && <div className="text-black">{parse(data.content)}</div>}
          
          <h3 className="xl:text-3xl text-2xl mt-10">{getStranslatedString("Wir stellen ein")}</h3>
          <Slider {...slider_settings}>
          {jobs.length &&jobs.map(function(job_group,ind){ 
          return ( 
            <div className="job-group" key={"job_group_"+ind}> 
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              {job_group.length && job_group.map(function(job,index){
                return (
              <div className="border-[3px] p-5 border-black text-base hover:bg-coriander-700 transition-colors" key={"job_"+index}>  
                  <div>     
                  <h4 className="font-medium text-lg">{job.title}</h4>
                  <p className="mb-2">{job.sub_title}</p>
                  
                  {job.content&& <p className="text-black">{parse(job.content)}</p>}
                  {job.apply_url?<a href={job.apply_url} target="_blank" className="font-semibold">{getStranslatedString("Jetzt bewerben")}</a>:<p className="text-black">{getStranslatedString("Kommt bald")}</p>}                  
                  </div>
              </div>   
            )})} 
            </div>   
          </div>        
          )})}
          </Slider>
  </>
  )
}