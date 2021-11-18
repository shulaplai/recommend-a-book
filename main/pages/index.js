import fetch from "isomorphic-unfetch"
import Card from "components/Card"
import { Flex, Box } from "reflexbox"
import { withTranslation } from "../i18n"
import Image from "next/image"

import propTypes from "prop-types"

const Home = ({ articles, t }) => {
  console.log(articles)

  return (
    <Box variant="container">
      <Image src="/images/chewy.jpg" width={2400} height={1600} />
      <Box my={40} as="h2">
        {t("Latest articles")}
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "row" }}
        mb={100}
        flexWrap="wrap"
      >
        {articles.map((article) => (
          <Box key={article.id} width={{ _: "100%", md: "30%" }}>
            <Card article={article} />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

Home.propTypes = {
  t: propTypes.func.isRequired,
  articles: propTypes.array.isRequired,
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(
    `https://recommendbook-api.herokuapp.com/articles`
  )
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}

export default withTranslation()(Home)
