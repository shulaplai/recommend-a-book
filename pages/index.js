// import Card from "components/Card"
import React, { useEffect, useState } from "react"


import Content from "../components/content.js"

const Home = ({ articles }) => {
  

  return (
    <div>
     <Content article={articles}></Content>
    </div>
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
