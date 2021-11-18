import { Box, Flex } from "reflexbox"
import getConfig from "next/config"
import fetch from "isomorphic-unfetch"
import { NextSeo } from "next-seo"

function article({ article }) {
  console.log(article)

  const SEO = {
    title: `Next articles | ${article.title}`,
    description: article.description,

    openGraph: {
      title: `Next articles | ${article.title}`,
      description: article.title,
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
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

const { publicRuntimeConfig } = getConfig()

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
