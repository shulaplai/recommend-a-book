import Image from "next/image"

function Article({ article }) {
  console.log(article)

 

  return (
    <>
      <div >
        <Image src={article.image.url} width={300} height={300} />
        
          {article.title}
        
        <div Width={600}>
          {article.description}
          {article.content}
          
        </div>
      </div>
    </>
  )
}


export async function getStaticPaths() {
  const res = await fetch(
    "https://recommendbook-api.herokuapp.com/articles"
  )
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
