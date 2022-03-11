
import { motion } from "framer-motion"
import Image from 'next/image'
import Head from 'next/head'
import Slider from "react-slick"


export default function GridTeam2({ data }) {
  const parse = require('html-react-parser');
  let members = [[]]
  let members_tem = 0
  if(data.data_grid.members.length>6){
  data.data_grid.members.forEach(async (member,index) => {
    if(index>0&&index%6==0){
      members_tem++
      members[members_tem] = []  
    }
    members[members_tem].push(member) 
  })}else{
    members[0] = data.data_grid.members
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
            animate={{ opacity: 1 }} className="featured-image mb-6">
        <Image src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />
        </motion.figure>
          }
          {data.title && <motion.h1 className="xl:text-4xl text-3xl mb-3 font-light">{data.title}</motion.h1>}
          {data.content && <div className="text-black">{parse(data.content)}</div>}
          <div className="mx-auto xl:max-w-[90%]">
          <Slider {...slider_settings}>
          {members.length && members.map(function(member_group,ind){
          return (
          <div className="member_group w-full" key={"member_2_"+ind}>
            <div className="grid md:grid-cols-3 gap-5">
            {member_group.length && member_group.map(function(member,index){
              return (<div className="border-[3px] p-7 border-black text-base text-center relative" key={"member_2_2_"+index}>
          
              <figure className="w-28 mx-auto mb-3">
              <Image src={member.thumbnail.url} width={member.thumbnail.width} height={member.thumbnail.height} layout="responsive" />
              </figure>
                <h4 className="font-medium text-xl">{member.name}</h4>
                <p className="font-medium mb-1">{member.role}</p>
               
  <div><span className="icon-mail mx-2"></span><span className="icon-mobile mx-2"></span></div>
               
               
                <div className="inline-flex items-center bg-pink-700 absolute p-5  top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-700 h-full w-full">
                <div className="w-full">  
                <h4 className="font-medium text-xl">{member.name}</h4>
                <p className="font-medium mb-1">{member.role}</p>
                {false&&<p className="mb-8">{parse(member.content)}</p>}
                  <div className="font-medium">
                    <div className="mt-2"><span className="icon-mail mr-2"></span>{member.email}</div>
                    <div className="mt-2"><span className="icon-mobile mr-2"></span>{member.phone_number}</div>
                  </div>   
                </div>   
                </div>  
            </div>)
            })
              
            }
            </div>
            </div>
          )
        })} 
        </Slider>
        </div>
  </>
  )
}