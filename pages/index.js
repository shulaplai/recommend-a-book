import fetch from "isomorphic-unfetch"
// import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import Image from "next/image"

import NextButtons from "../components/button.js"
import RevealButtons from "../components/buttonreveal.js"

import Content from "../components/content.js"
import shuffle from "lodash/shuffle"

const Home = ({ articles }) => {
  console.log(articles)
  const [random, setRandom] = useState("")

  let firstRandomElement = shuffle(articles)[0]
  function randomItem(articles) {
    const firstRandomElement = shuffle(articles)[0]
    setRandom(firstRandomElement.description)
  }
  const handleClick = () => {
    randomItem()
  }
  return (
    <Box variant="container">
      <NextButtons onClick={handleClick}></NextButtons>

      <Content article={firstRandomElement}></Content>
      <div>
        {firstRandomElement.description}
        {random}
      </div>
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
