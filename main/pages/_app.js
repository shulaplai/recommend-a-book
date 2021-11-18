import { ThemeProvider } from "emotion-theming"
import GlobalStyles from "components/GlobalStyles/GlobalStyles"
import theme from "./theme/theme.js"
import getConfig from "next/config"
import fetch from "isomorphic-unfetch"
import Router from "next/router"
import { parseCookies } from "nookies"
import { QueryClientProvider, QueryClient } from "react-query"
import Nav from "../components/nav/nav.js"
const queryClient = new QueryClient()


function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation)

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav/>
          
       
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  } else {
    Router.push(location)
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  const jwt = parseCookies(ctx).jwt

  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

 

  return {
    pageProps,
    navigation,
  }
}

