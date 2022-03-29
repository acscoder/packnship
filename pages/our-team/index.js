import { useRouter } from "next/router";
import LayoutTeam from "../../components/layout-team";
import GridSimple from "../../components/grid/simple";

import { MobileView, isMobile } from "react-device-detect"

function TeamPage({ data, options }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const parse = require("html-react-parser");

  return (
    <>
      <LayoutTeam data={data} options={options}>
        <div className="max-w-3xl mx-auto">
          <MobileView>
          <div className="text-[28px] my-5 text-white">
              <strong
                className={
                  "font-bold pr-2 text-" + data.background_color + "-800"
                }
              >
                01
              </strong>
              {data.page_title}
            </div>
          </MobileView>
          <GridSimple data={data} />
        </div>
      </LayoutTeam>
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
  
  options.currentSlug = "/our-team";

  let menu = [['/our-team',data.page_title]]
    Object.keys(data.sub_page).map(function(page,index){
      menu.push( ['/our-team/'+page,data.sub_page[page].page_title] )
    })
    data.menu = menu

  return { props: { data, options }, revalidate: 5 };
}

export default TeamPage;
