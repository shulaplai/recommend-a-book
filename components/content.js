import React, { useEffect, useState } from "react"

import NextButtons from "../components/button.js"
import RevealButtons from "../components/buttonreveal.js"


export default function Content({article}) {
  console.log(article)
  const [random, setRandom] = useState("")
  useEffect(() => {
    randomItem()
  }, [])
  const randomItem = () => {
    let randomNum = Math.floor(Math.random() * article.length)
    let randomElement = article[randomNum]
    setRandom(randomElement.description)
    console.log(randomElement.description)
  }
  const handleClick = () => {
    randomItem()
  }
  return (
    <div>
     <NextButtons />

      <div>
        <p>{random}</p>
      </div>
      <RevealButtons></RevealButtons></div>
  )
}