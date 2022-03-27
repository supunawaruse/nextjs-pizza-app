import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in Sri Lanka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
