import Link from 'next/link'
export default function LanguageBar({currentSlug}) {
   
    return ( 
    <>
    <Link href={currentSlug} locale="de"><a>DE</a></Link>/<Link href={currentSlug} locale="en"><a>EN</a></Link>
    </>
    )
}
