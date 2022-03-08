import Link from 'next/link'
import Script from 'next/script'
export default function Footer({address,email,hotline}) {
    const parse = require('html-react-parser');
    return ( 
    <footer>
     <div className="text-center w-full fixed sm:bottom-1 bottom-0 left-0 " id="show-footer">
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
    <div id="footer-bar" className="bg-pink text-white sm:p-10 p-5 hidden">
    <div className="border-4 border-black relative md:h-[156px]">
        <div className="container mx-auto md:mt-[18px]">
            <div className="md:grow md:mr-[320px]">
                <div className="md:grid xl:grid-cols-3 xl:gap-x-10 2xl:grid-cols-4 2xl:gap-x-20 md:inline-flex h-full items-center md:text-left text-center sm:py-0 py-5">
                    <div className="2xl:col-span-2 col-span-1 py-2">
                        <div className="logo">
                        <Link href="/">
                            <a className="xl:text-6xl text-3xl"><span className="icon-logo"></span></a>
                        </Link>
                       </div>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base xl:text-2xl font-normal">
                            {parse(address)}
                            </div>
                        </div> 
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base xl:text-2xl font-normal">
                                {email}<br/>
                                {hotline}
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <Link href="/contact-us">
            <a className="md:absolute top-0 right-0 block grow-0 text-center sm:w-80 w-full sm:text-3xl text-2xl font-normal sm:border-l-[3px] sm:border-t-0 border-t-[3px] border-black sm:py-14 py-8 hover:bg-cascade transition-colors">Let’s Talk</a>
            </Link>
        </div>
    </div>
    </div>
   <Script>
   {`window.Transition1Component.setState({isVisible:false});window.NavigatorComponent.setState({isVisible:false});`}
   </Script>
    </footer>
   
    )
}
