import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutTeam from '../../components/layout-team'
import GridSimple from '../../components/grid/simple'

import Button from '../../components/button'

function TeamPage({ data }) {
    const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const parse = require('html-react-parser');
  return (
    <>
  <LayoutTeam data={data}>
                
                    <div className="max-w-3xl mx-auto">
                       
                    <GridSimple data={data.page}/>
                            <Button text="Wie Es Funktioniert" color="yellow" href="/how-it-works/"></Button>
                        </div>   
                
                </LayoutTeam>    
    
    </>
  )
}

export async function getStaticProps(context) {
  
    //context.locale
    //resolvedUrl
   
    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+"/our-team/?lang="+context.locale)
    const data = await res_data.json()

    return { props: { data },revalidate: 5  }
  }

export default TeamPage