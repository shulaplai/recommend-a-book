import fetch from "isomorphic-unfetch"
// import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import Image from "next/image"

import NextButtons from "../components/button.js"
import RevealButtons from "../components/buttonreveal.js"

import Content from "../components/content.js"

 const Home = ({ articles }) => {
  console.log(articles)

  return (
    <Box variant="container">
      <NextButtons></NextButtons>
      <Content></Content>
     
    <RevealButtons></RevealButtons>
    </Box>
  )
}


export async function getServerSideProps() {

  const res = await fetch(`https://recommendbook-api.herokuapp.com/articles`)
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}

export default Home