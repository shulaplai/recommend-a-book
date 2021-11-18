import { Box } from "reflexbox"
import styled from "@emotion/styled"
import getConfig from "next/config"
import { useState } from "react"
import { parseCookies } from "nookies"

const { publicRuntimeConfig } = getConfig()

function AddArticle() {
  const [articleTitle, setArticleTitle] = useState("")
  const [articleSlug, setArticleSlug] = useState("")
  const [articleDescription, setArticleDescription] = useState("")
  const [articleContent, setArticleContent] = useState("")
  const [articleImage, setArticleImage] = useState("")

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
          Authorization: `Bearer ${jwt}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleInfo),
      }
    )

    const addResponse = await add.json()

    console.log(addResponse)
  }

  return (
    <AddArticleStyled>
      <Box variant="container">
        <Box as="h2" my={40}>
          Add article
        </Box>

        <form>
          <input
            type="text"
            onChange={(e) => setArticleTitle(e.target.value)}
            value={articleTitle}
            placeholder="article title"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setArticleSlug(e.target.value)}
            value={articleSlug}
            placeholder="article slug"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setArticleDescription(e.target.value)}
            value={articleDescription}
            placeholder="article title"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setArticleContent(e.target.value)}
            value={articleContent}
            placeholder="article title"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setArticleImage(e.target.value)}
            value={articleImage}
            placeholder="article title"
          />
          <br />
          <button type="button" onClick={() => addArticle()}>
            Add article
          </button>
        </form>
      </Box>
    </AddArticleStyled>
  )
}

const AddArticleStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`

export default AddArticle
