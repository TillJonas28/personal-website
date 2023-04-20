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
    const [remmArticlesNr, setRemmArticlesNr] = useState(1)
    const [postsNr, setPostsNr] = useState(1)
    const [categoriesRenderedNr, setCategoriesRenderedNr] = useState(4)

    const handleTheme = () => {
      setTheme(old => !old )
    }

    const RECOMMENDATIONS = posts.filter( (post:any) => post.id === 4653 || post.id === 4560)

    const recommendationsRendered = RECOMMENDATIONS.map( (recomm:any) => {
        return <Card id={recomm.id} key={recomm.id} title={recomm.title.rendered} desc={recomm.excerpt.rendered} theme={theme} />
    })
    console.log(posts)

    console.log(RECOMMENDATIONS[0])

    const categoriesRendered = categories.map( (category:any) => {
        return (
            <Card id={categories.id} key={category.id} title={category.name} desc={""} theme={theme} />
        )
    })

    const postsRendered = posts.map( (post:any) => {
        return (
            <Card id={post.id} key={post.id} title={post.title.rendered} desc={post.excerpt.rendered} theme={theme} />
        )
    })


    return (
        <main className={`${theme ? "bg-slate-900 text-white font-mono" : ""} py-[10vh] `}>
            <Header theme={theme} handleTheme={handleTheme}/>
            <section className=" px-6 min-h-[82vh]">
                <section className="my-6" id="recommendation-article">
                    <h1 className="text-2xl font-semibold mb-4">Meine Empfehlungen</h1>
                    <div className="grid md:grid-cols-2 gap-7">
                        {recommendationsRendered.slice(0, remmArticlesNr)}
                        <svg onClick={() => setRemmArticlesNr(old => old + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer place-self-center w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                </section>
                <section className="my-6" id="categories">
                    <h1 className="text-2xl font-semibold mb-4">Kategorien</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 ">
                        {categoriesRendered.slice(0, categoriesRenderedNr)}
                        <svg onClick={() => setCategoriesRenderedNr(old => old + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer place-self-center w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </section>
                <section className="my-6" id="latest">
                    <h1 className="text-2xl font-semibold mb-4">Neuesten Artikel</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 ">
                        {postsRendered.slice(0, postsNr)}
                        <svg onClick={() => setPostsNr(old => old + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer place-self-center w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
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