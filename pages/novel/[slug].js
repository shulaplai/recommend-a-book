import Image from "next/image"
import ReactMarkdown from "react-markdown"

function Article({ article }) {
  return (
    <>
      <div className="flex 	 justify-center items-center  border-none border-4  h-auto  ">
        <div className="  justify-center items-center	mx-28	 h-auto py-8 px-8 rounded-3xl ">
          <ReactMarkdown className="  justify-center items-center	mx-20 text-4xl text-gray-800 font-bold	">
            {article.title}
          </ReactMarkdown>
          <div className="flex 	justify-center items-center	 h-auto py-8 px-20 border-dashed border-4 border-light-blue-500 rounded-3xl">
            <ReactMarkdown className="  	text-gray-800 font-semi bold">
              {article.content}
            </ReactMarkdown>
          </div>
          <div className="  justify-center items-center	mx-48">
            <Image
              src={article.image.url}
              width={150}
              height={225}
              layout="fixed"
              
            />
          </div>{" "}
          {/* <ReactMarkdown className="text-sm	">
            {article.description}
          </ReactMarkdown> */}
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://recommendbook-api.herokuapp.com/articles")
  const data = await res.json()

  return {
    paths: data.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://recommendbook-api.herokuapp.com/articles?slug=${params.slug}`
  )
  const data = await res.json()

  return {
    props: {
      article: data[0],
    },
    revalidate: 1,
  }
}

export default Article
