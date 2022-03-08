import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default class HiwItem extends React.Component{
    constructor() {
        super();
        this.state = {
            index: 0,
          }          
    }
    componentWillReceiveProps(props) {
        this.setState({ index: props.current_step })
      }
    render() {
        let step = this.props.data[this.state.index];
        return (<>
        <div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="hiw_item sm:py-0 py-10"
                  id={"hiw_item_"+this.state.index}
                >
          <div className="xl:absolute xl:block hidden w-1/2 z-10">
            <Image src={step.image.url} width={step.image.width} height={step.image.height} layout="responsive" />
          </div>
          <div className="xl:mb-16">
            <Image src={step.image.url} width={step.image.width} height={step.image.height} layout="responsive" />
          </div>
                  
                  <div className="max-w-2xl sm:px-0 px-6">
                    <h3 className="text-2xl sm:text-4xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-black">
                    {step.content}
                    </p>
                  </div>
                </div>

        </>)
    }
}