import { Html, Head, Main, NextScript } from 'next/document'
import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from 'react'

export default function Document() {
  const [theme, setTheme] = useState("author")

  return (
    <Html lang="en">
      <Head />
      <body className="bg-zinc-100 font-serif">
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
