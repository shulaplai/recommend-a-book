
import Nav from "../components/nav/nav.js"
import "../style.css"


function MyApp({  pageProps  }) {

  return (
    <><div className="bg-gray-200	">
      <Nav />
      
          <Component {...pageProps} />
      </div>
    </>
  )
}



MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}
export default MyApp
