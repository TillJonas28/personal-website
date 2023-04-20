
/*
export async function getServerSideProps() {
  const res = await fetch("https://meyerjark.de/wp-json/wp/v2/post/ist-der-mensch-gut-oder-boese/")
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
*/
import Card from "../components/Card"
import CodingCard from "@/components/codingCard"
import { useState } from "react"
import Header from "@/components/header"
import Link from "next/link"
import Gig from "@/components/Gig"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useAutoAnimate } from "@formkit/auto-animate/react"

export default function Home() {
  const [previewArticlesNr, setPreviewArticlesNr] = useState(2)
  const [theme, setTheme] = useState(false)

  const [parent, enableAnimations] = useAutoAnimate()

  const handleTheme = () => {
    setTheme(old => !old )
  }

  const articles = [1,2,3,4]

  const previewArticles = articles.map( (item) => {
    return <Card id={item} key={item} title={"Test"} desc={"Test Test Test"} theme={theme} />
  })

  return (
    <main ref={parent} className={`${theme ? "bg-slate-900 text-white" : ""} mt-[8vh] pt-[4vh] min-h-[80vh]`}>
    <Header theme={theme} handleTheme={handleTheme}/>
    <section className="px-6 md:px-14 lg:px-24 min-h-[82vh]">
      <section className="pb-20 border-b-4 border-dashed border-white-600 mb-10" id="blog-preview">
        <h1 className="text-3xl mb-4">Mein neuester Artikel</h1>
        <div className="grid md:grid-cols-2 gap-7">
          {previewArticles.slice(0, previewArticlesNr)}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <svg onClick={() => setPreviewArticlesNr(old => old + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-pulse cursor-pointer w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
          <Link href="/blog" className={`${theme ? "hover:drop-shadow-lg hover:scale-105 flex gap-2 bg-slate-200" : "bgreen-c-300"} outline px-8 py-2`}>
            blog
          </Link>
        </div>
      </section>
      <section id="about-preview">
        <h1 className="text-4xl mb-6">Ueber mich</h1>
        <div className="grid md:grid-cols-2">
          <img className="hover:rotate-2 transition-all drop-shadow-lg rounded-md w-4/5" src="https://www.politico.eu/cdn-cgi/image/width=768,quality=80,onerror=redirect,format=auto/wp-content/uploads/2015/11/1GettyImages-51351020.jpg">
          </img>
          <div className="hover:bg-slate-50 hover:drop-shadow-md hover:text-lg transition-all bg-white flex flex-col gap-4 py-4 w-4/5">
            <p className="">
              Ich bin Till. Aktuell leiste ich einen Internationalen Freiwilligendienst in Cambridge, UK. Dort arbeite ich mit Obdachlosen. Ab September 2023 studiere ich an der Bucerius Law School.
            </p>
            <p className="">
              In meiner Freizeit bastele ich gerne mit Technik und schreibe fuer meinen Blog. Dort geht es um Philosphie, Kultur & ganz persoenliche Erfahrungen.
            </p>
          </div>
        </div>
      </section>
    </section>
    </main>
  ) 
}
