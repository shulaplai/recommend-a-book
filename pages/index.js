import fetch from "isomorphic-unfetch"
// import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import Image from "next/image"
import React, { useEffect, useState } from "react"


import Content from "../components/content.js"
import shuffle from "lodash/shuffle"

const Home = ({ articles }) => {
  console.log(articles)
  

  return (
    <Box variant="container">
     <Content article={articles}></Content>
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
