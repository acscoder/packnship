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
      const parse = require("html-react-parser");
        let step = this.props.data[this.state.index];
        return (<>
        <div className="hiw_item sm:py-0 py-10"
                  id={"hiw_item_"+this.state.index}
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
                    <p className="text-black">
                    {parse(step.content)}
                    </p>
                  </div>
                </div>

        </>)
    }
}