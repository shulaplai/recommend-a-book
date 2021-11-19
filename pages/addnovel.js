import { Box } from "reflexbox"
import styled from "@emotion/styled"
import getConfig from "next/config"
import { useState } from "react"
import { parseCookies } from "nookies"
// import UploadImage from "../components/uploadimage.js"
const { publicRuntimeConfig } = getConfig()

function AddArticle() {
  const [articleTitle, setArticleTitle] = useState("")
  const [articleSlug, setArticleSlug] = useState("")
  const [articleDescription, setArticleDescription] = useState("")
  const [articleContent, setArticleContent] = useState("")
  const [articleImage, setArticleImage] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)
  const changeHandler = (event) => {
    setArticleImage(event.target.files[0])
    setIsFilePicked(true)
  }
  async function addArticle() {
    const jwt = parseCookies().jwt

    const articleInfo = {
      title: articleTitle,
      slug: articleSlug,
      description: articleDescription,
      content: articleContent,
      image: articleImage,
    }

    const add = await fetch(
      `https://recommendbook-api.herokuapp.com/articles`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MjUxODQyLCJleHAiOjE2Mzk4NDM4NDJ9.EPA22FcevYV-23yYpGu-0sEa-EAjQVJ-UTm6o3jgRGw`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleInfo),
      }
    )

    const addResponse = await add.json()

    console.log(addResponse)
    alert("sucessfully add")
  }

  return (
    <div className="flex my-16	 justify-center items-center">
      <Box variant="container">
        <Box as="h2" my={40}>
          Add article
        </Box>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Title of the novel
              </label>
              <input
                onChange={(e) => setArticleTitle(e.target.value)}
                value={articleTitle}
                placeholder="article title"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Title and author"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                description{" "}
              </label>
              <textarea
                type="text"
                onChange={(e) => setArticleDescription(e.target.value)}
                value={articleDescription}
                placeholder="article feeling"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-16 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Content{" "}
              </label>
              <p className="text-gray-600 text-xs italic">
                Make it 100-500words
              </p>
              <textarea
                type="text"
                onChange={(e) => setArticleContent(e.target.value)}
                value={articleContent}
                placeholder="article title"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-20 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Image{" "}
              </label>
              <div className="flex justify-center mt-8">
                <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                  <div className="m-4">
                    <label className="inline-block mb-2 text-gray-500">
                      File Upload
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file
                          </p>
                        </div>
                        <input
                          onChange={changeHandler}
                          type="file"
                          className="opacity-0"
                        />
                      </label>
                    </div>
                  </div>
                  {isFilePicked ? (
                    <div>
                      <p>Filename: {articleImage.name}</p>
                      <p>Filetype: {articleImage.type}</p>
                      <p>Size in bytes: {articleImage.size}</p>
                      <p>
                        lastModifiedDate:{" "}
                        {articleImage.lastModifiedDate.toLocaleDateString()}
                      </p>
                    </div>
                  ) : (
                    <p>Select a file to show details</p>
                  )}
                  <div className="flex justify-center p-2">
                    <input
                      type="file"
                      onChange={changeHandler}
                      className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="button"
              onClick={() => addArticle()}
              className="block items-center justify-center appearance-none  w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            >
              Submit
            </button>
          </div>
        </form>
      </Box>{" "}
    </div>
  )
}


export default AddArticle

export async function getServerSideProps() {
  const res = await fetch(`https://recommendbook-api.herokuapp.com/articles`)
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}
