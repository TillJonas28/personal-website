import { useState } from "react"
import Header from "@/components/header"
import Card from "@/components/Card"
import Link from "next/link"

export async function getServerSideProps() {
    const res = await fetch("https://meyerjark.de/wp-json/wp/v2/categories")
    const categories = await res.json()

    const res2 = await fetch("https://meyerjark.de/wp-json/wp/v2/posts?per_page=20")
    const posts = await res2.json()
    
    return {
      props: {
        categories,
        posts
      }
    }
  }

export default function BlogPage({categories, posts}:any) {
    const [theme, setTheme] = useState(true)

    const handleTheme = () => {
      setTheme(old => !old )
    }

    const RECOMMENDATION = posts.filter( (post:any) => post.id === 4653)

    console.log(categories[0].name)

    console.log(RECOMMENDATION[0])

    const categoriesRendered = categories.map( (category:any) => {
        return (
            <Card key={category.id} title={category.name} desc={category.description} theme={theme} />
        )
    })
    return (
        <main className={`${theme ? "bg-slate-900 text-white font-mono" : ""} py-[10vh] `}>
            <Header theme={theme} handleTheme={handleTheme}/>
            <section className=" px-6 min-h-[82vh]">
                <section className="my-6" id="recommendation-article">
                    <h1 className="text-2xl font-semibold mb-4">Meine Empfehlungen</h1>
                    <div className="grid md:grid-cols-2 gap-7">
                        <Card title={RECOMMENDATION[0].title.rendered} desc={RECOMMENDATION[0].excerpt.rendered} theme={theme}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer place-self-center w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                </section>
                <section className="my-6" id="recommendation-article">
                    <h1 className="text-2xl font-semibold mb-4">Kategorien</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 ">
                        {categoriesRendered}
                    </div>
                </section>
                <section className="my-6" id="recommendation-article">
                    <h1 className="text-2xl font-semibold mb-4">Archiv</h1>
                    <div className="grid grid-col-2 gap-x-4 sm:grid-flow-col">
                        Die letzten Artikel
                    </div>
                    <Link href="">
                        Zum Archiv
                    </Link>
                </section>
            </section>
        </main>
    )
}