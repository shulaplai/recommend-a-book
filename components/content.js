import React, { useEffect, useState } from "react"
import Image from "next/image"

export default function Content({ article }) {
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
    setRandom(randomElement.content)
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
          className="  bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl	"
        >
          下一本
        </button>
      </div>

      <div className="flex 	 justify-center items-center  border-none border-4  h-auto  ">
        <div className="justify-center items-center	 h-auto  ">{random}</div>
      </div>
      <div className="my-4	flex  justify-center items-center">
        <button
          onClick={() => setShowModal(true)}
          className="  bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl	"
        >
          Reveal
        </button>
        <br />
      </div>
      {showModal ? (
        <div>
          <div className="flex 	 justify-center items-center ">
            <Image src={cover} width={150} height={225} />
            <div className=" h-1/2 text-3xl		text-gray-800 font-semi bold">
              {reveal}
            </div>{" "}
          </div>
          <div className="flex 	 justify-center items-center ">
            <button
              onClick={handleClick}
              className=" h-1/2	bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl	"
            >
              Next
            </button>
          </div>{" "}
        </div>
      ) : null}
    </div>
  )
}
