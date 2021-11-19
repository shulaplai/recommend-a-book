import React, { useEffect, useState } from "react"
import Image from "next/image"

export default function Content({ article }) {
  console.log(article)
  const [random, setRandom] = useState("")
  const [reveal, setReveal] = useState("")
  const [cover, setCover] = useState("")

  const [showModal, setShowModal] = React.useState(false)

  useEffect(() => {
    randomItem()
  }, [])
  const randomItem = () => {
    let randomNum = Math.floor(Math.random() * article.length)
    let randomElement = article[randomNum]
    setRandom(randomElement.description)
    setReveal(randomElement.title)
    setCover(randomElement.image.url)
  }
  const handleClick = () => {
    randomItem()
    setShowModal(false)
  }

  return (
    <div>
      <div className="flex my-16	 justify-center items-center">
        <button
          onClick={handleClick}
          className="flex  content-center justify-center justify-self-auto bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold py-12 px-16 border border-gray-400 rounded shadow"
        >
          Next
        </button>
      </div>

      <div>
        <p>{random}</p>
      </div>
      <div className="my-16	flex h-screen justify-center items-center">
        <button
          onClick={() => setShowModal(true)}
          className="flex  content-center justify-center justify-self-auto bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold py-12 px-16 border border-gray-400 rounded shadow"
        >
          Reveal
        </button>
        {showModal ? (
          <div>
           <Image
              src={cover}
              width={300}
              height={300}
             
            /> 
            <p>{reveal}</p>
            <button
              onClick={handleClick}
              className="flex  content-center justify-center justify-self-auto bg-gray-300 hover:bg-gray-600 text-gray-800 font-semibold py-12 px-16 border border-gray-400 rounded shadow"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
