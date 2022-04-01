import Image from 'next/image'
import LayoutSimple from '../components/layout-simple'

function AboutPage({ data,options }) {
   
  const parse = require('html-react-parser');
  return (
    <>
           <LayoutSimple data={data} options={options}>
            
            <div className="2xl:mx-[200px] xl:mx-[100px] px-6 content_min_height flex items-center">
                <div className="lg:grid lg:grid-cols-2 md:gap-x-10 lg:gap-x-20">
                    
                        <div className="">
                        <div className="max-w-[600px]">
                            <h1 className="2xl:text-6xl xl:text-5xl text-4xl font-light">{data.title}</h1>
                            <div className="text-black text-block">
                    {parse(data.content)}                        
                    </div>
                        </div>        
                        </div>                  
                    
                    <div className="text-white">
                    <div className="h-full w-full inline-flex items-center">
                    {data.thumbnail[0]&&<img src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />}                    
                    </div>
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