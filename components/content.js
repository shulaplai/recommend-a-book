import React, { useEffect, useState } from "react"


export default function Content({ article }) {
  console.log(article)
  const [random, setRandom] = useState("")
    const [reveal, setReveal] = useState("")

  useEffect(() => {
    randomItem()
  }, [])
  const randomItem = () => {
    let randomNum = Math.floor(Math.random() * article.length)
    let randomElement = article[randomNum]
    setRandom(randomElement.description)     
    setReveal(randomElement.title)

    console.log(randomElement.description)
  }
  const handleClick = () => {
    randomItem()
  }
  
  return (
    <div>
      <div class="flex my-16	 justify-center items-center">
        <button
          onClick={handleClick}
          class="flex  content-center justify-center justify-self-auto bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold py-12 px-16 border border-gray-400 rounded shadow"
        >
          Next
        </button>
      </div>

      <div>
        <p>{random}</p>
      </div>
      <div class="my-16	flex h-screen justify-center items-center">
        <button
          
          class="flex  content-center justify-center justify-self-auto bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold py-12 px-16 border border-gray-400 rounded shadow"
        >
          Reveal
        </button>
        <div>
          <p>{reveal}</p>
        </div>
      </div>
    </div>
  )
}
