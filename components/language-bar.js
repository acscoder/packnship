import Link from 'next/link'
export default function LanguageBar({currentSlug,locale}) {   
    return ( 
    <div className="hidden">
    <Link href={currentSlug} locale="de"><a className={locale=="de" ?"font-bold":"hover:font-bold"}>DE</a></Link>/<Link href={currentSlug} locale="en"><a className={locale=="en" ?"font-bold":"hover:font-bold"}>EN</a></Link>
    </div>
    )
}
