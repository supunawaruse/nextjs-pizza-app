import styles from '../styles/components/HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={styles.section}>
        <div className='container'>
            <h1 className={styles.title}>Pizza Menu</h1>
        </div>
    </div>
  )
}

export default HeroSection