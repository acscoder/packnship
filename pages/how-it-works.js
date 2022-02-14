import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import Script from "next/script";

function HIWPage({ data, options }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const parse = require("html-react-parser");

  return (
    <>
      <section
        id="main-content"
        className={
          "xl:h-full min-h-full text-white sm:p-10 p-5 bg-" +
          data.background_color
        }
      >
        <div className="border-4 border-black xl:min-h-full relative">
          <Header slogan={data.slogan} sloganColor={data.slogan_color} currentSlug={options.currentSlug} />

          <div className="container w-fit lg:w-full lg:mx-auto mx-6 min-h-[300px]">
            <div className="lg:grid grid-cols-2 lg:my-16 my-8">
              <div className="col-span-1 max-w-xl">
                <h2 className="xl:text-6xl text-3xl font-light mb-2 mt-10 sm:mt-0">
                  {data.title}
                </h2>
                <div className="text-black ">{parse(data.content)}</div>
                <div
                  className="sm:text-2xl text-xl font-regular mt-6 sm:block hidden"
                  id="hiw_menu"
                >
                  <div className="sm:w-[500px]">
                    <button
                      data-index="0"
                      data-color="cascade"
                      className="hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left hover:bg-cascade-700 transition-colors"
                    >
                      <strong className="ml-6 mr-8 text-coriander-800 group-hover:text-white number">
                        01
                      </strong>
                      <span className="sm:w-56 leading-none">
                        Picking & First Mile
                      </span>
                    </button>
                  </div>
                  <div className="sm:w-[500px]">
                    <button
                      data-index="1"
                      data-color="yellow"
                      className="hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left hover:bg-cascade-700 transition-colors"
                    >
                      <strong className="ml-6 mr-8 text-coriander-800 group-hover:text-white number">
                        02
                      </strong>
                      <span className="sm:w-56 leading-none">
                        Kommissionieren & Verpacken
                      </span>
                    </button>
                  </div>
                  <div className="sm:w-[500px]">
                    <button
                      data-index="2"
                      data-color="pink"
                      className="hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left hover:bg-cascade-700 transition-colors"
                    >
                      <strong className="ml-6 mr-8 text-coriander-800 group-hover:text-white number">
                        03
                      </strong>
                      <span className="sm:w-56 leading-none">Versenden</span>
                    </button>
                  </div>
                  <div className="sm:w-[500px]">
                    <button
                      data-index="3"
                      data-color="coriander"
                      className="hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left hover:bg-cascade-700 transition-colors"
                    >
                      <strong className="ml-6 mr-8 text-coriander-800 group-hover:text-white number">
                        04
                      </strong>
                      <span className="sm:w-56 leading-none">
                        Retourenmanagement
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-1 sm:block hidden">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="hiw_item sm:py-0 py-10"
                  id="hiw_item_0"
                >
                  <div className="xl:absolute xl:block hidden">
                    <img src="/images/img-01.jpg" />
                  </div>
                  <div className="xl:mb-16">
                    <img src="/images/img-01.jpg" />
                  </div>
                  <div className="max-w-2xl sm:px-0 px-6">
                    <h3 className="text-2xl sm:text-4xl mb-2">
                      Picking & First Mile
                    </h3>
                    <p className="text-black">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Drum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="hiw_item sm:hidden block sm:bg-none bg-yellow-600 sm:py-0 py-10"
                  id="hiw_item_1"
                >
                  <div className="xl:absolute xl:block hidden">
                    <img src="/images/img-02.jpg" />
                  </div>
                  <div className="xl:mb-16">
                    <img src="/images/img-02.jpg" />
                  </div>
                  <div className="max-w-2xl  sm:px-0 px-6">
                    <h3 className="text-2xl sm:text-4xl mb-2">
                      Kommissionieren & Verpacken
                    </h3>
                    <p className="text-black">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Drum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="hiw_item sm:hidden block sm:bg-none bg-pink-600 sm:py-0 py-10"
                  id="hiw_item_2"
                >
                  <div className="xl:absolute xl:block hidden">
                    <img src="../images/img-03.jpg" />
                  </div>
                  <div className="xl:mb-16">
                    <img src="/images/img-03.jpg" />
                  </div>
                  <div className="max-w-2xl sm:px-0 px-6">
                    <h3 className="text-2xl sm:text-4xl mb-2">Versenden</h3>
                    <p className="text-black">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Drum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="hiw_item sm:hidden block sm:bg-none bg-cascade-600 sm:py-0 py-10"
                  id="hiw_item_3"
                >
                  <div className="xl:absolute xl:block hidden">
                    <img src="../images/img-04.jpg" />
                  </div>
                  <div className="xl:mb-16">
                    <img src="/images/img-04.jpg" />
                  </div>
                  <div className="max-w-2xl sm:px-0 px-6">
                    <h3 className="text-2xl sm:text-4xl mb-2">
                      Retourenmanagement
                    </h3>
                    <p className="text-black">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Drum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.data_grid.steps &&data.data_grid.steps.map(function(step,index){
        return (<>
         <div className={"hiw_item_mobile sm:p-10 p-5 sm:hidden block h-full h-full-block bg-"+step.class+"-600"} key={"step_m_"+index}>
        <div className="border-4 border-black h-full">
          
          <figure className="my-5">
          <Image src={step.image_mobile.url} width={step.image_mobile.width} height={step.image_mobile.height} layout="responsive" />
          </figure>

          <div className="max-w-2xl sm:px-0 px-6">
            <div className="inline-flex items-center text-2xl mb-2">
              <strong className={"mr-4 bold text-"+step.class+"-800"}>0{index}</strong>
              <h3 className=" text-white">{step.title}</h3>
            </div>
            <p className="text-black">
            {step.description}
            </p>
          </div>
        </div>
      </div>
        </>)
      })}
    
      <Footer
        address={options.address}
        email={options.email}
        hotline={options.hotline}
      />
    </>
  );
}

export async function getStaticProps(context) {
  //context.locale
  //resolvedUrl

  const res_options = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/options.json"
  );
  const options = await res_options.json();

  const res_data = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/how-it-works.json"
  );
  const data = await res_data.json();

  options.currentSlug = "how-it-works"

  return { props: { data, options }, revalidate: 5 };
}

export default HIWPage;
