import { useRouter } from "next/router";
import LayoutTeam from "../../components/layout-team";
import GridSimple from "../../components/grid/simple";
import GridTeam1 from '../../components/grid/team-1'
import GridTeam1Mobile from '../../components/grid/mobile/team-1'
import Slider from "react-slick"
import Head from 'next/head'
import { MobileView, BrowserView } from "react-device-detect"

function TeamPage({ data, options }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const parse = require("html-react-parser");
  const slider_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slide:"> div",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true  
  };
  return (
    <>
    <BrowserView>
     <Head>
     <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
     </Head>
      <LayoutTeam data={data} options={options}>
        <div className="our_team_slider scrollbar">   
          <Slider {...slider_settings}>
            <GridSimple data={data} />
            {data.data_grid.page.length&&data.data_grid.page.map(function(sub_page,index){   
                return ( 
                  <GridTeam1 key={"group_"+index} data={sub_page}/>
                )
              })}  
          </Slider> 
        </div>
      </LayoutTeam>
      </BrowserView>
      <MobileView>
      <LayoutTeam data={data} options={options}>
        <GridSimple data={data} />
          {data.data_grid.page.length&&data.data_grid.page.map(function(sub_page,index){   
                return ( 
                  <div key={"group_"+index} className="mt-10"><GridTeam1Mobile data={sub_page}/></div>
                )
              })} 
        </LayoutTeam>
      </MobileView>
    </>
  );
}

export async function getStaticProps(context) {
  const ver = Math.random();

  const res_options = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/options.json?ver=" +
      ver
  );
  const options = await res_options.json();

  const res_data = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/" +
      context.locale +
      "/our-team.json?ver=" +
      ver
  );
  let data = await res_data.json()
  
  options.currentSlug = "our-team";

  return { props: { data, options }, revalidate: 5 };
}

export default TeamPage;
