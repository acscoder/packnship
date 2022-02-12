import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutTeam from '../../components/layout-team'

import GridSimple from '../../components/grid/simple'
import GridTeamFriends from '../../components/grid/team-friends'

function TeamPage({ data,options }) {
    const router = useRouter()
  const { locale, locales, defaultLocale } = router
  
  let comp;
  
  switch(data.data_layout) {
    case "family-friends":
      comp = <GridTeamFriends data={data}/>;
      break;   
    default:
      comp = <GridSimple data={data}/>;
  }

  return (
    <>
  <LayoutTeam data={data} options={options}>{comp}</LayoutTeam>      
    </>
  )
}
export async function getStaticPaths() {
  const posts = ["senior-management", "operational-team","now-hiring", "family-friends"];
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return {
    paths,
    fallback: "blocking"
  }
}
export async function getStaticProps(context) {
    const res_options = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/options.json")
    const options = await res_options.json()

    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/"+context.params.slug+".json")
    const data = await res_data.json()

    return { props: { data,options },revalidate: 5  }
  }

export default TeamPage