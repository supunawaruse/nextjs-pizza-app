import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import logo from "../public/logo.png"
import styles from "../styles/Header.module.css"

const Header = () => {
  
  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <nav className={`${styles.header} navbar navbar-expand-sm px-4 px-md-5`}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="bi bi-justify" style={{color:'white',fontSize:24}}></i></span>
      </button>
      <div className="collapse navbar-collapse nav-mobile" id="navbarSupportedContent">
        <div className={styles.item}>
          <div className={styles.callButton}>
            <i className="bi bi-telephone-fill"></i>
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>+07 123 123</div>
          </div>
        </div>
        <div className={styles.item}>
        <ul className="navbar-nav me-auto d-flex align-items-md-center justify-content-center my-3 my-md-0">
          <li className="nav-item d-sm-none">
            <Link href="/">
              <a className="nav-link active" aria-current="page" >
                <Image src={logo} alt="" className="img-fluid" />
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className={`${styles.nav_text} nav-link mx-md-2`}>HOME</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/menu">
              <a className={`${styles.nav_text} nav-link mx-md-2`} >MENU</a>
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link href="/">
              <a className="nav-link mx-1" href="#">
                  <Image src={logo} alt="" className="img-fluid" />
              </a>
            </Link>
          </li>
          {/* <li className="nav-item">
              <a className={`${styles.nav_text} nav-link mx-md-2`} href="/">ABOUT</a>
          </li>
          <li className="nav-item">
              <a className={`${styles.nav_text} nav-link mx-md-2`} href="/">CONTACT</a>
          </li> */}
        </ul>
        </div>

        <Link href="/cart" passHref>
        <div className={`${styles.item} d-flex justify-content-sm-end`}>
          <div className={styles.cart}>
            <i className="bi bi-cart" style={{fontSize:20,color:'white'}}></i>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
        </Link>
      </div>
  </nav>
  )
}

export default Header