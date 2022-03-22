import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { useRouter,withRouter } from 'next/router'
import { isMobile } from "react-device-detect"

class Navigator extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'cascade-900',
            isVisible : false
        }     
        this.onClickHandler = this.onClickHandler.bind(this);       
    }
    onClickHandler(e){
        
        let href = e.currentTarget.dataset.href;
if(isMobile){
    this.props.router.push(href);
}else{
    let rect_menu = document.getElementById('menu').getBoundingClientRect()
    //window.Transition1Component.setState({color:"cascade",isVisible:true,x:rect.left,y:rect.top,w:rect.right-rect.left,h:rect.bottom-rect.top });
    window.Transition1Component.setState({color:e.currentTarget.dataset.color,isVisible:true,x:rect_menu.left,y:rect_menu.top,w:400,h:60 });
    
    setTimeout(() =>{
        this.props.router.push(href);
    },400)
}
      
    }
    componentDidMount(){
        window.NavigatorComponent = this
      }
    render() {
       let _this = this

       //console.log(this.props.menus)   

        return (
            <AnimatePresence>
            {this.state.isVisible && (
                
            <motion.div 
            animate={{ opacity: 1  }}
            initial={{ opacity:0}}
            exit={{ opacity: 0 }}
            className={"fixed top-0 left-0 w-full h-full text-white xl:p-10 p-5 z-20 inline-flex items-center bg-"+this.state.color} id="navigator">
            
            <button 
             onClick={(e) => {    
                window.NavigatorComponent.setState({isVisible:false});
           }}
            className="closenav absolute top-10 right-10"><span className="icon-cross text-black text-6xl"></span></button>

                <div className="xl:max-w-[1270px] w-full mx-auto inline-flex items-center justify-between">
                    <div className="hidden lg:block"><span className="icon-carton-box text-[350px] text-white"></span></div>
                    <div id="menu" className="md:w-[400px] w-full">
                  
                    {this.props.menus.map(function(item,index){
                        if(item.sub_menu.length > 0){
                            console.log(item)
                            return (
                                <div className={"border-b-[3px] border-black py-4 hover:bg-"+item.color} key={index}>
                                <button data-href={item.url} data-color={item.color}
                                                            className={"group h-10 w-full inline-flex items-center text-left transition-colors text-2xl font-normal hover:bg-"+item.color}
                                                           
                                                            >
                                                        <strong className={"ml-6 mr-8 group-hover:text-white number font-black "}>0{index+1}</strong>
                                                        <span>{item.title}</span> 
                                                        </button>
                                                        <motion.div 
                                                        animate={{ opacity: 1 }}
                                                        initial={{ opacity: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration:0.3,when: "beforeChildren"}}
                                                        className="sub_menu pl-24 text-white">
                                                        {item.sub_menu.map(function(sub_menu,ind){
 return (
    <motion.button 
    animate={{ x: 0 }}
    initial={{ x: 100 }}

    data-href={sub_menu.url} data-color={sub_menu.color}
                                className={"block font-light py-1 hover:text-black"}
                                onClick={_this.onClickHandler}
                                key={ind}>
                            {sub_menu.title}
                            </motion.button>
                            )
                                                        })}
                                                        </motion.div>
                                                        </div>
                                                        )
                        }else{
                        return (
<button data-href={"/"+item.url} data-color={item.color}
                            className={"group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors text-2xl font-normal hover:bg-"+item.color}
                            onClick={_this.onClickHandler}
                            key={index}>
                        <strong className={"ml-6 mr-8 group-hover:text-white number font-black "}>0{index+1}</strong>
                        <span>{item.title}</span> 
                        </button>
                        )
                        }
                    })}
                            
                    </div>
                </div>
            </motion.div>
        )}
        </AnimatePresence>
        )
    }
}

export default withRouter(Navigator)