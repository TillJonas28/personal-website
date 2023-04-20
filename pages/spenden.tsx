import QandA from "@/components/QuestionAndAnswer"
import Header from "@/components/header"

export default function SpendenPage() {
    return (
        <main className="mt-[8vh]">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fragen zu den Spenden</h2>
                    <QandA question={"What do you mean by Figma assets?"} answer={"You will have access to download the full Figma project including all of the pages, t"} />
                </div>
            </section>
        </main>
    )
}