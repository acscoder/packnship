import Link from 'next/link'

export default function Header({slogan,sloganColor}) {
    
    return ( 
    <>
<header className="header border-b-[3px] border-black">
                <div className="container w-[auto] lg:w-full lg:mx-auto mx-6">
                    <div className="grid xl:grid-cols-5 xl:gap-x-10 grid-cols-2 gap-x-2">
                        <div className="logo py-10 inline-flex items-center ">
                        <Link href="/">
                            <a className="text-6xl"><span className="icon-logo"></span></a>
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
                                <Link href="/" locale="de"><a>DE</a></Link>/<Link href="/" locale="en"><a>EN</a></Link></div>
                                <Link href="/wie-es-funktioniert"><a className="xl:ml-10 ml-5 block xl:w-24 w-12"><img src="/images/faltplan-weiss.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </>
    )
}
