import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutTeam from '../../components/layout-team'

import GridSimple from '../../components/grid/simple'
import GridTeamFriends from '../../components/grid/team-friends'

function TeamPage({ data }) {
    const router = useRouter()
  const { locale, locales, defaultLocale } = router
  
  let comp;
  
  switch(data.page.data_layout) {
    case "family-friends":
      comp = <GridTeamFriends data={data.page}/>;
      break;   
    default:
      comp = <GridSimple data={data.page.data_grid}/>;
  }

  return (
    <>
  <LayoutTeam data={data}>{comp}</LayoutTeam>      
    </>
  )
}
export async function getStaticPaths() {

  const posts = ["our-team/senior-management", "our-team/operational-team","our-team/now-hiring", "our-team/family-friends"];
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return {
    paths,
    fallback: "blocking"
  }
}
export async function getStaticProps(context) {
  
    //context.locale
    //resolvedUrl
    
    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+"/"+context.params.slug+"/?lang="+context.locale)
    const data = await res_data.json()

    return { props: { data },revalidate: 5  }
  }

export default TeamPage