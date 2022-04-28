import Link from 'next/link'
import Head from 'next/head'
import React from "react"
import { useRouter,withRouter } from 'next/router'
import Navigator from "../components/navigator"
import LanguageBar from "../components/language-bar"


function Header({slogan,sloganColor,currentSlug,seo,menus}) {
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
    
<header className="header border-b-[3px] border-black ">
              
                    <div className="inline-block w-full lg:h-[135px] lg:mt-0 mt-3 h-16">
                        <div className="float-left 2xl:w-[1000px] xl:w-[800px]">
                        <div className="logo inline-flex items-center lg:h-[142px] h-16 2xl:px-[105px] xl:px-[80px] lg:px-[40px] px-6 border-black lg:border-r-[3px] float-left">
                        <Link href="/">
                            <a className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl"><span className="icon-logo"></span></a>
                        </Link>
                        </div>
                        <div className="xl:block hidden">
                            <div className="py-8 pl-16 border-black h-full inline-flex items-center lg:h-[135px] h-16">
                                <h2 id="slogan" className={"2xl:text-[28px] xl:text-2xl font-normal text-"+ sloganColor }>{slogan}</h2>  
                            </div>
                        </div>
                        </div>
                        <div className="float-right 2xl:mr-[105px] xl:mr-[80px] xl:pr-0 pr-6 h-full">
                            <div className="inline-flex items-center h-full">
                                <div className="text-black font-normal uppercase text-lg lg:text-2xl">
                                <LanguageBar locale={locale} currentSlug ={currentSlug}/>
                                </div>
                                <button 
                                 onClick={(e) => {
                                   window.Transition0Component.setState({isVisible:true,color:"cascade-900"});    
                                   setTimeout(() => {window.NavigatorComponent.setState({isVisible:true});},100)
                               }}
                                ><a className="ml-5 block w-8">
                                    <span className="icon-hamburger text-3xl text-black"></span>
                                    </a></button>
                            </div>
                            
                        </div>
                    </div>
                
            </header>
            {menus['top-menu-'+locale] && (<Navigator currentSlug ={currentSlug} menus={menus['top-menu-'+locale]}/> )}
    </>
    )
}
export default Header