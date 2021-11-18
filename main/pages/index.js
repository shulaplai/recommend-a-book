import fetch from "isomorphic-unfetch"
import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import { withTranslation } from "../i18n"
import Image from "next/image"

import propTypes from "prop-types"
import NextButtons from "../components/button.js"
import RevealButtons from "../components/buttonreveal.js"

import Content from "../components/content.js"

const Home = ({ articles }) => {
  console.log(articles)

  return (
    <Box variant="container">
      <NextButtons></NextButtons>
      <Content></Content>
      <Box my={40} as="h2">
      </Box>
    <RevealButtons></RevealButtons>
    </Box>
  )
}

Home.propTypes = {
  t: propTypes.func.isRequired,
  articles: propTypes.array.isRequired,
}

export async function getServerSideProps() {
  const { API_URL } = `https://recommendbook-api.herokuapp.com/articles`

  const res = await fetch(
    `https://recommendbook-api.herokuapp.com/articles`
  )
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}

export default withTranslation()(Home)
