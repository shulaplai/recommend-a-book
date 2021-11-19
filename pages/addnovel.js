import { useState } from "react"
import { parseCookies } from "nookies"
import React, { useEffect } from "react"
import axios from "axios"

function AddArticle() {
  const [articleTitle, setArticleTitle] = useState("")
  const [articleSlug, setArticleSlug] = useState("")
  const [articleDescription, setArticleDescription] = useState("")
  const [articleContent, setArticleContent] = useState("")
  const [articleImage, setArticleImage] = React.useState()
  const [isFilePicked, setIsFilePicked] = useState(false)
  const changeHandler = (event) => {
    console.log(event.target.files[0])
    setArticleImage(event.target.files[0])
    setIsFilePicked(true)
  }

  async function addArticle() {
    const jwt = parseCookies().jwt

    var formData = new FormData()

    formData.append("image", articleImage)
    formData.append("title", articleTitle)
    formData.append("slug", articleSlug)
    formData.append("description", articleDescription)
    formData.append("content", articleContent)

    axios({
      method: "POST",
      url: `https://recommendbook-api.herokuapp.com/articles`,
      data: formData,
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MjUxODQyLCJleHAiOjE2Mzk4NDM4NDJ9.EPA22FcevYV-23yYpGu-0sEa-EAjQVJ-UTm6o3jgRGw`,
      },
    })
      .then(({ data }) => {
        setResponse(data)
        console.log("Succesfully uploaded: ", JSON.stringify(data))
      })
      .catch((error) => {
        console.log("Error: ", error.response.data)
      })
  }
  //  POST
  // axios({
  //   method: "post",
  //   url: "/user/12345",
  //   data: {
  //     firstName: "Fred",
  //     lastName: "Flintstone",
  //   },
  // })
  // const add = await fetch(
  //   `https://recommendbook-api.herokuapp.com/articles`,
  //   {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MjUxODQyLCJleHAiOjE2Mzk4NDM4NDJ9.EPA22FcevYV-23yYpGu-0sEa-EAjQVJ-UTm6o3jgRGw`,
  //       Accept: "application/json",
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: JSON.stringify(articleInfo),
  //   }
  // )

  // const addResponse = await add.json()
  // console.log(addResponse)
  // alert("sucessfully add")

  return (
    <div className="flex my-16	 justify-center items-center">
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Title and author"
            />
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Slug
            </label>
            <input
              onChange={(e) => setArticleSlug(e.target.value)}
              value={articleSlug}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Slug"
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
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-12">
          <div className="w-full ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Content{" "}
            </label>
            <p className="text-gray-600 text-xs italic">Make it 100-500words</p>
            <div>
              <textarea
                type="text"
                onChange={(e) => setArticleContent(e.target.value)}
                value={articleContent}
                placeholder="article feeling"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-16 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
              />
            </div>
          </div>
          <div className=" 	w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Attach a file
                        </p>
                      </div>
                      <input
                        type="file"
                        onChange={changeHandler}
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
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )}
                <div className="flex justify-center p-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={() => addArticle()}
            className="block items-center justify-center appearance-none  w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
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
