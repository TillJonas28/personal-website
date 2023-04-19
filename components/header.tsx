import Link from "next/link"
import { useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { prototype } from "events"

interface HeaderProps{
    theme: boolean
    handleTheme: any,
}

export default function Header(props: HeaderProps) {
    const [navMenu, setNavMenu] = useState(false)
    const [parent, enableAnimations] = useAutoAnimate()
    const handleNav = () => {
      setNavMenu(old => !old)
    }
    
    const ARRAY = ["home", "blog", "services", "about"]

    return (
            <header ref={parent} className={`${props.theme ? "bg-slate-900 border-slate-700 text-white font-mono" : ""} fixed top-0 drop-shadow-sm flex gap-6 items-center px-10 right-0 left-0 z-10 h-[8vh] border-b`}>
                <nav ref={parent}>
                        <svg onClick={handleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                </nav>
                {navMenu ?
                    <ul ref={parent}  className="tracking-widest py-8 fixed flex flex-col text-3xl justify-center gap-6 items-center bg-zinc-200 text-slate-900 top-0 left-0 right-0 bottom-0 h-screen">
                        {ARRAY.map( (item) => {
                            return (
                            <li>
                                <Link className="hover:border-b-2 hover:border-red-900" href={`/${item}`}>
                                    {item}
                                </Link>
                            </li>
                            )
                        })}
                        <svg onClick={handleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </ul>
                : 
                ""
                }
                <Link href="/" className="text-xl">TM</Link>
                <svg onClick={props.handleTheme} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 ml-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg> 
            </header>
            )
}