
import Nav from "../components/nav/nav.js"
import "../style.css"


function MyApp({  Component, pageProps  }) {

  return (
    <div className="h-full bg-gray-200	">
      <Nav />

      <Component {...pageProps} />
    </div>
  )
  }
export default MyApp
