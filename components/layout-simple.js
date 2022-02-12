import Footer from '../components/footer'
import Header from '../components/header'
export default function LayoutSimple({ children,data }) {
  return (
    <>
    <section id="main-content" className={"xl:h-full min-h-full text-white sm:p-10 p-5 bg-"+data.page.background_color}>
        <div className="border-4 border-black xl:min-h-full relative">
        <Header slogan={data.page.slogan} sloganColor={data.page.sloganColor}/>
        {children}
        </div>
    </section>
    <Footer address={data.options.address} email={data.options.email} hotline={data.options.hotline}/>
    </>
  )
}