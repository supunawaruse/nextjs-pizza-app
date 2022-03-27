import Image from "next/image"
import logo from "../public/logo.png"
import styles from "../styles/Footer.module.css"
import deco from "../public/decor-2.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={`${styles.title} display-5 fw-bold`}>+34 9 368 7050</h1>
      <h2 className={`${styles.title} fw-bold`}>order@pizza.com</h2>
      <div className={styles.decor}>&</div>
      <ul className="list-inline mt-4">
        <li className={styles.list_item}><a className={styles.list_link} href="#">Facebook</a></li>
        <li className={styles.list_item}><a className={styles.list_link} href="#">Twitter</a></li>
        <li className={styles.list_item}><a className={styles.list_link} href="#">Instagram</a></li>
        <li className={styles.list_item}><a className={styles.list_link} href="#">Pinterest</a></li>
        <li className={styles.list_item}><a className={styles.list_link} href="#">Flickr</a></li>
      </ul>
      <div className={styles.footer_end}>
        <span>Copyright © 2022 Pezzeria. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer