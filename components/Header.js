import Image from "next/image"
import logo from "../public/logo.png"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <nav className={`${styles.header} navbar navbar-expand-sm px-3 px-md-5`}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-mobile" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto d-flex d-sm-none">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <Image src={logo} alt="" className="img-fluid" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav m-auto">
          
          <li className="nav-item">
            <a className={`${styles.nav_text} nav-link`} href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a className={`${styles.nav_text} nav-link`} href="/menu">MENU</a>
          </li>
        </ul>
  
        <ul className="navbar-nav d-none d-sm-flex m-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <Image src={logo} alt="" className="img-fluid" />
            </a>
          </li>
        </ul>
  
        <ul className="navbar-nav m-auto">
            <li className="nav-item">
                <a className={`${styles.nav_text} nav-link`} href="/">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className={`${styles.nav_text} nav-link`} href="/">CONTACT</a>
              </li>
        </ul>
      </div>
  </nav>
  )
}

export default Header