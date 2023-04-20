import Link from "next/link"

interface CardProps{
    theme: boolean,
    title: string,
    desc: string,
    id: number,
}

const LOREMIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  "

export default function Card({theme, title="Artikel 1", desc=LOREMIPSUM, id}:CardProps) {
    return (
        <Link href={`/blog/${id}`} className={`${theme ? "bg-slate-800 text-white" : "bg-zinc-200"} cursor-pointer box-shadow-sm p-4 hover:scale-105 transition-all mb-[2vh]`}>
            <img className="mb-4 drop-shadow-sm w-full object-cover h-24" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"></img>
            <h3 className="font-bold tracking-wider">{title}</h3>
            <p className="tracking-wide overflow-hidden opacity-90 border-b border-zinc-300 pb-4 mb-4">{desc.substring(0, 120)} </p>
            <button className={`${theme ? "bg-slate-600 border border-slate-700 " : "bg-white text-slate-900 border border-zinc-400"} p-2`}>
                read more
            </button>
        </Link>
    )
}