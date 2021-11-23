import { useState } from "react"
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

  async function addCover(event) {
    event.preventDefault()

    var formData = new FormData()

    formData.append("files", articleImage)
    
    await axios({
      method: "POST",
      url: `https://recommendbook-api.herokuapp.com/upload`,
      data: formData,
      headers: {
        // Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MjUxODQyLCJleHAiOjE2Mzk4NDM4NDJ9.EPA22FcevYV-23yYpGu-0sEa-EAjQVJ-UTm6o3jgRGw`,
      },
    })
      .then((res) => {
        alert("sucessfully add")

        console.log("Succesfully uploaded: ", res)
      })
      .catch((error) => {
        console.log("Error: ", error.response)
      })
  }
  async function addArticle() {
    const articleInfo = {
      title: articleTitle,
      description: articleDescription,
      content: articleContent,
    }
    await axios({
      url: `https://recommendbook-api.herokuapp.com/articles`,

      method: "POST",
      data: articleInfo,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MjUxODQyLCJleHAiOjE2Mzk4NDM4NDJ9.EPA22FcevYV-23yYpGu-0sEa-EAjQVJ-UTm6o3jgRGw`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(articleInfo),
    })
      .then((res) => {
        alert("sucessfully add")

        console.log("Succesfully uploaded: ", res)
      })
      .catch((error) => {
        console.log("Error: ", error.response)
      })
  }
  return (
    <div className="flex mt-16	 justify-center items-center">
      <form className=" w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              書名
            </label>
            <input
              onChange={(e) => setArticleTitle(e.target.value)}
              value={articleTitle}
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              簡介{" "}
            </label>
            <textarea
              type="text"
              onChange={(e) => setArticleDescription(e.target.value)}
              value={articleDescription}
              placeholder="description"
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-16 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-12">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              內容節選{" "}
            </label>
            <p className="text-gray-600 text-xs italic">300-600字</p>
            <div>
              <textarea
                type="text"
                onChange={(e) => setArticleContent(e.target.value)}
                value={articleContent}
                placeholder="Content"
                className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-16 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
              />
            </div>
          </div>
          <div className="  px-3	w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              封面
            </label>
            <div className="flex justify-center mt-8">
              <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">
                    上傳檔案
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-4 border-blue-300 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/3000/svg"
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
                          Attach the Cover
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
                    <p>檔案名字: {articleImage.name}</p>
                    <p>檔案:類型: {articleImage.type}</p>
                  </div>
                ) : (
                  <p>上傳檔案以顯示檔案資料</p>
                )}
                <div className="flex justify-center p-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={addCover}
            className="bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl	"
          >
            提交封面
          </button>
        </div>
        <div className="w-full mt-12	 flex justify-center items-center">
          <button
            type="button"
            onClick={addArticle}
            className="bg-gray-300 hover:bg-green-400 text-4xl		text-gray-800 font-semi bold py-8 px-8 border-dashed border-4 border-light-blue-500 rounded-3xl	"
          >
            提交小說
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddArticle

export async function getStaticProps() {
  const res = await fetch(`https://recommendbook-api.herokuapp.com/articles`)
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}
