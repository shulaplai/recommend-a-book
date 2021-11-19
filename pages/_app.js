
import { parseCookies } from "nookies"
import { QueryClientProvider, QueryClient } from "react-query"
import Nav from "../components/nav/nav.js"
import "../style.css"
import "quill/dist/quill.snow.css" 

const queryClient = new QueryClient()

function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation)

  return (
    <>
        <Nav/>
          
       
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
    </>
  )
}



MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  const jwt = parseCookies(ctx).jwt


  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

 

  return {
    pageProps,
  }
}

export default MyApp
