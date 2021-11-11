import React from "react"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import Image from "next/image"

const Home = ({ articles, categories, homepage }) => {
  return (
    <div>
      <div>the next novel</div>
      <p className="intro">
        Hello, I am Lai shu Lap. This is my blog. In here you can find
        <div>Reveal</div>
      </p>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}
