import { useState } from "react"
import Header from "@/components/header"
import Card from "@/components/Card"
import Link from "next/link"

export async function getServerSideProps() {
    const res = await fetch("https://meyerjark.de/wp-json/wp/v2/categories")
    const data = await res.json()
  
    return {
      props: {
        data
      }
    }
  }

export default function BlogPage({data}) {
    const [theme, setTheme] = useState(true)

    const handleTheme = () => {
      setTheme(old => !old )
    }

    console.log(data)

    console.log(data[0].name)

    const categoriesRendered = data.map( (category) => {
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
                        <Card title={"Hot Shot Article"} desc={"Lorem ipsum dolor sit amet"} theme={theme}/>
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