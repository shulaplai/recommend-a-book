import { Flex, Box } from "reflexbox"
import Image from "next/image"
import Link from "next/link"

function ArticlesPage( {articles}) {


  return (
    <div>
      {articles.map((article) => (
        <Link as={`/novel/${article.slug}`} href="/novel/[id]" passHref>
          <div
            key={article.id}
            className="flex  	justify-center items-center		 m-10 "
          >
            <div className=" 		w-40	rounded overflow-hidden shadow-lg">
              <Image
                width={160}
                height={200}
                src={article.image.url}
                alt="image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
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

export default ArticlesPage
