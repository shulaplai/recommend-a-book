import fetch from "isomorphic-unfetch"
import { Flex, Box } from "reflexbox"
import { useRouter } from "next/router"

function ArticlesPage({ articles, page, numberOfArticles }) {
  const router = useRouter()
  console.log(numberOfArticles)

  const lastPage = Math.ceil(numberOfArticles / 3)

  return (
    <Box variant="container" pt={40}>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
          </li>
        ))}
      </ul>
      <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button
          onClick={() => router.push(`/articles?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => router.push(`/articles?page=${page + 1}`)}
          disabled={page >= lastPage}
        >
          Next
        </button>
      </Flex>
    </Box>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env

  const start = +page === 1 ? 0 : (+page - 1) * 3

  const numberOfArticlesResponse = await fetch(
    `https://recommendbook-api.herokuapp.com/articles/count`
  )
  const numberOfArticles = await numberOfArticlesResponse.json()

  const res = await fetch(
    `https://recommendbook-api.herokuapp.com/articles?_limit=3&_start=${start}`
  )
  const data = await res.json()

  return {
    props: {
      articles: data,
      page: +page,
      numberOfArticles,
    },
  }
}

export default ArticlesPage
