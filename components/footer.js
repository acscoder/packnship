import Link from 'next/link'
import Script from 'next/script'
export default function Footer({address,email,hotline}) {
    const parse = require('html-react-parser');
    return ( 
    <footer className="relative">
   
    <div id="footer-bar" className="bg-pink text-white xl:p-10 p-5 hidden">
    <div className="border-4 border-black relative lg:h-[156px]">
        <div className="2xl:px-[105px] xl:px-[80px] lg:px-[40px] px-6 lg:mt-[18px]">
            <div className="lg:grow lg:mr-[320px]">
                <div className="md:grid md:grid-cols-3 lg:gap-x-10 xl:gap-x-20 md:inline-flex h-full items-center md:text-left text-center lg:py-0 py-5">
                    <div className="col-span-1 py-2">
                        <div className="logo">
                        <Link href="/">
                        <a className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl"><span className="icon-logo"></span></a>
                        </Link>
                       </div>
                       <div className="2xl:text-3xl xl:text-2xl text-xl">Beautiful Logistics</div>
                    
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center xl:ml-20">
                            <div className="text-base 3xl:text-2xl 2xl:text-xl">
                            {parse(address)}
                            </div>
                        </div> 
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base 3xl:text-2xl 2xl:text-xl">
                            <div><span className="icon-mobile mr-2"></span><a href={"tel:"+hotline} className="" rel="nofollow">{hotline}</a></div>
                                <div><span className="icon-mail mr-2"></span><a href={"mailto:"+email} className="" rel="nofollow">{email}</a></div>
                                
                                <div><span className="icon-megaphone mr-2"></span><a href="https://www.linkedin.com/company/packnship/?trk=public_jobs_topcard-org-name&amp;originalSubdomain=de" rel="nofollow" target="_blank">Linkedin</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <div className="lg:absolute z-10 top-0 right-0 block grow-0 text-center lg:w-80 w-full lg:border-l-[3px] lg:border-t-0 border-t-[3px] border-black h-full">
            <Link href="/contact-us">
            <a className="lg:text-3xl text-2xl font-normal pb-2 block 2xl:mt-14 xl:mt-10 lg:mt-8 mt-6 lg:mb-0 mb-6 ">Let’s Talk</a>
            </Link>
            
            </div>
        </div>
    </div>
    <div className="text-base absolute bottom-[10px] right-0 xl:pr-10 pr-5"><Link href="/sitemap"><a target="_blank">Sitemap</a></Link> | <Link href="/impressum"><a target="_blank">Impressum</a></Link> | <a href="https://1000k.berlin/" target="_blank" rel="nofollow">Site: 1000K.berlin</a></div>
    
    </div>

    
    <div className="text-center w-[100px] left-1/2 ml-[-50px] absolute bottom-0 overflow-hidden xl:h-auto h-[27px]" id="show-footer">
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
