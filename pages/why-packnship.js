import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick"
import LayoutSimple from "../components/layout-simple";
import Head from 'next/head'

function ContactPage({ data, options }) {
  const parse = require("html-react-parser");
  let items = [[]]
  let items_tem = 0
  if(data.data_grid.items.length>3){
  data.data_grid.items.forEach(async (member,index) => {
    if(index>0&&index%3==0){
      items_tem++
      items[items_tem] = []  
    }
    items[items_tem].push(member) 
  })}else{
    items[0] = data.data_grid.items
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
      <LayoutSimple data={data} options={options}>
        <div className="lg:grid lg:grid-cols-3 lg:my-12 my-10">
          {data.thumbnail && (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:col-span-2 lg:order-2"
              layoutId="image"
            >
              <Image
                src={data.thumbnail[0]}
                width={data.thumbnail[1]}
                height={data.thumbnail[2]}
                layout="responsive"
              />
            </motion.figure>
          )}

          <div className="lg:ml-[115px] lg:col-span-1 lg:order-1 h-full inline-flex items-center lg:mt-0 mt-7">
          <div className="lg:px-0 px-6">
              {data.title && (
                <motion.h1 className="xl:text-6xl text-3xl mb-3 font-light">
                  {data.title}
                </motion.h1>
              )}
             <div className="text-black">{parse(data.content)}</div>
            </div>
          </div>
        </div>

        <div className="lg:mx-[115px] xl:px-0 px-6">
        <Slider {...slider_settings}>
        {items.length && items.map(function(item_group,ind){
          return (
            <div className="item_group w-full" key={"item_group_"+ind}>
              <div className={"lg:grid lg:gap-10 gap-5 lg:grid-cols-"+item_group.length}>
              {item_group.length && item_group.map(function(item,index){
              return (
                <div
              className={
                "border-[3px] xl:py-8 xl:pl-8 xl:pl-5 p-5 lg:mb-4 mb-5 border-black transition-colors hover:bg-" +
                data.background_color +
                "-700"
              }
              key={"item_"+index}
            >
              <div>
                <h3 className="font-light lg:text-3xl text-2xl mb-3">{item.title} </h3>
                <div className="text-black">
                {parse(item.content)}
                </div>
              
              </div>
            </div>
              )
              })}
              </div>
            </div>
          )
          })} 
        </Slider>
          
        </div>
      </LayoutSimple>
    </>
  );
}

export async function getStaticProps(context) {
  //context.locale
  //resolvedUrl
  const ver = Math.random();

  const res_options = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/options.json?v=" +
      ver
  );
  const options = await res_options.json();

  const res_data = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/why-packnship.json?v=" +
      ver
  );
  const data = await res_data.json();

  return { props: { data, options }, revalidate: 5 };
}

export default ContactPage;
