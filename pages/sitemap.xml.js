import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const res_options = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_DATA_URL +
      "/en" +
      "/options.json"
  );
  const options = await res_options.json();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
              </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;