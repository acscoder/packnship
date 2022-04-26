
import Image from 'next/image'
export default function GridSimple({ data }) {
  const parse = require('html-react-parser');
  
  return (
    <>
    {data.thumbnail[0] &&
            <figure initial={{  opacity: 0 }}
            animate={{ opacity: 1 }} className="featured-image mb-6" layoutId="image">
        <Image src={data.thumbnail[0]} width={data.thumbnail[1]} height={data.thumbnail[2]} layout="responsive" />
        </figure>
          }
                            <h1 className="xl:text-4xl text-2xl mb-3 font-light">{data.title}</h1>
                            <div className="text-black">{parse(data.content)}</div>
                  
  </>
  )
}