export default function Gig() {
    return (
        <section className="min-h-[80vh]" id="gig">
      <h1 className="text-4xl"> Services </h1>
      <p className="pb-12"> Seit ueber </p>
      <div className={`bg-slate-100 text-slate-900 p-4 rounded `}>
        <h1 className="text-5xl font-bold">
          Webseiten
        </h1>
        <p>
          Seit fast fuenf Jahren betreibe ich meine eigene WordPress-Webseite. Seitdem habe ich einiges ueber Webentwicklung gelernt. Ich lege einen Schwerpunkt auf Webseiten, die sowohl fuer den Endnutzer als auch fuer den Autor einfach bedienbar und verstaendlich sind. 
        </p>
        <ul className="py-6 text-lg font-semibold ">
          <li className="hover:drop-shadow-lg hover:scale-105 flex gap-2 bg-slate-200 p-2 w-max rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

            responsive Webseite
          </li>
          <li className="hover:drop-shadow-lg hover:scale-105 flex gap-2 bg-slate-200 p-2 w-max rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

            Rapide Ladegeschwindigkeit
          </li>
          <li className="hover:drop-shadow-lg hover:scale-105 flex gap-2 bg-slate-200 p-2 w-max rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

            Suchmaschinen-Optimierung
          </li>
          <li className="hover:drop-shadow-lg hover:scale-105 flex gap-2 bg-slate-200 p-2 w-max rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

            Hosting
          </li>
          <li className="hover:drop-shadow-lg hover:scale-105 flex gap-2 bg-slate-200 p-2 w-max rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

            mit CMS (WordPress)
          </li>
        </ul>
        <button className="bg-green-600 text-white p-3 rounded-md text-2xl font-bold">
          kostenloses Erstgespraech
        </button>
        <button className="bg-green-600 text-white p-3 rounded-md text-2xl font-bold">
          Demo? / Beispielprojekte
        </button>
      </div>
      </section>
    )
}