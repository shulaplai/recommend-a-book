import fetch from "isomorphic-unfetch"
// import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import Image from "next/image"
import React, { useEffect, useState } from "react"

import NextButtons from "../components/button.js"
import RevealButtons from "../components/buttonreveal.js"

import Content from "../components/content.js"
import shuffle from "lodash/shuffle"

const Home = ({ articles }) => {
  console.log(articles)
  const [random, setRandom] = useState("")

  let firstRandomElement = shuffle(articles)[0]
  function randomItem() {
    const randomElement = shuffle(articles)[0]
    setRandom(randomElement)
    console.log(randomElement)
  }
  const handleClick = () => {
    randomItem()
  }
  return (
    <Box variant="container">
      <NextButtons onClick={handleClick}></NextButtons>

      <Content></Content>
      <div>
        {firstRandomElement.description}
        <p>{random}</p> 
      </div>
      <RevealButtons onClick={console.log("ss")}></RevealButtons>
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
