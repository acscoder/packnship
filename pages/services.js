import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import HiwItem from "../components/hiw-item";
import React from "react";
import Slider from "react-slick"
import Head from 'next/head'
class ServicesPage extends React.Component {
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
    let _this_scolor = e.currentTarget.dataset.scolor
    setTimeout(() =>{
      _this.setState({
        theme_color:_this_color,
        slogan_color:_this_scolor,
        current_step:_this_index
      });
      document.getElementById('slogan').style.color = _this_scolor
    },500)
    this.setState({
      current_step:-1
    });

  }
  renderArrows = (index) => {
    return (
      <div className="as-slider-arrow xl:block hidden">
        <button
          className="arrow-btn prev absolute top-[200px] z-10 left-0 text-3xl text-black"
          onClick={() => this["slider"+index].slickPrev()}
        >
         <span className="icon-chevron-thin-left"></span>
        </button>
        <button
          className="arrow-btn next absolute top-[200px] z-10 right-0 text-3xl text-black"
          onClick={() => this["slider"+index].slickNext()}
        >
         <span className="icon-chevron-thin-right"></span>
        </button>
      </div>
    );
  }
  render() {
  
  const parse = require("html-react-parser");
    if(this.state.theme_color=='')this.state.theme_color = this.props.data.background_color
    const slider_settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows:false,
      slide:"> div",
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            
          }
        }]
      
    };
    var _this = this
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
      <section
        id="main-content"
        className={
          "min-h-full text-white xl:p-10 p-5 transition-colors duration-150 bg-" +
          this.state.theme_color+"-600"
        }
      >
        <div className="border-4 border-black xl:min-h-full relative">
          <Header slogan={this.props.data.slogan} sloganColor={this.props.data.slogan_color} currentSlug={this.props.options.currentSlug} seo={this.props.data.seo} menus={this.props.options.menus} consenttitle={this.props.options.cookie_preferences_title} consentcontent={this.props.options.cookie_preferences}/>

          <div className="2xl:px-0 px-6 2xl:min-h-[600px] 2xl:ml-[105px]">
            <div className="lg:grid grid-cols-2 2xl:my-12 my-8">
              <div className="col-span-1 max-w-3xl">
                <div className="max-w-[600px]">
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
          <button data-color={step.background_color} data-scolor={step.slogan_color} data-index={index} onClick={_this.onClickHandler} className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(_this.state.current_step==index ? 'bg-'+_this.state.theme_color : 'hover:bg-'+_this.state.theme_color)+"-700"}
                    >
                      <strong className={"ml-6 mr-8 number "+ (_this.state.current_step==index ? 'text-white' : 'group-hover:text-white text-'+_this.state.theme_color+"-800")} >
                        0{index}
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

              <div className="col-span-1 "> 
            
                {this.props.data.data_grid.steps && this.props.data.data_grid.steps.map(function(step,index){
                  let cl = ""
                  let sty = {opacity:0,  position: "absolute",height:"100%",overflow: "hidden",zIndex:-9}
                  if(index== _this.state.current_step){
                    sty = {opacity:1,position:"relative",height:"auto",overflow: "initial",zIndex:9 }
                  }
         return (
          <div className={"hiw_item w-full top-0 left-0 sm:py-0 py-10 transition-opacity duration-500 "+cl} id={"hiw_item_"+index}
                    key={"hiw_item_"+index} style={sty}
                  >
  
  
  {step.contents.length >1 && <div className="relative">{_this.renderArrows(index)}<Slider {...slider_settings} ref={c => (_this['slider'+index] = c)}>
  {step.contents.map(function(item,ind){
    return (
      <div className="image_slider" key={"image_slider_"+ind}>
              <div className="border-black border-[3px] 2xl:border-r-0"><Image  src={item.image.url} width={item.image.width} height={item.image.height} layout="responsive" /></div>
              <div className="text-black max-w-[700px] mt-5">
              <h3 className="text-2xl sm:text-4xl mb-2 text-white">{item.title}</h3>
           
              {parse(item.content)}
              </div>
              </div>
    )
  })}
  </Slider> </div>}
  {step.contents.length ==1 && <div className="">
              <Image src={step.contents[0].image.url} width={step.contents[0].image.width} height={step.contents[0].image.height} layout="responsive" />
              <div className="text-black max-w-[700px] sm:px-0 px-6 mt-5">
              <h3 className="text-2xl sm:text-4xl mb-2 text-white">{step.contents[0].title}</h3>
              {parse(step.contents[0].content)}
              </div>
              </div>}
          
                    
                    
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
        if(index>0){
        return (<div key={"step_m_"+index}>
         <div className={"hiw_item_mobile md:p-10 p-5 h-full h-full-block bg-"+step.background_color+"-600"} >
        <div className="border-4 border-black h-full">
          
       
{step.contents.length ==1 && <div className="">
              <Image src={step.contents[0].image.url} width={step.contents[0].image.width} height={step.contents[0].image.height} layout="responsive" />
              <div className="xl:max-w-2xl px-6 mb-5">
              
             
              <h3 className="text-2xl mt-3 sm:text-4xl mb-2 text-white">{step.contents[0].title}</h3>
          
             
              <div className="text-black"> {parse(step.contents[0].content)}</div>
              </div>
              </div>}


        </div>
      </div>
        </div>)
}

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
      "/services.json?ver="+ver
  );
  const data = await res_data.json();

  options.currentSlug = "/services"

  return { props: { data, options }, revalidate: 5 };
}

export default ServicesPage;
