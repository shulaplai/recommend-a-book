
import styled from "@emotion/styled"
import Link from "next/link"
import Image from "next/image"

function RevealCard({ article }) {
  const { API_URL } = `https://recommendbook-api.herokuapp.com/articles`

  return (
    <RevealCardStyled>
      {article.image && (
        <div className="poster">
          <Image
            src={API_URL + article.image.url}
            width={article.image.width}
            height={article.image.height}
          />
        </div>
      )}
      <div className="body">
        <h3>{article.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: article.description }} />

        <Link href="/articles/[slug]" as={`/articles/${article.slug}`}>
          <a>More about this article</a>
        </Link>
      </div>
    </RevealCardStyled>
  )
}

const RevealCardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`

export default RevealCard
