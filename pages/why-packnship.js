import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick"
import LayoutSimple from "../components/layout-simple";
import Head from 'next/head'
import React from "react";
import { MobileView, BrowserView } from "react-device-detect"

  class ContactPage extends React.Component {
    constructor() {
      super();
      
         
    }
    renderArrows = () => {
      return (
        <div className="as-slider-arrow">
          <button
            className="arrow-btn top-center prev absolute  2xl:left-[-70px] left-0 text-3xl text-black"
            onClick={() => this.slider.slickPrev()}
          >
           <span className="icon-chevron-thin-left"></span>
          </button>
          <button
            className="arrow-btn top-center next absolute  2xl:right-[-70px] right-0 text-3xl text-black"
            onClick={() => this.slider.slickNext()}
          >
           <span className="icon-chevron-thin-right"></span>
          </button>
        </div>
      );
    };
    render() {
  const parse = require("html-react-parser");
  let items = [[]]
  let items_tem = 0
  if(this.props.data.data_grid.items.length>3){
    this.props.data.data_grid.items.forEach(async (member,index) => {
    if(index>0&&index%3==0){
      items_tem++
      items[items_tem] = []  
    }
    items[items_tem].push(member) 
  })}else{
    items[0] = this.props.data.data_grid.items
  }
  const slider_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slide:"> div",
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  var _this = this
  return (
    <>
   
   
      <LayoutSimple data={this.props.data} options={this.props.options}>
        <div className="lg:grid lg:grid-cols-3 lg:my-12 my-10">
          {this.props.data.thumbnail && (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:col-span-2 lg:order-2"
              layoutId="image"
            >
              <Image
                src={this.props.data.thumbnail[0]}
                width={this.props.data.thumbnail[1]}
                height={this.props.data.thumbnail[2]}
                layout="responsive"
              />
            </motion.figure>
          )}

          <div className="2xl:ml-[115px] xl:ml-[80px] lg:ml-[40px] lg:col-span-1 lg:order-1 h-full inline-flex items-center lg:mt-0 mt-7">
          <div className="lg:px-0 px-6">
              {_this.props.data.title && (
                <motion.h1 className="2xl:text-6xl xl:text-4xl text-3xl mb-3 font-light">
                  {_this.props.data.title}
                </motion.h1>
              )}
             <div className="text-black">{parse(_this.props.data.content)}</div>
            </div>
          </div>
        </div>

        <div className="2xl:mx-[115px] 2xl:px-0 px-6 relative">
        
        {items.length && items.map(function(item_group,ind){
          return (
            <div className="item_group w-full" key={"item_group_"+ind}>
              <div className={"lg:grid lg:gap-10 gap-5 lg:grid-cols-"+item_group.length}>
              {item_group.length && item_group.map(function(item,index){
              return (
                <div
              className={
                "border-[3px] xl:py-8 xl:pl-10 xl:pr-5 p-5 lg:mb-10 mb-5 border-black transition-colors hover:bg-" +
                _this.props.data.background_color +
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
        
          
        </div>
      </LayoutSimple>
    
     
     
    </>
  );
        }
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
