import Link from 'next/link'
import Script from 'next/script'
export default function Footer({address,email,hotline}) {
    const parse = require('html-react-parser');
    return ( 
    <footer className="relative">
   
    <div id="footer-bar" className="bg-pink text-white xl:p-10 p-5 hidden">
    <div className="border-4 border-black relative lg:h-[156px]">
        <div className="2xl:mx-[105px] lg:mt-[18px]">
            <div className="lg:grow lg:mr-[320px]">
                <div className="xl:grid xl:grid-cols-3 xl:gap-x-10 2xl:grid-cols-4 2xl:gap-x-20 lg:inline-flex h-full items-center lg:text-left text-center lg:py-0 py-5">
                    <div className="2xl:col-span-2 col-span-1 py-2">
                        <div className="logo">
                        <Link href="/">
                        <a className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl"><span className="icon-logo"></span></a>
                        </Link>
                       </div>
                       <div className="font-base"><a href={"/sitemap.xml"} target="_blank">Sitemap</a> | <Link href="/impressum"><a>Impressum</a></Link></div>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base 3xl:text-2xl 2xl:text-xl">
                            {parse(address)}
                            </div>
                        </div> 
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base 3xl:text-2xl 2xl:text-xl">
                                <a href={"mailto:"+email} className="" rel="nofollow">{email}</a><br/>
                                <a href={"tel:"+hotline} className="" rel="nofollow">{hotline}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <Link href="/contact-us">
            <a className="lg:absolute top-0 right-0 block grow-0 text-center lg:w-80 w-full lg:text-3xl text-2xl font-normal lg:border-l-[3px] lg:border-t-0 border-t-[3px] border-black lg:py-14 py-8 hover:bg-cascade transition-colors">Let’s Talk</a>
            </Link>
        </div>
    </div>
    </div>
    <div className="text-center w-full absolute bottom-0 overflow-hidden xl:h-auto h-[27px]" id="show-footer">
        <button
         onClick={(e) => {
             
             var _this = document.getElementById("as_show_footer");
             
             if(_this.classList.contains('rotate-180')){
                _this.classList.remove('rotate-180');
                document.getElementById("footer-bar").classList.add("hidden");
             }else{
                _this.classList.add('rotate-180');
            document.getElementById("footer-bar").classList.remove("hidden");
            document.getElementById("footer-bar").scrollIntoView({behavior: "smooth"});
            }  
        }}
        className="transition" id="as_show_footer">
          <span className="icon-chevron-down mx-auto text-3xl"></span>
        </button>
    </div>
   
   <Script>
   {`window.Transition1Component.setState({isVisible:false});window.NavigatorComponent.setState({isVisible:false});`}
   </Script>


    </footer>
   
    )
}
