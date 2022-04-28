import Footer from '../components/footer'
import Header from '../components/header'
export default function LayoutSimple({ children,data,options }) {
  return (
    <>
    <section id="main-content" className={"min-h-screen text-white xl:p-10 p-5 bg-"+data.background_color}>
        <div className="border-4 border-black min-h-screen--10 relative md:h-auto h-full">
        <Header slogan={data.slogan} sloganColor={data.slogan_color}  currentSlug={options.currentSlug} seo={data.seo} menus={options.menus}/>
        {children}
        </div>
    </section>
    <Footer address={options.address} email={options.email} hotline={options.hotline}/>
    </>
  )
}