import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import Dropdown from '../components/dropdown'

export default function LayoutTeam({ children,data,options }) {
  
  return (
    <>
      <section className={"xl:h-screen text-white xl:p-10 p-5 layout_team bg-"+data.background_color}>
        <div className="border-4 border-black xl:min-h-full relative">         
            <Header slogan={data.slogan} sloganColor={data.slogan_color}  currentSlug={options.currentSlug}/>
            <div className="container w-full lg:mx-auto mx-6 content_min_height flex items-center ">
                <div className="my-5 lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-10 xl:gap-x-20 mx-auto xl:max-w-[95%] w-full">
                
                    <div className="col-span-2">
                    <Dropdown></Dropdown>
                    {children}
                    </div>
                    <div className="col-span-1 lg:block hidden">
                        <div className="flex items-center h-full">
                            <div className="w-full sm:text-2xl text-xl font-regular">
                                <div className=""><Link href="/our-team"><a className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(options.currentSlug=="/our-team"?"bg-":"hover:bg-")+data.background_color+"-700"}><strong className={"ml-6 mr-8 group-hover:text-white number font-black " +(options.currentSlug=="/our-team"?"text-white":"text-"+data.background_color+"-800")}>01</strong><span className="sm:w-56 leading-none font-normal">Our Team</span></a></Link></div>
                                <div className=""><Link href="/our-team/senior-management"><a className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(options.currentSlug=="/our-team/senior-management"?"bg-":"hover:bg-")+data.background_color+"-700"}><strong className={"ml-6 mr-8 group-hover:text-white number font-black "+(options.currentSlug=="//our-team/senior-management"?"text-white":"text-"+data.background_color+"-800")}>02</strong><span className="sm:w-56 leading-none font-normal">Senior Management</span></a></Link></div>
                                <div className=""><Link href="/our-team/operational-team"><a className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(options.currentSlug=="/our-team/operational-team"?"bg-":"hover:bg-")+data.background_color+"-700"}><strong className={"ml-6 mr-8 group-hover:text-white number font-black "+(options.currentSlug=="/our-team/operational-team"?"text-white":"text-"+data.background_color+"-800")}>03</strong><span className="sm:w-56 leading-none font-normal">Operational Team</span></a></Link></div>
                                <div className=""><Link href="/our-team/now-hiring"><a className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(options.currentSlug=="/our-team/now-hiring"?"bg-":"hover:bg-")+data.background_color+"-700"}><strong className={"ml-6 mr-8 group-hover:text-white number font-black "+(options.currentSlug=="/our-team/now-hiring"?"text-white":"text-"+data.background_color+"-800")}>04</strong><span className="sm:w-56 leading-none font-normal">Now Hiring</span></a></Link></div>
                                <div className=""><Link href="/our-team/family-friends"><a className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(options.currentSlug=="/our-team/family-friends"?"bg-":"hover:bg-")+data.background_color+"-700"}><strong className={"ml-6 mr-8 group-hover:text-white number font-black "+(options.currentSlug=="/our-team/family-friends"?"text-white":"text-"+data.background_color+"-800")}>05</strong><span className="sm:w-56 leading-none font-normal">Family & Friends</span></a></Link></div>
                            </div>  
                        </div>                          
                    </div>
                  </div>
            </div>
        </div>
    </section>
    
    <Footer address={options.address} email={options.email} hotline={options.hotline}/>
    </>
  )
}