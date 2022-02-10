import Link from 'next/link'
export default function Button({href,color,text}) {
   const cl = "btn btn-simple font-semibold inline-flex py-3 mt-3 text-"+color
    return ( 
    <>
    <Link href={href}>
        <a className={cl}><span>{text}</span> <img className="ml-5" src="./images/arrow-icon.svg" width="26" height="12"/></a>             
    </Link>
    </>
    )
}
