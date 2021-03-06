import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutTeam from '../../components/layout-team'

import GridTeamFriends from '../../components/grid/team-friends'
import GridTeamDefault from '../../components/grid/team-default'
import GridTeam1 from '../../components/grid/team-1'
import GridTeam2 from '../../components/grid/team-2'
import GridTeamHiring from '../../components/grid/team-hiring'

function TeamPage({ data,options }) {
    const router = useRouter()
  const { locale, locales, defaultLocale } = router
  
  let comp;
  
  switch(data.data_layout) {
    case "family-friends":
      comp = <GridTeamFriends data={data}/>;
      break;   
      case "team-1":
      comp = <GridTeam1 data={data}/>;
      break; 
      case "team-2":
      comp = <GridTeam1 data={data}/>;
      break; 
      case "hiring":
      comp = <GridTeamHiring data={data}/>;
      break;       
    default:
      comp = <GridTeamDefault data={data}/>;
  }

  return <LayoutTeam data={data} options={options}>{comp}</LayoutTeam>  

}
export async function getStaticPaths() {
  const ver = Math.random()
  const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/de/options.json?ver="+ver)
   
  const data = await res_data.json()

  const paths = data.our_team.map((post) => ({
    params: { slug: post.post_name },
  }));

  return {
    paths,
    fallback: "blocking"
  }
}
export async function getStaticProps(context) {
    const ver = Math.random()
    const res_options = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/options.json?ver="+ver)
    const options = await res_options.json()
    const res_data = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL+"/"+context.locale+"/"+context.params.slug+".json?ver="+ver)
   
    const data = await res_data.json()
    
    options.currentSlug =  context.params.slug 
   
    return { props: { data,options },revalidate: 5  }
  }

export default TeamPage