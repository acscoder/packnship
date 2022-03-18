import Image from "next/image";
import { motion } from "framer-motion";

import LayoutSimple from "../components/layout-simple";

function ContactPage({ data, options }) {
  const parse = require("html-react-parser");

  return (
    <>
      <LayoutSimple data={data} options={options}>
        <div className="lg:grid lg:grid-cols-3 lg:my-14 my-10">
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

          <div className="2xl:ml-[115px] lg:pl-6 lg:col-span-1 lg:order-1 h-full inline-flex items-center lg:mt-0 mt-7">
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

        <div className="2xl:mx-[115px] 2xl:px-0 px-6">
          <div className="lg:grid lg:grid-cols-4 2xl:gap-10 gap-5">
           
          {data.data_grid.items.length > 0 && data.data_grid.items.map(function(item,index){
            return(           
            <div
              className={
                "border-[3px] xl:p-10 p-5 mb-5 border-black transition-colors hover:bg-" +
                data.background_color +
                "-700"
              }
              key={"contact_item_"+index}
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
      "/contact-us.json?v=" +
      ver
  );
  const data = await res_data.json();

  return { props: { data, options }, revalidate: 5 };
}

export default ContactPage;
