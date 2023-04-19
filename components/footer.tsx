import Link from "next/link"

export default function Footer() {
    return (
        <footer className="drop-shadow-sm flex justify-between items-center px-10 full-width bg-zinc-100 h-16 border-t border-zinc-300">
            <Link href="/" className="text-lg">TM</Link>
            <p className="text-sm text-center">All rights reserved.</p>
            <Link className="text-sm" href="/Impressum"> Impressum </Link>
        </footer> 
    )
}