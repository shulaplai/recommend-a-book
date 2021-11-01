import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Cards = ({ article }) => {
  return (
    <div
      className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <Link as={`/article/${article.slug}`} href="/article/[id]" passHref>
        <div className="uk-card-media-left uk-cover-container uk-card-hover">
          <NextImage
            variant="left"
            image={article.image}
            width="300px"
            hight="300px"
            uk-cover
          />

          <div className="uk-card-body">
            <h3 className="uk-card-title">{article.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards
