import Footer from '../components/footer'
import Header from '../components/header'
export default function LayoutSimple({ children,data,options }) {
  return (
    <>
    <section id="main-content" className={"xl:h-full min-h-full text-white xl:p-10 p-5 bg-"+data.background_color}>
        <div className="border-4 border-black xl:min-h-full relative">
        <Header slogan={data.slogan} sloganColor={data.sloganColor}  currentSlug={options.currentSlug} seo={data.seo}/>
        {children}
        </div>
    </section>
    <Footer address={options.address} email={options.email} hotline={options.hotline}/>
    </>
  )
}