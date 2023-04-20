export default function ServicesSection() {
    return (
        <section   className="border-b-4 border-dashed border-white-600 mb-10" id="services-preview">
          <h1 className="text-4xl mb-8">
            Meine Services
          </h1>
          <div className="grid md:grid-cols-2 gap-7">
          <div className="relative mb-8 rounded-md">
            <img className="rounded-md max-h-72 w-full object-cover" src="https://images.unsplash.com/photo-1594892185343-0241e1d47d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80">
            </img>
            <h1 className="rounded-b-md text-white text-2xl text-center absolute bottom-0 h-16 p-4 left-0 right-0 bg-green-600 z-30">Webseite Erstellung</h1>
          </div>
          <div className="relative mb-8 rounded-md">
            <img className="rounded-md max-h-72 w-full object-cover" src="https://images.unsplash.com/photo-1594892185343-0241e1d47d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80">
            </img>
            <h1 className="rounded-b-md text-white text-2xl text-center absolute bottom-0 h-16 p-4 left-0 right-0 bg-green-600 z-30">Social Media</h1>
          </div>
          </div>     
        </section>
    )
}