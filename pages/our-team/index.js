import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutTeam from "../../components/layout-team";
import GridSimple from "../../components/grid/simple";

import Button from "../../components/button";

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
  const data = await res_data.json();
  options.currentSlug = "/our-team";

  return { props: { data, options }, revalidate: 5 };
}

export default TeamPage;
