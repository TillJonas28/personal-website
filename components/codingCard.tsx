import { useState } from "react"

export default function CodingCard() {
    const [jsHover, setJsHover] = useState(false)
    const [nextHover, setNextHover] = useState(false)
    const [reactHover, setReactHover] = useState(false)


    return (
        <section className="max-w-md" id="coding-card">
        <div className="tracking-wider drop-shadow-md text-2xl bg-slate-800 p-4 rounded-lg text-white font-mono">
          <p className=""> 
            <span className="text-blue-400">
               &lt;p&gt; 
              </span> Ich entwickle Webseiten mit <strong className="text-red-400">
              <span onMouseLeave={() => setJsHover(false)} onMouseEnter={() => setJsHover(true)} className="relative cursor-pointer transition-all hover:text-3xl"> 
              JavaScript, 
              <span className={!jsHover ? "hidden" : "" + "absolute p-2 text-sm bg-white text-slate-900 top-7 left-0 rounded-lg"}>
                eine beliebte Programmiersprache
              </span>
              </span> <span onMouseLeave={() => setReactHover(false)} onMouseEnter={() => setReactHover(true)} className="relative cursor-pointer transition-all hover:text-3xl"> 
              React
              <span className={!reactHover ? "hidden" : "" + "absolute p-2 text-sm bg-white text-slate-900 top-7 left-0 rounded-lg"}>
                die populaerste Javascript-Bibliothek
              </span> &
              </span> <span onMouseLeave={() => setNextHover(false)} onMouseEnter={() => setNextHover(true)} className="relative cursor-pointer transition-all hover:text-3xl"> 
              Next
              <span className={!nextHover ? "hidden" : "" + "absolute p-2 text-sm bg-white text-slate-900 top-7 left-0 rounded-lg"}>
                das beste Framework fuer React
              </span>
              </span>
            </strong> <span className="text-blue-400">
              &lt;p/&gt;
            </span>
          </p>
        </div>
      </section>
    )
}