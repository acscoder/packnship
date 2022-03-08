import { motion,AnimatePresence } from "framer-motion";
import React from "react";

export default class Transition1 extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'yellow',
            isVisible : false,
            opacity:0.8,
            x:0,
            y:0,
            w:0,
            h:0
          }           
          this.onComplete = this.onComplete.bind(this);       
          
      }
      onComplete(){
        var _this = this
        setTimeout(() => {_this.setState({x:0,w:"100%",opacity:1})},200) 
      }
      componentDidMount(){
        window.Transition1Component = this
      }
      render() {
        
      const wrap_variants = {
        active: {   
            opacity: this.state.opacity,         
            y:0,
            height:"100vh",
            transition:{ duration:0.1,when: "beforeChildren"}
        },
        inactive: {
          opacity: 0,
          y:this.state.y,
          height:this.state.h,
        },
        exit: {
          opacity: 0,
        }
      }
      
    return (      
        <AnimatePresence >          
             {this.state.isVisible && (
    <motion.div variants={wrap_variants} animate="active" onAnimationComplete={this.onComplete} initial="inactive" exit="exit" style={{width:this.state.w,left:this.state.x}} className={"fixed transition-all top-0 h-4 z-50 bg-"+this.state.color}>
   
            </motion.div>
             )}
            </AnimatePresence>
      )
                }
}
