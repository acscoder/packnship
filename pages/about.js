import Image from 'next/image'
import LayoutSimple from '../components/layout-simple'

function AboutPage({ data,options }) {
   
  const parse = require('html-react-parser');
  return (
    <>
           <LayoutSimple data={data} options={options}>
            
            <div className="2xl:mx-[200px] xl:mx-[100px] px-6">
                <div className="lg:grid lg:grid-cols-2 md:gap-x-10 lg:gap-x-20">
                    
                        <div className="">
                            <h1 className="2xl:text-6xl xl:text-5xl text-4xl font-light">{data.title}</h1>
                            <div className="text-black">
                    {parse(data.content)}                        
                    </div>
                        </div>                        
                    
                    <div className="text-white">
                    <span className="icon-logo 2xl:text-[150px] xl:text-6xl"></span>                       
                    </div>
                </div>
            </div>
           </LayoutSimple>
    </>
  )
}

export async function getStaticProps(context) {
  
    const ver = Math.random()

    const res_options = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/options.json?v="+ver)
    const options = await res_options.json()

    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/about.json?v="+ver)
    const data = await res_data.json()

    return { props: { data,options },revalidate: 5  }
  }

export default AboutPage