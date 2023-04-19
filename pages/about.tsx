import Header from "@/components/header"
import { useState, useEffect } from "react"

/*

1. Load a different page when the user is visiting for the first time
    2. Cookie Popup?
3. display different elements after time

*/


export default function AboutPage() {
    const [stage, setStage] = useState(0)
    const [count, setCount] = useState(0)

    const handleStage = (input: number) => {
      setStage(old => old + input)
    }

    setTimeout( () => {
            setCount(old => old + 1)
    }, 1000)

    if (stage === 0) {
        return (
            <main className="bg-slate-900 font-mono py-[10vh] text-white">
            <section className="px-6 min-h-[82vh] text-white grid content-center">
                {stage}
                {count}
              <div className="flex items-center flex-col gap-5 justify-center">
                <div className="w-max">
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-white font-bold">Ich bin TillJonas27</h1>
                </div>
                  <button onClick={() => handleStage(1)} className="px-8 py-2 bg-green-600">
                    Los geht's
                  </button>
              </div>
            </section>
          </main> 
      )
    } else if (stage === 1)
        return (
            <main className="bg-slate-900 font-mono py-[10vh] text-white">
            <section className="px-6 min-h-[82vh] text-white grid content-center">
                {stage}
                {count}
                <div className="w-max">
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-white font-bold">Hi! Briefing beginnt...</h1>
                </div>
                <div className="">
                         
                </div>
            </section>
          </main> 
        )
}