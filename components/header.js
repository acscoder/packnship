import Link from 'next/link'
import Head from 'next/head'
import React from "react"
import { useRouter } from 'next/router'
import Navigator from "../components/navigator"

export default function Header({slogan,sloganColor,currentSlug,seo,menus}) {
    if(!currentSlug){currentSlug = '/';}
    const parse = require('html-react-parser');
    const router = useRouter()
        const {locale} = router
    return ( 
        <>
        <Head>
        <meta charset="UTF-8"/>
	<link rel="profile" href="http://gmpg.org/xfn/11"/>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        {parse(seo)}
      </Head>
    
<header className="header border-b-[3px] border-black">
                <div className="container xl:mx-auto xl:px-0 px-6">
                    <div className="grid xl:grid-cols-5 xl:gap-x-10 grid-cols-2 gap-x-2">
                        <div className="logo py-8 inline-flex items-center ">
                        <Link href="/">
                            <a className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl"><span className="icon-logo"></span></a>
                        </Link>
                        </div>
                        <div className="col-span-3 xl:block hidden">
                            <div className="py-8 pl-16 border-l-[3px] border-black h-full inline-flex items-center">
                                <h2 className={"text-[28px] font-normal text-"+ sloganColor }>{slogan}</h2>  
                            </div>
                        </div>
                        <div className="py-8 lg:inline-flex lg:items-center justify-end">
                            <div className="float-right inline-flex items-center">
                                <div className="text-black font-bold uppercase text-lg lg:text-2xl">
                                <Link href={currentSlug} locale="de"><a>DE</a></Link>/<Link href={currentSlug} locale="en"><a>EN</a></Link></div>
                                <button 
                                 onClick={(e) => {
                                   window.Transition0Component.setState({isVisible:true,color:"cascade-900"});    
                                   setTimeout(() => {window.NavigatorComponent.setState({isVisible:true});},100)
                               }}
                                ><a className="xl:ml-10 ml-5 block xl:w-24 w-12">
                                    <span className="icon-faltplan-weiss lg:text-5xl text-2xl text-black"></span>
                                    </a></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
            {menus['top-menu-'+locale] && (<Navigator menus={menus['top-menu-'+locale]}/> )}
    </>
    )
}
