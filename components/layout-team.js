import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'

import { MobileView, isMobile } from "react-device-detect"

import GridTeamFriendsMobile from '../components/grid/mobile/team-friends'
import GridTeamDefaultMobile from '../components/grid/mobile/team-default'
import GridTeam1Mobile from '../components/grid/mobile/team-1'
import GridTeam2Mobile from '../components/grid/mobile/team-2'
import GridTeamHiringMobile from '../components/grid/mobile/team-hiring'

export default function LayoutTeam({ children,data,options }) {
 
  return (
    <>
      <section className={"min-h-full text-white xl:p-10 p-5 layout_team bg-"+data.background_color+"-600"}>
        <div className="border-4 border-black min-h-full relative">         
            <Header slogan={data.slogan} sloganColor={data.slogan_color}  currentSlug={options.currentSlug} seo={data.seo} menus={options.menus} consenttitle={options.cookie_preferences_title} consentcontent={options.cookie_preferences}/>
            <div className="2xl:mx-[105px] 2xl:px-0 px-6 2xl:min-h-[740px] min-h-screen--10 flex items-center">
                <div className="my-5 lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-10 xl:gap-x-20 mx-auto 3xl:max-w-[95%] w-full">
                    <div className="col-span-2">  
                    {children}
                    </div>
                    <div className="col-span-1 lg:block hidden">
                        <div className="flex items-center h-full">
                            <div className="w-full sm:text-2xl text-xl font-regular">
                                
                                {options.our_team && options.our_team.map(function(menu_item,index){
                                  let clink = '/our-team'
                                  if(menu_item.post_name!='our-team'){
                                    clink = '/our-team/'+menu_item.post_name
                                  }
                                    return (<div className=""><Link href={clink}>
                                      <a className={"hiw_menu_item group h-20 w-full inline-flex items-center border-b-[3px] border-black text-left transition-colors "+(options.currentSlug==menu_item.post_name?"bg-":"hover:bg-")+data.background_color+"-700"}>
                                        <strong className={"ml-6 mr-8 group-hover:text-white number font-black "+(options.currentSlug==menu_item.post_name?"text-white":"text-"+data.background_color+"-800")}>0{index+1}</strong>
                                        <span className="sm:w-56 leading-none font-normal">{menu_item.post_title}</span></a></Link></div>)
                                })}
                            </div>  
                        </div>                          
                    </div>
                  </div>
            </div>
        </div>
    </section>
    
    <MobileView>
    {data.sub_page && Object.keys(data.sub_page).map(function(page,index){
      let comp;
      switch(data.sub_page[page].data_layout) {
        case "family-friends":
          comp = <GridTeamFriendsMobile data={data.sub_page[page]} index={index+2}/>;
          break;   
          case "team-1":
          comp = <GridTeam1Mobile data={data.sub_page[page]} index={index+2}/>;
          break; 
          case "team-2":
          comp = <GridTeam1Mobile data={data.sub_page[page]} index={index+2}/>;
          break; 
          case "hiring":
          comp = <GridTeamHiringMobile data={data.sub_page[page]} index={index+2}/>;
          break;       
        default:
          comp = <GridTeamDefaultMobile data={data.sub_page[page]} index={index+2}/>;
      }
      return (<div className="" key={index}>
      <div className={"team_item_mobile p-5 md:hidden block h-full h-full-block bg-"+data.sub_page[page].background_color} >
        <div className="border-4 border-black">
          <div className="px-6">
          {comp}
          </div>
        </div>
      </div>
    </div>)})} 
    </MobileView>

    <Footer address={options.address} email={options.email} hotline={options.hotline}/>
    </>
  )
}