import Header from "@/components/header"

export default function PostPage() {
    return (
        <>
        <Header />
        <main className="mt-[8vh] px-[2vh] py-[2vh] min-h-screen bg-white">
                <div className="border-b-2 border-dotted mb-8 py-5 border-zinc-300">
                    <span className="text-sm text-red-900">Kategorie 1</span>
                    <h1 className="text-3xl font-bold mb-4">
                        Hier werden Posts angezeigt
                    </h1>
                    <p className="mb-4">
                    1057 Euro brutto verdienten Auszubildende in Deutschland 2022 im Schnitt. Azubis in Gesundheit und Pflege bekamen besonders viel – Künstlerberufe brachten dagegen wenig. Frauen verdienten im Schnitt mehr als Männer.
                    </p>
                    <span className="opacity-80 text-sm">
                        19.04.23
                    </span>
                </div>
                <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida dignissim turpis, in eleifend est ultricies id. Etiam sit amet suscipit lectus. Mauris eu quam ligula. Nullam posuere posuere est, eu laoreet arcu finibus at. Sed tempor, odio non dictum finibus, elit odio pretium felis, quis semper nisi tellus quis nisi. Pellentesque semper fringilla convallis. Morbi velit sapien, tristique at nibh at, maximus dictum leo. Nunc pulvinar purus sed metus vehicula fermentum. Pellentesque massa odio, rhoncus nec consectetur vitae, porta et est. Vivamus euismod ullamcorper augue. Vivamus egestas placerat semper. Vivamus bibendum semper pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                </p>
                <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida dignissim turpis, in eleifend est ultricies id. Etiam sit amet suscipit lectus. Mauris eu quam ligula. Nullam posuere posuere est, eu laoreet arcu finibus at. Sed tempor, odio non dictum finibus, elit odio pretium felis, quis semper nisi tellus quis nisi. Pellentesque semper fringilla convallis. Morbi velit sapien, tristique at nibh at, maximus dictum leo. Nunc pulvinar purus sed metus vehicula fermentum. Pellentesque massa odio, rhoncus nec consectetur vitae, porta et est. Vivamus euismod ullamcorper augue. Vivamus egestas placerat semper. Vivamus bibendum semper pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                </p>
        </main>
     
        </>
    )
}