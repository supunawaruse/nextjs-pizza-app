import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in Sri Lanka" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredericka+the+Great&family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
    </>
  )
}

export default MyApp
