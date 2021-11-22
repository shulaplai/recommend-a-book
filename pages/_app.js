
import { QueryClientProvider, QueryClient } from "react-query"
import Nav from "../components/nav/nav.js"
import "../style.css"

const queryClient = new QueryClient()

function MyApp({  Component, pageProps  }) {

  return (
    <div className="h-full bg-gray-200	">
      <Nav />
      
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    
  )
  }
export default MyApp
