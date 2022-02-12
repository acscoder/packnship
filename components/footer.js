import Link from 'next/link'
import Script from 'next/script'

export default function Footer({address,email,hotline}) {
    const parse = require('html-react-parser');
    return ( 
    <>
    <footer id="footer-bar" className="bg-pink text-white sm:p-10 p-5 hidden">
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
        
            jQuery('body,html').on('click','#as_show_footer',function(e){
                e.preventDefault();
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
                return false;
            });

            function show_hiw_item(ind,color){
                jQuery('#main-content').attr('class', function(i, c){
              return c.replace(/(^|\s)bg-\S+/g, '');
              });
                jQuery('#main-content').addClass('bg-'+color+'-600');
              
              
                jQuery('#hiw_menu button').attr('class', function(i, c){
              return c.replace(/(^|\s)hover:bg-\S+/g, '');});
              
              jQuery('#hiw_menu button').addClass('hover:bg-'+color+'-700');
              
              
              jQuery('#hiw_menu button .number').attr('class', function(i, c){
              return c.replace(/(^|\s)text-(\S+)-800/g, '');});
              jQuery('#hiw_menu button .number').addClass('text-'+color+'-800');
              
              
              jQuery('.hiw_item').addClass('sm:hidden');
              jQuery('#hiw_item_'+ind).removeClass('sm:hidden');
              
              jQuery('#slogan').removeClass('text-yellow');
              if(ind){
                jQuery('#slogan').addClass('text-white');
              }else{
                jQuery('#slogan').addClass('text-yellow');
              }
              }
              jQuery('body,html').on('click','.hiw_menu_item',function(e){
                e.preventDefault();
                show_hiw_item(jQuery(this).data('index'),jQuery(this).data('color'));
                return false;
              });
              
           
        }}
      />

    </>
    )
}
