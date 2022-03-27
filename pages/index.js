import styles from '../styles/Home.module.css'
import Image from "next/image"
import Background from '../public/home_bg.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={`${styles.hero} px-5 py-5 text-center`}>
        <h1 className={`${styles.title} display-5 fw-bold mt-md-5`}>Get it while it's hot!</h1>
        <div className="col-lg-6 mx-auto">
          <p className={`${styles.subTitle} lead mb-4 mt-md-5`}>We create custom, personal pizzas with quality ingredients in only five minutes.</p>
        </div>
      </div>

    </div>
  )
}
