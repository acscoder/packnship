import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import HiwItem from "../components/hiw-item";
import React from "react";
import { MobileView, isMobile } from "react-device-detect"
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
    this.setState({
      theme_color:e.currentTarget.dataset.color,
      current_step:e.currentTarget.dataset.index
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
          "xl:h-full min-h-full text-white xl:p-10 p-5 bg-" +
          this.state.theme_color+"-600"
        }
      >
        <div className="border-4 border-black xl:min-h-full relative">
          <Header slogan={this.props.data.slogan} sloganColor={this.props.data.slogan_color} currentSlug={this.props.options.currentSlug} seo={this.props.data.seo} menus={this.props.options.menus}/>

          <div className="container w-fit lg:w-full lg:mx-auto xl:px-0 px-6 min-h-[300px]">
            <div className="lg:grid grid-cols-2 xl:my-16 my-8">
              <div className="col-span-1 max-w-xl">
                <h2 className="xl:text-5xl text-3xl font-light mb-2 mt-10 sm:mt-0">
                  {this.props.data.title}
                </h2>
                <div className="text-black">{parse(this.props.data.content)}</div>
      
                <div
                  className="sm:text-2xl text-xl font-regular mt-6 md:block hidden"
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


              <div className="col-span-1 md:block hidden">
                <HiwItem current_step={this.state.current_step} data={this.props.data.data_grid.steps}/>          
              </div>

            </div>
          </div>
        </div>
      </section>
    
    <MobileView>
      {this.props.data.data_grid.steps &&this.props.data.data_grid.steps.map(function(step,index){
        return (<div key={"step_m_"+index}>
         <div className={"hiw_item_mobile md:p-10 p-5 md:hidden block h-full h-full-block bg-"+step.class+"-600"} >
        <div className="border-4 border-black h-full">
          
        {step.image_mobile.url && 
        <figure className="my-5">
        <Image src={step.image_mobile.url} width={step.image_mobile.width} height={step.image_mobile.height} layout="responsive" />
        </figure>
        }

          <div className="max-w-2xl sm:px-0 px-6">
            <div className="inline-flex items-center text-2xl mb-2">
              <strong className={"mr-4 bold text-"+step.class+"-800"}>0{index+1}</strong>
              <h3 className=" text-white">{step.title}</h3>
            </div>
            <p className="text-black">
            {step.content}
            </p>
          </div>
        </div>
      </div>
        </div>)
      })}
    </MobileView>

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
