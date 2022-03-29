import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import HiwItem from "../components/hiw-item";
import React from "react";
import { CustomView } from "react-device-detect"
class HIWPage extends React.Component {
  constructor() {
    super();
    this.state = {
        theme_color: '',
        current_step : 0
      }   
      this.onClickHandler = this.onClickHandler.bind(this);       
  }
  onClickHandler(e){
    let _this = this
    let _this_color = e.currentTarget.dataset.color
    let _this_index = e.currentTarget.dataset.index
    setTimeout(() =>{
      _this.setState({
        theme_color:_this_color,
        current_step:_this_index
      });
    },500)
    this.setState({
      current_step:-1
    });

  }
  render() {
  
  const parse = require("html-react-parser");
    if(this.state.theme_color=='')this.state.theme_color = this.props.data.background_color
  var _this = this
    return (
    <>
      <section
        id="main-content"
        className={
          "min-h-full text-white xl:p-10 p-5 transition-colors duration-150 bg-" +
          this.state.theme_color+"-600"
        }
      >
        <div className="border-4 border-black xl:min-h-full relative">
          <Header slogan={this.props.data.slogan} sloganColor={this.props.data.slogan_color} currentSlug={this.props.options.currentSlug} seo={this.props.data.seo} menus={this.props.options.menus}/>

          <div className="2xl:px-0 px-6 2xl:min-h-[600px] ">
            <div className="lg:grid grid-cols-2 2xl:my-12 my-8">
              <div className="col-span-1 max-w-3xl">
                <div className="2xl:ml-[105px]">
                <h2 className="2xl:text-5xl xl:text-4xl text-3xl font-light mb-2 mt-10 sm:mt-0">
                  {this.props.data.title}
                </h2>
                <div className="text-black">{parse(this.props.data.content)}</div>
      
                <div
                  className="sm:text-2xl text-xl font-regular mt-6 lg:block hidden"
                  id="hiw_menu"
                >

{this.props.data.data_grid.steps &&this.props.data.data_grid.steps.map(function(step,index){
  
        return (<div className="md:w-[500px]"  key={"step_b_"+index}>
          <button data-color={step.class} data-index={index} onClick={_this.onClickHandler} className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(_this.state.current_step==index ? 'bg-'+_this.state.theme_color : 'hover:bg-'+_this.state.theme_color)+"-700"}
                    >
                      <strong className={"ml-6 mr-8 number "+ (_this.state.current_step==index ? 'text-white' : 'group-hover:text-white text-'+_this.state.theme_color+"-800")} >
                        0{index+1}
                      </strong>
                      <span className="sm:w-56 leading-none">
                        {step.title}
                      </span>
                    </button>
        </div>)
      })}
                </div>
              </div>
              </div>

              <div className="col-span-1 lg:block hidden relative">
              
                {this.props.data.data_grid.steps && this.props.data.data_grid.steps.map(function(step,index){
                  let cl = ""
                  let sty = {opacity:0, position: "absolute"}
                  if(index== _this.state.current_step){
                    sty = {opacity:1,position:"relative" }
                  }
         return (
          <div className={"hiw_item w-full top-0 left-0 sm:py-0 py-10 transition-all duration-500 "+cl} id={"hiw_item_"+index}
                    key={"hiw_item_"+index} style={sty}
                  >
  
  {step.image.url && 
            <div className="xl:mb-5">
              <Image src={step.image.url} width={step.image.width} height={step.image.height} layout="responsive" />
            </div>
          }
          
                    <div className="max-w-2xl sm:px-0 px-6">
                      <h3 className="text-2xl sm:text-4xl mb-2">
                        {step.title}
                      </h3>
                      <div className="text-black">
                      {parse(step.content)}
                      </div>
                    </div>
                  </div>
          )
        })}          
              </div>

            </div>
          </div>
        </div>
      </section>
    
    <div className="xl:hidden block">
      {this.props.data.data_grid.steps &&this.props.data.data_grid.steps.map(function(step,index){
        return (<div key={"step_m_"+index}>
         <div className={"hiw_item_mobile md:p-10 p-5 h-full h-full-block bg-"+step.class+"-600"} >
        <div className="border-4 border-black h-full">
          
        {step.image_mobile.url && 
        <figure className="my-5">
        <Image src={step.image_mobile.url} width={step.image_mobile.width} height={step.image_mobile.height} layout="responsive" />
        </figure>
        }

          <div className="xl:max-w-2xl px-6 mb-5">
            <div className="inline-flex items-center text-2xl mb-2">
              <strong className={"mr-4 bold text-"+step.class+"-800"}>0{index+1}</strong>
              <h3 className=" text-white">{step.title}</h3>
            </div>
            <div className="text-black">
            {parse(step.content)}
            </div>
          </div>
        </div>
      </div>
        </div>)
      })}
    </div>

      <Footer
        address={this.props.options.address}
        email={this.props.options.email}
        hotline={this.props.options.hotline}
      />
    </>
  );
}
}
export async function getStaticProps(context) {
  const ver = Math.random()
  const res_options = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/options.json?ver="+ver
  );
  const options = await res_options.json();

  const res_data = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/how-it-works.json?ver="+ver
  );
  const data = await res_data.json();

  options.currentSlug = "/how-it-works"

  return { props: { data, options }, revalidate: 5 };
}

export default HIWPage;
