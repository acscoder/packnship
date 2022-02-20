import Link from 'next/link'
import Head from 'next/head'

export default function Header({slogan,sloganColor,currentSlug,seo}) {
    if(!currentSlug){currentSlug = '/';}
    const parse = require('html-react-parser');
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
                <div className="container w-[auto] lg:w-full lg:mx-auto mx-6">
                    <div className="grid xl:grid-cols-5 xl:gap-x-10 grid-cols-2 gap-x-2">
                        <div className="logo py-10 inline-flex items-center ">
                        <Link href="/">
                            <a className="lg:text-6xl text-3xl"><span className="icon-logo"></span></a>
                        </Link>
                        </div>
                        <div className="col-span-3 xl:block hidden">
                            <div className="py-10 pl-16 border-l-[3px] border-black h-full inline-flex items-center">
                                <h2 className={"text-3xl font-normal text-"+ sloganColor }>{slogan}</h2>  
                            </div>
                        </div>
                        <div className="py-10 lg:inline-flex lg:items-center justify-end">
                            <div className="float-right inline-flex items-center">
                                <div className="text-black font-bold uppercase text-lg lg:text-2xl">
                                <Link href={currentSlug} locale="de"><a>DE</a></Link>/<Link href={currentSlug} locale="en"><a>EN</a></Link></div>
                                <Link href="/how-it-works"><a className="xl:ml-10 ml-5 block xl:w-24 w-12"><img src="/images/faltplan-weiss.svg" /></a></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
    </>
    )
}
