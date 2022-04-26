import React from 'react'
import { useRouter,withRouter } from 'next/router'
class Sitemap extends React.Component {
  static async getInitialProps(context) {
    const {  res } = context;
    const smap = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL+"/sitemap?lang="+context.locale)
    const smap_text = await smap.text()
    res.setHeader('Content-Type', 'text/xml')
    res.write(smap_text)
    res.end()
  }
}
export default withRouter(Sitemap)
