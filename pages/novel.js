import { Flex, Box } from "reflexbox"
import Image from "next/image"
import Link from "next/link"

function ArticlesPage( {articles}) {


  return (
    <Box variant="container" pt={40}>
      <div>
        {articles.map((article) => (
          <Link as={`/novel/${article.slug}`} href="/novel/[id]" passHref>
            <div key={article.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                  width={300}
                  height={300}
                  src={article.image.url}
                  alt="image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{article.title}</div>
                  <p className="text-gray-700 text-base">{article.content}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
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

export default ArticlesPage
