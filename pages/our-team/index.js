import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutTeam from '../../components/layout-team'
import GridSimple from '../../components/grid/simple'

import Button from '../../components/button'

function TeamPage({ data,options }) {
    const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const parse = require('html-react-parser');
  return (
    <>
  <LayoutTeam data={data} options={options}>
                
                    <div className="max-w-3xl mx-auto">
                       
                    <GridSimple data={data}/>
                            <Button text="Wie Es Funktioniert" color="yellow" href="/how-it-works/"></Button>
                        </div>   
                
                </LayoutTeam>    
    
    </>
  )
}

export async function getStaticProps(context) {
  const ver = Math.floor(Math.random() * 10000) + 1
    const res_options = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/options.json?ver="+ver)
    const options = await res_options.json()

    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/our-team.json?ver="+ver)
    const data = await res_data.json()
    options.currentSlug = "our-team"
    return { props: { data,options },revalidate: 5  }
  }

export default TeamPage