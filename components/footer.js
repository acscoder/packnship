import Link from 'next/link'
import Script from 'next/script'

export default function Footer({address,email,hotline}) {
    const parse = require('html-react-parser');
    return ( 
    <>
    <footer id="footer-bar" className="bg-orange text-white sm:p-10 p-5 hidden">
    <div className="border-4 border-black relative h-[156px]">
        <div className="container mx-auto mt-[18px]">
            <div className="grow mr-[320px]">
                <div className="sm:grid sm:grid-cols-4 sm:gap-x-20 sm:inline-flex h-full items-center sm:text-left text-center sm:py-0 py-5">
                    <div className="col-span-2 py-2">
                        <div className="logo">
                        <Link href="/">
                            <a className="text-6xl"><span className="icon-logo"></span></a>
                        </Link>
                       </div>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base lg:text-2xl font-normal">
                            {parse(address)}
                            </div>
                        </div> 
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="h-full inline-flex items-center">
                            <div className="text-base lg:text-2xl font-normal">
                                {email}<br/>
                                {hotline}</div>
                        </div>
                    </div>
                </div>
            </div>     
            
            <a className="absolute top-0 right-0 block grow-0 text-center sm:w-80 w-full sm:text-3xl text-2xl font-normal sm:border-l-[3px] sm:border-t-0 border-t-[3px] border-black sm:py-14 py-8 hover:bg-green transition-colors" href="#">Let’s Talk</a>
        </div>
    </div>
    </footer>
    <div className="text-center w-full fixed sm:bottom-1 bottom-0 left-0 " id="show-footer">
        <button className="transition" id="as_show_footer">
          <span className="icon-chevron-down mx-auto text-3xl"></span>
        </button>
    </div>

    <Script
        id="jquery"
        strategy="lazyOnload"
        src="https://code.jquery.com/jquery-1.12.4.min.js" 
        onLoad={() => {
            
            jQuery('#as_show_footer').on('click',function(){
                var _this = jQuery(this);
                if(jQuery('#footer-bar').hasClass('hidden')){
                    jQuery('#footer-bar').removeClass('hidden');
                    jQuery('#footer-bar').show();
                    _this.addClass('rotate-180');
                    document.getElementById("footer-bar").scrollIntoView({behavior: "smooth"});
                    }else{
                        jQuery('#footer-bar').fadeOut('slow',function(){
                            jQuery('#footer-bar').addClass('hidden');
                            _this.removeClass('rotate-180');
                        });
                    }
            });
           
        }}
      />

    </>
    )
}
