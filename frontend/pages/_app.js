import '../styles/globals.css'
import DefaultLayout from '../layouts/default.js'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
