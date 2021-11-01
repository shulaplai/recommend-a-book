import React from "react"
import Cards from "./card"

const Articles = ({ articles }) => {
  const Articles = articles.slice(0, articles.length)
  return (
    <div>
      <div className=".uk-child-width-*	">
        <div>
          {Articles.map((article, i) => {
            return (
              <Cards article={article} key={`article__left__${article.slug}`} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
