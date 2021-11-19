import { Box, Flex } from "reflexbox"
import getConfig from "next/config"
import fetch from "isomorphic-unfetch"

function article({ article }) {
  console.log(article)

 

  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          {article.title}
        </Box>
        <Box maxWidth={600}>
          <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
        </Box>
      </Box>
    </>
  )
}


export async function getServerSideProps(context) {
  const { slug } = context.query
  const res = await fetch(
    `https://recommendbook-api.herokuapp.com/articles?slug=${slug}`
  )
  const data = await res.json()
  return {
    props: {
      article: data[0],
    },
  }
}

export default article
