import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import store from '../redux/store'


function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in Sri Lanka" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
    </Provider>
  )
}

export default MyApp
