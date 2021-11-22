// import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import React, { useEffect, useState } from "react"


import Content from "../components/content.js"

const Home = ({ articles }) => {
  

  return (
    <Box variant="container">
     <Content article={articles}></Content>
    </Box>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://recommendbook-api.herokuapp.com/articles`)
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}

export default Home
