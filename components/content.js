import React, { useEffect, useState } from "react"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
//reactmarkdown cannot use {}, or it will fail
export default function Content({ article }) {
  const [random, setRandom] = useState("")
  const [revealTitle, setRevealTitle] = useState("")
  const [revealDescription, setRevealDescription] = useState("")

  const [cover, setCover] = useState("")

  const [showModal, setShowModal] = React.useState(false)

  useEffect(() => {
    randomItem()
  }, [])
  const randomItem = () => {
    let randomNum = Math.floor(Math.random() * article.length)
    let randomElement = article[randomNum]
    setRandom(randomElement.content)
    setRevealTitle(randomElement.title)
    setRevealDescription(randomElement.description)
    setCover(randomElement.image.url)
  }
  const handleClick = () => {
    randomItem()
    setShowModal(false)
  }

  return (
    <div>
      <div className="flex mt-16	 justify-center items-center">
        <button
          onClick={handleClick}
          className="  bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl	"
        >
          下一本
        </button>
      </div>

      <div className="flex 	 justify-center items-center  border-none border-4  h-auto  ">
        <div className="justify-center items-center	mx-28	 h-auto py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl ">
          <ReactMarkdown>{random}</ReactMarkdown>
        </div>
      </div>
      <div className="mt-4	flex  justify-center items-center">
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
          <div className="flex 	justify-center items-center	mx-28	 h-auto py-8 px-20 border-dashed border-4 border-light-blue-500 rounded-3xl">
            <Image src={cover} width={150} height={225} layout="fixed" />
            <div className="  text-4xl	justify-center items-center		text-gray-800 font-semi bold">
              <ReactMarkdown>{revealTitle}</ReactMarkdown>
              <ReactMarkdown className="text-sm	">
                {revealDescription}
              </ReactMarkdown>
            </div>{" "}
          </div>
          <div className="flex 	 justify-center items-center ">
            <button
              onClick={handleClick}
              className=" h-1/2	bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 rounded-3xl	"
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
