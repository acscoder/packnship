import { motion,AnimatePresence } from "framer-motion";
import React from "react";

export default class Transition0 extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'yellow',
            isVisible : false,
          }           
          this.onComplete = this.onComplete.bind(this);       
          
      }
      onComplete(){
      this.setState({isVisible:false});
      }
      componentDidMount(){
        window.Transition0Component = this
      }
      render() {
       
      const wrap_variants = {
        active: {    
            scale:1000,
            transition:{ duration:0.5,ease:"linear"}
        },
        inactive: {
         
          scale:0
        },
        exit: {
          opacity: 0,
        }
      }
      
    return (      
        <AnimatePresence >          
             {this.state.isVisible && (
    <motion.div variants={wrap_variants} onAnimationComplete={this.onComplete} animate="active" initial="inactive" exit="exit" className={"fixed top-0 right-0 w-4 h-4 z-50 rounded-full bg-"+this.state.color}>
     
    </motion.div>
             )}
            </AnimatePresence>
      )
                }
}
